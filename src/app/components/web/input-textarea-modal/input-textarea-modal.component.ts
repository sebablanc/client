import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ShareService } from 'src/app/services/share-service/share.service';
import { IInputConfig } from 'src/app/ui/input-dr/input-dr.component';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';
import { ITextAreaConfig } from 'src/app/ui/text-area-dr/text-area-dr.component';

@Component({
  selector: 'app-input-textarea-modal',
  templateUrl: './input-textarea-modal.component.html',
  styleUrls: ['./input-textarea-modal.component.scss'],
})
export class InputTextareaModalComponent implements OnInit {

  @Input() title: string = 'Titulo';
  @Input() inputLabel: string;
  @Input() textareaLabel: string;
  @Input() element: any;

  tituloConfig: IInputConfig;
  mensajeConfig:ITextAreaConfig;
  searchConfig: IRoundedButtonConfig;
  cancelConfig: IRoundedButtonConfig;
  form: FormGroup;
  
  constructor(private shareSrv: ShareService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.initForm();
    this.initConfigs();
  }

  initForm(){
    
    this.form = new FormGroup({
      title: new FormControl(this.element && this.element.title ? this.element.title : null,{ validators: [Validators.required], updateOn: 'change'}),
      message: new FormControl(this.element && this.element.message ? this.element.message : null, { validators: [Validators.required], updateOn: 'change'}),
    });
  }

  initConfigs(){

    this.tituloConfig = {
      form: this.form,
      formControlName: 'title',
      label: this.inputLabel,
      type: 'text'
    };

    this.mensajeConfig = {
      form: this.form,
      formControlName: 'message',
      label: this.textareaLabel,
      type: 'text',
      minRows: 20
    };

    this.searchConfig = {
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
      this.shareSrv.presentToast({message: 'Debe ingresar datos para la novedad', cssClass: 'WARNING_TOAST'});
      return;
    }
    this.modalCtrl.dismiss(data);
  }
}
