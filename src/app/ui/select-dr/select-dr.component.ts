import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-dr',
  templateUrl: './select-dr.component.html',
  styleUrls: ['./select-dr.component.scss'],
})
export class SelectDrComponent implements OnInit {
  
  @Input() config: ISelectConfig;
  @Output('dataEmit') dataEmit: EventEmitter<any> = new EventEmitter();

  field: AbstractControl;

  constructor() { }

  ngOnInit() {
    this.field = this.config.form.controls[this.config.formControlName];
  }

}

export interface ISelectConfig{
  list: Array<any>;
  label: string;
  formControlName: string;
  form: FormGroup;
  fieldToShow: string;
}