import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-text-area-dr',
  templateUrl: './text-area-dr.component.html',
  styleUrls: ['./text-area-dr.component.scss'],
})
export class TextAreaDrComponent implements OnInit {
  @Input() config: ITextAreaConfig;
  @Output('dataEmit') dataEmit: EventEmitter<any> = new EventEmitter();

  field: AbstractControl;
  
  constructor(private shareSrv: ShareService) { }

  ngOnInit() {
    this.field = this.config.form.controls[this.config.formControlName];
  }

  getErrorMessage(type: any){
    this.shareSrv.getErrorMessage(this.field);
  }
}

export interface ITextAreaConfig {
  form: FormGroup;
  formControlName: string;
  label: string;
  type: string;
  readOnly?: boolean;
}
