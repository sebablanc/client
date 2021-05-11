import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';
import { ConsultaService } from 'src/app/services/consulta-service/consulta.service';
import { SweetAlertService } from 'src/app/services/sweet-alert/sweet-alert.service';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  form: FormGroup;
  buttonConfig: IRoundedButtonConfig;

  constructor(
    private formBuilder: FormBuilder,
    private _ngZone: NgZone,
    private userSingleton: UserSingleton,
    private consultaSrv: ConsultaService,
    private sweetAlertSrv: SweetAlertService,
    private shareSrv: ShareService) {}

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
  }

  viewComponentsConfiguration() {
    this.buttonConfig = { text: 'Consultar' };
  }

  triggerResize() {
    this._ngZone.onStable
      .pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  async sendConsulta(event: boolean) {
    if (this.form.valid) {
      let response = await this.consultaSrv.sendConsulta(this.form.value);
      
      let title = response && response.exito ? '¡Tu consulta ha sido enviada!' : 'No hemos podido enviar tu consulta';
      let text = response && response.exito ? '¡En breve responderemos tu inquietud! Estate atento y verificá la casilla de SPAM.' : '¡Lo sentimos! No te desanimes, estamos para ayudarte, volvé a intentarlo más tarde.';
      let success = response ? response.exito : false;

      await this.sweetAlertSrv.okAlert(title, text, success);
    } else {
      //mensaje debe completar todos los campos
      this.shareSrv.presentToast({message: 'Debe completar todos los cmapos para realizar una consulta', cssClass: 'ERROR_TOAST'})
    }
  }
}
