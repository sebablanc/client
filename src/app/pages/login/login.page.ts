import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LoginSingleton } from 'src/app/models/user/login/loginSingleton';
import { ShareService } from 'src/app/services/share-service/share.service';
import { LoginService } from 'src/app/services/user/login/login.service';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  buttonConfig: IRoundedButtonConfig;
  form: FormGroup;

  private entity: LoginSingleton;
  
  constructor(private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private shareSrv: ShareService,
    private loginSrv: LoginService) { }

  ngOnInit() {
    this.viewComponentsConfiguration();
    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
      email: ['', {validators: [Validators.required], updateOn: 'change'}],
      pass: ['', {validators: [Validators.required], updateOn: 'change'}]
    });

    this.form.valueChanges.subscribe(ob => {
      this.entity = ob;
    })
  }

  get email() { return this.form.controls.email; }
  get pass() { return this.form.controls.pass; }

  viewComponentsConfiguration() {
    this.buttonConfig = { text: 'Ingresar' };
  }

  getErrorMessage(field: any){
    return this.shareSrv.getErrorMessage(field);
  }

  async login(event: boolean) {
    if(!this.form.valid){
      this.shareSrv.presentToast({message: 'Verifique los datos ingresados en el formulario', cssClass: 'ERROR_TOAST'});
      return;
    }
    
    let response = await this.loginSrv.login(this.entity);
    if(response && response['exito']){
      this.goTo('home');
    } else {
      this.shareSrv.presentToast({message: response['messages'], cssClass: 'ERROR_TOAST'});
    }
  }

  goTo(link: string){
    this.navCtrl.navigateRoot(`/${link}`);
  }

}
