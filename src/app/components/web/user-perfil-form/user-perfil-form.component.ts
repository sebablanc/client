import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { usersTypes, UserTypeInfo } from 'src/app/models/user/user/user-types.enum';
import { IInputConfig } from 'src/app/ui/input-dr/input-dr.component';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';
import { ISelectConfig } from 'src/app/ui/select-dr/select-dr.component';
import * as moment from 'moment';
import { LocalidadService } from 'src/app/services/localidad/localidad.service';
import { ShareService } from 'src/app/services/share-service/share.service';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';
import { User } from 'src/app/models/user/user/user';
import { PersonaSingleton } from 'src/app/models/persona/personaSingleton';
import { Persona } from 'src/app/models/persona/persona';

@Component({
  selector: 'app-user-perfil-form',
  templateUrl: './user-perfil-form.component.html',
  styleUrls: ['./user-perfil-form.component.scss'],
})
export class UserPerfilFormComponent implements OnInit {

  form: FormGroup;
  nroCuentaConfig: IInputConfig;
  dniConfig: IInputConfig;
  nombreConfig: IInputConfig;
  apellidoConfig: IInputConfig;
  fechaNacimientoConfig: IInputConfig;
  edadConfig: IInputConfig;
  direccionConfig: IInputConfig;
  codPostalConfig: IInputConfig;
  localidadConfig: ISelectConfig;
  provinciaConfig: IInputConfig;
  telefonoConfig: IInputConfig;
  celularConfig: IInputConfig;
  emailConfig: IInputConfig;
  otroMedioConfig: IInputConfig;
  rolConfig: ISelectConfig;
  
  saveConfig: IRoundedButtonConfig;
  cancelConfig: IRoundedButtonConfig;

  usersTypesList: Array<UserTypeInfo> = usersTypes;
  user: User;
  persona: Persona;

  constructor(private localidadSrv: LocalidadService, private shareSrv: ShareService, private userSingleton: UserSingleton, private personaSingleton: PersonaSingleton) { }

  async ngOnInit() {
    this.user = await this.userSingleton.instance();
    this.persona = await this.personaSingleton.instance();
    this.initForm();
    this.initConfigs();
  }

  initForm(){
    let userType = this.usersTypesList.filter(type =>{
      return type.value == this.user.tipo;
    });
    this.form = new FormGroup({
      nroCuenta: new FormControl({value: '1', disabled: true}, Validators.required),
      dni: new FormControl('', { validators: [Validators.required, Validators.maxLength(10), Validators.minLength(7)], updateOn: 'change'}),
      nombre: new FormControl('',{ validators: [Validators.required], updateOn: 'change'}),
      apellido: new FormControl('',{ validators: [Validators.required], updateOn: 'change'}),
      fechaNacimiento: new FormControl('',{ validators: [Validators.required], updateOn: 'change'}),
      edad: new FormControl('', { validators: [Validators.required], updateOn: 'change'}),
      direccion: new FormControl('', { validators: [Validators.required], updateOn: 'change'}),
      codPostal: new FormControl('', { validators: [Validators.required], updateOn: 'change'}),
      localidad: new FormControl('', { validators: [Validators.required], updateOn: 'change'}),
      provincia: new FormControl('', { validators: [Validators.required], updateOn: 'change'}),
      telefono: new FormControl('', { validators: [Validators.required], updateOn: 'change'}),
      celular: new FormControl('', { validators: [Validators.required], updateOn: 'change'}),
      email: new FormControl('', { validators: [Validators.required], updateOn: 'change'}),
      otroMedio: new FormControl('', { validators: [Validators.required], updateOn: 'change'}),
      rol: new FormControl(userType[0], { validators: [Validators.required], updateOn: 'change'})
    });

    this.form.valueChanges.subscribe(ob =>{
      this.persona = ob;
    })
  }

  initConfigs(){
    this.nroCuentaConfig = {
      formControlName: 'nroCuenta',
      label: 'Número de cuenta',
      type: 'text',
      form: this.form,
      readOnly: true
    };

    this.dniConfig = {
      formControlName: 'dni',
      label: 'DNI',
      type: 'number',
      form: this.form,
      suffixIcon: 'search-outline'
    };

    this.nombreConfig = {
      formControlName: 'nombre',
      label: 'Nombre',
      type: 'text',
      form: this.form
    };

    this.apellidoConfig = {
      formControlName: 'apellido',
      label: 'Apellido',
      type: 'text',
      form: this.form
    };

    this.fechaNacimientoConfig = {
      formControlName: 'fechaNacimiento',
      label: 'Fecha de Nacimiento',
      type: 'date',
      form: this.form
    };

    this.edadConfig = {
      formControlName: 'edad',
      label: 'Edad',
      type: 'number',
      form: this.form,
      readOnly: true
    };

    this.direccionConfig = {
      formControlName: 'direccion',
      label: 'Dirección',
      type: 'text',
      form: this.form
    };

    this.codPostalConfig = {
      formControlName: 'codPostal',
      label: 'Código Postal',
      type: 'number',
      form: this.form
    };

    this.localidadConfig = {
      form: this.form,
      formControlName: 'localidad',
      label: 'Localidad',
      list: this.usersTypesList,
      fieldToShow: 'ciudad'
    }

    this.provinciaConfig = {
      formControlName: 'provincia',
      label: 'Provincia',
      type: 'text',
      form: this.form,
      readOnly: true
    };

    this.telefonoConfig = {
      formControlName: 'telefono',
      label: 'Teléfono',
      type: 'text',
      form: this.form
    };

    this.celularConfig = {
      formControlName: 'celular',
      label: 'Celular',
      type: 'text',
      form: this.form
    };

    this.emailConfig = {
      formControlName: 'email',
      label: 'Correo Electrónico',
      type: 'email',
      form: this.form
    };

    this.otroMedioConfig = {
      formControlName: 'otroMedio',
      label: 'Otro medio de contacto',
      type: 'text',
      form: this.form
    };

    this.rolConfig = {
      form: this.form,
      formControlName: 'rol',
      label: 'Rol',
      list: this.usersTypesList,
      fieldToShow: 'description'
    }

    this.saveConfig = {
      text: 'Guardar',
      leftIcon: 'save'
    };
    
    this.cancelConfig = {
      text: 'Cancelar',
      leftIcon: 'close'
    };
  }

  get edad() { return this.form.controls.edad; }
  get localidad() { return this.form.controls.localidad; }
  get provincia() { return this.form.controls.provincia; }

  calculateAge(event){
    if(event){
      let age = moment().diff(event, 'years');
      this.edad.patchValue(age);
    }
  }

  async getLocalidadList(event) {
    if(event){
      let response = await this.localidadSrv.getSomeLocalidadesList({codPostal: event});
      if(response && response.exito && response.localidades.length > 0){
        this.localidadConfig.list = response.localidades;
      } else {
        this.shareSrv.presentToast({message: response.messages[0], cssClass: 'ERROR_TOAST'})
      }
    }
  }

  setProvinciaField(event){
    if(event){
      this.provincia.patchValue(this.localidad.value['provincia']);
    }
  }

  saveData(){
    console.log(this.form.value);
    console.log(this.persona)
  }
}
