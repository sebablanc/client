import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  
  buttonConfig: IRoundedButtonConfig;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.viewComponentsConfiguration();
    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
      email: ['', {validators: [Validators.required], updateOn: 'change'}]
    });
  }

  viewComponentsConfiguration() {
    this.buttonConfig = { text: 'Reestablecer' };
  }

  forgotPassword(event: boolean) {
    console.log('se clickeó el botón de restablecer');
    console.log(event);
    console.log(this.form.value);
    
  }
}
