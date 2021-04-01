import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comision } from 'src/app/models/comision/comision';
import { diaTypeInfo } from 'src/app/models/dias/dias.types';
import { ComisionService } from 'src/app/services/comision/comision.service';
import { CursoService } from 'src/app/services/curso/curso.service';
import { ICursoSend } from 'src/app/services/curso/cursoService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';
import { IDaysCheckboxConfig } from 'src/app/ui/checkbox-dias-dr/checkbox-dias-dr.component';
import { IInputConfig } from 'src/app/ui/input-dr/input-dr.component';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';
import { ISelectConfig } from 'src/app/ui/select-dr/select-dr.component';

@Component({
  selector: 'app-comision-data-form',
  templateUrl: './comision-data-form.component.html',
  styleUrls: ['./comision-data-form.component.scss'],
})
export class ComisionDataFormComponent implements OnInit {
  @Input() comisionId: number;
  @Output('emitSave') emitSave: EventEmitter<Comision> = new EventEmitter(); 

  comision: Comision;
  form: FormGroup;
  codComisionConfig: IInputConfig;
  cursoConfig: ISelectConfig;
  horaComienzoConfig: IInputConfig;
  horaFinConfig: IInputConfig;
  fechaComienzoConfig: IInputConfig;
  fechaFinConfig: IInputConfig;
  saveConfig: IRoundedButtonConfig;
  cancelConfig: IRoundedButtonConfig;
  daysCheckboxConfig: IDaysCheckboxConfig;

  cursosList: Array<ICursoSend>;

  constructor(private comisionSrv: ComisionService, private cursosSrv: CursoService, private shareSrv: ShareService) { }

  async ngOnInit() {
    // Creo un objeto curso para manipular la información
    this.comision = new Comision();

    //Verifico que exista ID de comisión y lo busco en la BBDD
    if(this.comisionId){
      // TODO: buscar Comision
    }

    //Obtengo listado de cursos
    let responseCursos = await this.cursosSrv.getCursosList();

    if(responseCursos && responseCursos.exito && responseCursos.cursos.length>0){
      this.cursosList = responseCursos.cursos;
    } else {
      this.shareSrv.presentToast({message: responseCursos.messages[0], cssClass: 'ERROR_TOAST'});
    }

    this.initForm();
    this.initConfigs();
  }

  initForm(){
    this.form = new FormGroup({
      id: new FormControl(this.comision && this.comision.obtenerId ? this.comision.obtenerId : '',{ validators: [Validators.required], updateOn: 'change'}),
      curso: new FormControl(this.comision && this.comision.obtenerCurso ? this.comision.obtenerCurso : '',{ validators: [Validators.required], updateOn: 'change'}),
      dias: new FormControl(this.comision && this.comision.obtenerDias ? this.comision.obtenerDias : '',{ validators: [Validators.required], updateOn: 'change'}),
      horaDesde: new FormControl(this.comision && this.comision.obtenerHoraDesde ? this.comision.obtenerHoraDesde : '', { validators: [Validators.required], updateOn: 'change'}),
      horaHasta: new FormControl(this.comision && this.comision.obtenerHoraHasta ? this.comision.obtenerHoraHasta : '', { validators: [Validators.required], updateOn: 'change'}),
      fechaInicio: new FormControl(this.comision && this.comision.obtenerFechaInicio ? this.comision.obtenerFechaInicio :'', { validators: [Validators.required], updateOn: 'change'}),
      fechaFin: new FormControl(this.comision && this.comision.obtenerFechaFin ? this.comision.obtenerFechaFin :'', { validators: [Validators.required], updateOn: 'change'})
    });

    this.form.valueChanges.subscribe(ob =>{
      Object.assign(this.comision, ob);
    });
  }

  initConfigs(){

    this.cursoConfig = {
      fieldToShow: 'nombre',
      form: this.form,
      formControlName: 'curso',
      label: 'Nombre del curso',
      list: this.cursosList
    };

    this.daysCheckboxConfig = {
      form: this.form,
      formControlName: 'dias'
    }

    this.horaComienzoConfig = {
      form: this.form,
      formControlName: 'horaDesde',
      label: 'Hora de comienzo',
      type: 'time'
    };

    this.horaFinConfig = {
      form: this.form,
      formControlName: 'horaHasta',
      label: 'Hora de finalizado',
      type: 'time'
    };

    this.fechaComienzoConfig = {
      form: this.form,
      formControlName: 'fechaInicio',
      label: 'Fecha de comienzo',
      type: 'date'
    };

    this.fechaFinConfig = {
      form: this.form,
      formControlName: 'fechaFin',
      label: 'Fecha de finalizado',
      type: 'date'
    };

    this.saveConfig = {
      text: 'Guardar',
      leftIcon: 'save'
    };
    
    this.cancelConfig = {
      text: 'Cancelar',
      leftIcon: 'close'
    };
  }

  get dias() { return this.form.controls.dias; }

  addDiasList(event: Array<diaTypeInfo>){
    this.dias.patchValue(event);
  }

}
