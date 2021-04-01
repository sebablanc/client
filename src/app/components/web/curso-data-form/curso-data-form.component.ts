import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/models/curso/curso';
import { cursosTypes, CursoTypeInfo } from 'src/app/models/curso/curso-types.enum';
import { CursoResponse } from 'src/app/models/curso/cursoResponse';
import { CursoService } from 'src/app/services/curso/curso.service';
import { IInputConfig } from 'src/app/ui/input-dr/input-dr.component';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';
import { ISelectConfig } from 'src/app/ui/select-dr/select-dr.component';
import { ITextAreaConfig } from 'src/app/ui/text-area-dr/text-area-dr.component';

@Component({
  selector: 'app-curso-data-form',
  templateUrl: './curso-data-form.component.html',
  styleUrls: ['./curso-data-form.component.scss'],
})
export class CursoDataFormComponent implements OnInit {
  @Input() cursoId: number;
  @Output('emitSave') emitSave: EventEmitter<Curso> = new EventEmitter(); 

  form: FormGroup;
  nombreConfig: IInputConfig;
  valorConfig: IInputConfig;
  descripcionConfig: ITextAreaConfig;
  categoriaConfig: ISelectConfig;
  saveConfig: IRoundedButtonConfig;
  cancelConfig: IRoundedButtonConfig;
  cursosTypesList: Array<CursoTypeInfo> = cursosTypes;
  curso: Curso;

  constructor(private cursoSrv: CursoService) { }

  async ngOnInit() {
    let cursoFinded: CursoResponse = null;
    
    //Verifico que se haya enviado un Id y busco el curso si así fuera
    if(this.cursoId){
      cursoFinded = await this.cursoSrv.getCursoById(this.cursoId);
    }
    
    // Creo un objeto curso para manipular la información
    this.curso = new Curso();

    // Si se encontró un curso ya que se envió un ID, relleno el objeto curso con la info 
    if(cursoFinded && cursoFinded.exito && cursoFinded.cursos && cursoFinded.cursos.length>0 ){
      let cursoToAssign =cursoFinded.cursos[0];
      Object.assign(this.curso, cursoToAssign);
      let cursoCategory = this.cursosTypesList.filter(type =>{
        return type.value == cursoToAssign.categoria;
      });
      if(cursoCategory && cursoCategory.length>0) this.curso.cambiarCategoria = cursoCategory[0];
    }
    this.initForm();
    this.initConfigs();
  }

  initForm(){
    this.form = new FormGroup({
      id: new FormControl(this.curso && this.curso.obtenerId ? this.curso.obtenerId : null,{ validators: [Validators.required], updateOn: 'change'}),
      nombre: new FormControl(this.curso && this.curso.obtenerNombre ? this.curso.obtenerNombre : '',{ validators: [Validators.required], updateOn: 'change'}),
      imagen: new FormControl(this.curso && this.curso.obtenerImagen ? this.curso.obtenerImagen : '',{ validators: [Validators.required], updateOn: 'change'}),
      programa: new FormControl(this.curso && this.curso.obtenerPrograma ? this.curso.obtenerPrograma : '',{ validators: [Validators.required], updateOn: 'change'}),
      valor: new FormControl(this.curso && this.curso.obtenerValor ? this.curso.obtenerValor : '', { validators: [Validators.required], updateOn: 'change'}),
      descripcion: new FormControl(this.curso && this.curso.obtenerDescripicion ? this.curso.obtenerDescripicion : '', { validators: [Validators.required], updateOn: 'change'}),
      categoria: new FormControl(this.curso && this.curso.obtenerCategoria ? this.curso.obtenerCategoria :'', { validators: [Validators.required], updateOn: 'change'})
    });

    this.form.valueChanges.subscribe(ob =>{
      Object.assign(this.curso, ob);
    });
  }

  initConfigs(){
    this.nombreConfig = {
      formControlName: 'nombre',
      label: 'Nombre',
      type: 'text',
      form: this.form
    };

    this.valorConfig = {
      formControlName: 'valor',
      label: 'Valor',
      type: 'number',
      form: this.form,
      prefixIcon: 'logo-usd'
    };

    this.descripcionConfig = {
      formControlName: 'descripcion',
      form: this.form,
      label: 'Descripción',
      type: 'text'
    };

    this.categoriaConfig = {
      form: this.form,
      fieldToShow: 'description',
      formControlName: 'categoria',
      label: 'Categoría del curso',
      list: this.cursosTypesList
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

}
