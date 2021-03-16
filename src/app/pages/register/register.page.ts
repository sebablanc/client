import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ResultRegisterModalComponent } from 'src/app/components/common/result-register-modal/result-register-modal.component';
import { RegisterSingleton } from 'src/app/models/user/register/model/registerSingleton';
import { ShareService } from 'src/app/services/share-service/share.service';
import { RegisterService } from 'src/app/services/user/register/register.service';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  buttonConfig: IRoundedButtonConfig;
  form: FormGroup;
  entity: RegisterSingleton;

  constructor(private formBuilder: FormBuilder,
    private registerSrv: RegisterService,
    private shareSrv: ShareService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.viewComponentsConfiguration();
    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
      email: ['', {validators: [Validators.required, Validators.email], updateOn: 'change'}],
      pass: ['', {validators: [Validators.required, Validators.minLength(6)], updateOn: 'change'}]
    });

    this.form.valueChanges.subscribe(ob => {
      this.entity = ob;
    })
  }

  get email() { return this.form.controls.email; }
  get pass() { return this.form.controls.pass; }

  viewComponentsConfiguration() {
    this.buttonConfig = { text: 'Registrar' };
  }

  getErrorMessage(field: any){
    return this.shareSrv.getErrorMessage(field);
  }

  async register(event: boolean) {
    this.shareSrv.presentLoading();
    if(!this.form.valid){
      this.shareSrv.presentToast({message: 'Verifique los datos ingresados en el formulario', cssClass: 'ERROR_TOAST'});
      return;
    }
    
    if(event){
      let response = await this.registerSrv.register(this.entity);
      this.shareSrv.dismissLoading();
      if(response && response.exito){
        this.presentModal();
      } else{
        this.shareSrv.presentToast({message: response && response.messages && response.messages.length>0 ? response.messages[0] : 'Error al intentar registrarse', cssClass: 'ERROR_TOAST'});
      }
    }
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ResultRegisterModalComponent,
      cssClass: 'register-modal-success',
      backdropDismiss: false
    });
    return await modal.present();
  }

}
