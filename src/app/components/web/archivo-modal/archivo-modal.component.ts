import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ShareService } from 'src/app/services/share-service/share.service';
import { IInputConfig } from 'src/app/ui/input-dr/input-dr.component';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';

@Component({
  selector: 'app-archivo-modal',
  templateUrl: './archivo-modal.component.html',
  styleUrls: ['./archivo-modal.component.scss'],
})
export class ArchivoModalComponent implements OnInit {

  @Input() title: string = 'Titulo';
  @Input() inputLabel: string;

  nombreConfig: IInputConfig;
  archivoConfig: IInputConfig;
  saveConfig: IRoundedButtonConfig;
  cancelConfig: IRoundedButtonConfig;
  form: FormGroup;

  constructor(private modalCtrl: ModalController, private shareSrv: ShareService) { }

  ngOnInit() {
    this.initForm();
    this.initConfigs();
  }

  initForm(){
    this.form = new FormGroup({
      nombre: new FormControl(null,{ validators: [Validators.required], updateOn: 'change'}),
      archivo: new FormControl(null, { validators: [Validators.required], updateOn: 'change'}),
    });
  }

  initConfigs(){

    this.nombreConfig = {
      form: this.form,
      formControlName: 'nombre',
      label: this.inputLabel,
      type: 'text'
    };

    this.archivoConfig = {
      form: this.form,
      formControlName: 'archivo',
      label: this.inputLabel,
      type: 'file'
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
  
  get archivo() { return this.form.controls.archivo; }

  modalDismiss(dataBack){
    let data = null;
    if(dataBack && this.form.valid){
      data = this.form.value;
    } else if(dataBack && !this.form.valid) {
      this.shareSrv.presentToast({message: 'Debe ingresar datos para cargar un archivo', cssClass: 'WARNING_TOAST'});
      return;
    }
    
    this.modalCtrl.dismiss(data);
  }

  cargarPDF(event){
    // Creamos el objeto de la clase FileReader
    let reader = new FileReader();
    var self = this;
    // Leemos el archivo subido y se lo pasamos a nuestro fileReader
    reader.readAsDataURL(event.target.files[0]);

    // Le decimos que cuando este listo ejecute el código interno
    reader.onload = function(){
      self.archivo.patchValue(reader.result);
    };
  }
}
