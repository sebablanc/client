import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  buttonConfig: IRoundedButtonConfig;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) { }

  ngOnInit() {
    this.viewComponentsConfiguration();
    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
      email: ['', {validators: [Validators.required], updateOn: 'change'}],
      password: ['', {validators: [Validators.required], updateOn: 'change'}]
    });
  }

  viewComponentsConfiguration() {
    this.buttonConfig = { text: 'Ingresar' };
  }

  login(event: boolean) {
    console.log('se clickeó el botón de ingresar');
    console.log(event);
    console.log(this.form.value);
    
  }

  forgotPassword(){
    console.log('Olvidaste tu contraseña click');
  }

  goTo(link: string){
    this.navCtrl.navigateRoot(`/${link}`);
  }

}
