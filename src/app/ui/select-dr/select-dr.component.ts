import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-dr',
  templateUrl: './select-dr.component.html',
  styleUrls: ['./select-dr.component.scss'],
})
export class SelectDrComponent implements OnInit {
  
  @Input() config: ISelectConfig;
  
  constructor() { }

  ngOnInit() {}

}

export interface ISelectConfig{
  list: Array<any>;
  label: string;
  formControlName: string;
  form: FormGroup;
  fieldToShow: string;
}