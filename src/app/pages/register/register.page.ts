import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterSingleton } from 'src/app/models/user/register/model/registerSingleton';
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

    this.form.valueChanges.subscribe(ob => {
      this.entity = ob;
    })
  }

  viewComponentsConfiguration() {
    this.buttonConfig = { text: 'Registrar' };
  }

  register(event: boolean) {
    if(event){
      // TODO: All about register service
      console.log(this.entity);

    }
  }

}
