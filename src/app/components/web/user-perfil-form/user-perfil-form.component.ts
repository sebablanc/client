import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IInputConfig } from 'src/app/ui/input-dr/input-dr.component';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';

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
  // ACA IRIA EL DE LOCALIDAD
  provinciaConfig: IInputConfig;
  telefonoConfig: IInputConfig;
  celularConfig: IInputConfig;
  emailConfig: IInputConfig;
  otroMedioConfig: IInputConfig;
  
  saveConfig: IRoundedButtonConfig;
  cancelConfig: IRoundedButtonConfig;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.initConfigs();
  }

  initForm(){
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
    });
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

    // ACA IRIA EL DE LOCALIDAD

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

    this.saveConfig = {
      text: 'Guardar',
      leftIcon: 'save'
    };
    
    this.cancelConfig = {
      text: 'Cancelar',
      leftIcon: 'close'
    };
  }

  saveData(){
    console.log(this.form.value);
    
  }
}
