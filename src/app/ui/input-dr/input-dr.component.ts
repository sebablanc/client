import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-input-dr',
  templateUrl: './input-dr.component.html',
  styleUrls: ['./input-dr.component.scss'],
})
export class InputDrComponent implements OnInit {
  
  @Input() config: IInputConfig;
  @Output('suffixIconClicked') suffixIconClicked: EventEmitter<boolean> = new EventEmitter();
  @Output('prefixIconClicked') prefixIconClicked: EventEmitter<boolean> = new EventEmitter();
  @Output('dataEmit') dataEmit: EventEmitter<any> = new EventEmitter();
  @Output('dataEmitKey') dataEmitKey: EventEmitter<any> = new EventEmitter();

  field: AbstractControl;
  
  constructor(private shareSrv: ShareService) { }

  ngOnInit() {
    this.field = this.config.form.controls[this.config.formControlName];
  }

  getErrorMessage(type: any){
    this.shareSrv.getErrorMessage(this.field);
  }

}

export interface IInputConfig {
  form: FormGroup;
  formControlName: string;
  label: string;
  type: string;
  prefixIcon?: string;
  suffixIcon?: string;
  readOnly?: boolean;
}
