import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { diasList, diaTypeInfo } from 'src/app/models/dias/dias.types';

@Component({
  selector: 'app-checkbox-dias-dr',
  templateUrl: './checkbox-dias-dr.component.html',
  styleUrls: ['./checkbox-dias-dr.component.scss'],
})
export class CheckboxDiasDrComponent implements OnInit {
  @Input() config: IDaysCheckboxConfig;
  @Output() dataEmit: EventEmitter<Array<diaTypeInfo>> = new EventEmitter();
  
  daysList: Array<diaTypeInfo> = diasList;
  listToEmit: Array<diaTypeInfo> = [];

  constructor() { }

  ngOnInit() {}

  selected(event: MatCheckboxChange, day: diaTypeInfo){
    if(event.checked){
      this.listToEmit.push(day);
    } else {
      let index = this.listToEmit.findIndex(dia =>{
        return dia == day
      });

      if(index>-1) this.listToEmit.splice(index, 1);
    }

    this.dataEmit.emit(this.listToEmit);
    
  }

}

export interface IDaysCheckboxConfig {
  form: FormGroup;
  formControlName: string;
}
