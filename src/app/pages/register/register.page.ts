import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterSingleton } from 'src/app/models/user/register/model/registerSingleton';
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

  constructor(private formBuilder: FormBuilder, private registerSrv: RegisterService) { }

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
    return this.registerSrv.getErrorMessage(field);
  }

  async register(event: boolean) {
    if(event){
      let response = await this.registerSrv.register(this.entity);
      console.log(response);
      
    }
  }

}
