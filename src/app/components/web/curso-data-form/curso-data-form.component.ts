import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/models/curso/curso';
import { cursosTypes, CursoTypeInfo } from 'src/app/models/curso/curso-types.enum';
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

  constructor() { }

  ngOnInit() {
    if(!this.curso) this.curso = new Curso();
    this.initForm();
    this.initConfigs();
  }

  initForm(){
    this.form = new FormGroup({
      nombre: new FormControl('',{ validators: [Validators.required], updateOn: 'change'}),
      imagen: new FormControl( '',{ validators: [Validators.required], updateOn: 'change'}),
      programa: new FormControl( '',{ validators: [Validators.required], updateOn: 'change'}),
      valor: new FormControl('', { validators: [Validators.required], updateOn: 'change'}),
      descripcion: new FormControl('', { validators: [Validators.required], updateOn: 'change'}),
      categoria: new FormControl('', { validators: [Validators.required], updateOn: 'change'})
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
