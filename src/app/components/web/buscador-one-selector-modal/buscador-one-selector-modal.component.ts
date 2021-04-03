import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IInputConfig } from 'src/app/ui/input-dr/input-dr.component';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';
import { ISelectConfig } from 'src/app/ui/select-dr/select-dr.component';

@Component({
  selector: 'app-buscador-one-selector-modal',
  templateUrl: './buscador-one-selector-modal.component.html',
  styleUrls: ['./buscador-one-selector-modal.component.scss'],
})
export class BuscadorOneSelectorModalComponent implements OnInit {
  @Input() title: string = 'Titulo';
  @Input() list: Array<any>;
  @Input() fieldToShowList: string;
  @Input() labelList: string;
  
  cursoConfig: ISelectConfig;
  fechaComienzoConfig: IInputConfig;
  fechaFinConfig: IInputConfig;
  searchConfig: IRoundedButtonConfig;
  cancelConfig: IRoundedButtonConfig;
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
    this.initConfigs();
  }

  initForm(){
    this.form = new FormGroup({
      selected: new FormControl('',{ validators: [Validators.required], updateOn: 'change'}),
      fechaInicio: new FormControl('', { validators: [Validators.required], updateOn: 'change'}),
      fechaFin: new FormControl('', { validators: [Validators.required], updateOn: 'change'})
    });
  }

  initConfigs(){

    this.cursoConfig = {
      fieldToShow: this.fieldToShowList,
      form: this.form,
      formControlName: 'selected',
      label: this.labelList,
      list: this.list
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

    this.searchConfig = {
      text: 'Buscar',
      leftIcon: 'search'
    };
    
    this.cancelConfig = {
      text: 'Cancelar',
      leftIcon: 'close'
    };
  }
}
