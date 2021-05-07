import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { meses } from 'src/app/models/meses/meses';
import { Premio } from 'src/app/models/premio/premio';
import { sorteosTypes, SorteoTypeInfo } from 'src/app/models/premio/sorteo-types.enum';
import { ShareService } from 'src/app/services/share-service/share.service';
import { IInputConfig } from 'src/app/ui/input-dr/input-dr.component';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';
import { ISelectConfig } from 'src/app/ui/select-dr/select-dr.component';

@Component({
  selector: 'app-premio-modal',
  templateUrl: './premio-modal.component.html',
  styleUrls: ['./premio-modal.component.scss'],
})
export class PremioModalComponent implements OnInit {

  @Input() title: string = 'Titulo';
  @Input() premio: Premio = null;
  
  form: FormGroup;
  fechaSorteoConfig: IInputConfig;
  numeroCuponConfig: IInputConfig;
  alumnoFavorecidoConfig: IInputConfig;
  alumnoExtractorConfig: IInputConfig;
  detalleExtraccionConfig: IInputConfig;
  mesConfig: ISelectConfig;
  tipoConfig: ISelectConfig;
  saveConfig: IRoundedButtonConfig;
  cancelConfig: IRoundedButtonConfig;
  tiposSorteoList: Array<SorteoTypeInfo> = sorteosTypes;

  constructor(private modalCtrl: ModalController, private shareSrv: ShareService) { }

  ngOnInit() {
    
    this.initForm();
    this.initConfigs();
  }
  
  initForm(){
    this.form = new FormGroup({
      id: new FormControl(this.premio && this.premio.obtenerId ? this.premio.obtenerId : null,{ validators: [], updateOn: 'change'}),
      fechaSorteo: new FormControl(this.premio && this.premio.obtenerFechaSorteo ? this.premio.obtenerFechaSorteo : '',{ validators: [Validators.required], updateOn: 'change'}),
      numeroCupon: new FormControl(this.premio && this.premio.obtenerNumeroCupon ? this.premio.obtenerNumeroCupon : '',{ validators: [Validators.required], updateOn: 'change'}),
      alumnoFavorecido: new FormControl(this.premio && this.premio.obtenerAlumnoFavorecido ? this.premio.obtenerAlumnoFavorecido : '',{ validators: [Validators.required], updateOn: 'change'}),
      alumnoExtractor: new FormControl(this.premio && this.premio.obtenerAlumnoExtractor ? this.premio.obtenerAlumnoExtractor : '',{ validators: [Validators.required], updateOn: 'change'}),
      detalleExtraccion: new FormControl(this.premio && this.premio.obtenerDetalleExtraccion ? this.premio.obtenerDetalleExtraccion : '',{ validators: [Validators.required], updateOn: 'change'}),
      mes: new FormControl(this.premio && this.premio.obtenerMes ? this.premio.obtenerMes : '',{ validators: [Validators.required], updateOn: 'change'}),
      tipo: new FormControl(this.premio && this.premio.obtenerTipo ? this.premio.obtenerTipo : '',{ validators: [Validators.required], updateOn: 'change'}),
    });
  }

  initConfigs(){
    this.fechaSorteoConfig = {
      form: this.form,
      formControlName: 'fechaSorteo',
      label: 'Fecha del sorteo',
      type: 'date'
    };

    this.numeroCuponConfig = {
      formControlName: 'numeroCupon',
      label: 'Número de cupón',
      type: 'number',
      form: this.form
    };

    this.alumnoFavorecidoConfig = {
      formControlName: 'alumnoFavorecido',
      label: 'Nombre del alumno favorecido',
      type: 'text',
      form: this.form
    };

    this.alumnoExtractorConfig = {
      formControlName: 'alumnoExtractor',
      label: 'Nombre del alumno que retiró el cupón',
      type: 'text',
      form: this.form
    };

    this.detalleExtraccionConfig = {
      formControlName: 'detalleExtraccion',
      label: 'Horario en que se extrajo el cupón',
      type: 'text',
      form: this.form
    };

    this.mesConfig = {
      form: this.form,
      formControlName: 'mes',
      label: 'Mes',
      list: meses,
      fieldToShow: 'description'
    }

    this.tipoConfig = {
      form: this.form,
      formControlName: 'tipo',
      label: 'Tipo',
      list: this.tiposSorteoList,
      fieldToShow: 'description'
    }

    this.saveConfig = {
      text: 'Guardar',
      leftIcon: 'save'
    };
    
    this.cancelConfig = {
      text: 'Cancelar',
      leftIcon: 'close'
    };
  }

  modalDismiss(dataBack){
    let data = null;
    if(dataBack && this.form.valid){
      data = this.form.value;
    } else if(dataBack && !this.form.valid) {
      this.shareSrv.presentToast({message: 'Debe ingresar datos para el sorteo', cssClass: 'WARNING_TOAST'});
      return;
    }
    this.modalCtrl.dismiss(data);
  }
}
