import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  buttonConfig: IRoundedButtonConfig;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
    this.buttonConfig = { text: 'Registrar' };
  }

  register(event: boolean) {
    console.log('se clickeó el botón de registrar');
    console.log(event);
    console.log(this.form.value);
    
  }

}
