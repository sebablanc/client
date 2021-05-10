import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  form: FormGroup;
  buttonConfig: IRoundedButtonConfig;

  constructor(private formBuilder: FormBuilder, private _ngZone: NgZone, private userSingleton: UserSingleton) {}

  ngOnInit() {
    this.viewComponentsConfiguration();
    this.initForm();
  }

  initForm() {
    let user = this.userSingleton.instance();
    
    let persona = null;
    if(user &&user.persona) persona = user.persona;

    this.form = this.formBuilder.group({
      nombre: [persona && persona.nombre ? persona.nombre : null, { validators: [Validators.required], updateOn: 'change' }],
      apellido: [persona && persona.apellido ? persona.apellido : null, { validators: [Validators.required], updateOn: 'change' }],
      telefono: [persona && persona.telefono ? persona.telefono : null, { validators: [Validators.required], updateOn: 'change' }],
      email: [persona && persona.email ? persona.email : null, { validators: [Validators.required], updateOn: 'change' }],
      consulta: [persona && persona.consulta ? persona.consulta : null, { validators: [Validators.required], updateOn: 'change' }],
    });

    this.form.valueChanges.subscribe((ob) => {
      console.log(ob);
    });
  }

  viewComponentsConfiguration() {
    this.buttonConfig = { text: 'Consultar' };
  }

  triggerResize() {
    this._ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  sendConsulta(event: boolean) {
    if (this.form.valid) {
      console.log(this.form.value);
      
    }
  }
}
