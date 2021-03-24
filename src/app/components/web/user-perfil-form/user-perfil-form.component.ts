import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { format, differenceInYears, parseISO } from 'date-fns'
import { IInputConfig } from 'src/app/ui/input-dr/input-dr.component';
import { ISelectConfig } from 'src/app/ui/select-dr/select-dr.component';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';
import { LocalidadService } from 'src/app/services/localidad/localidad.service';
import { Persona } from 'src/app/models/persona/persona';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { ShareService } from 'src/app/services/share-service/share.service';
import { User } from 'src/app/models/user/user/user';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';
import { usersTypes, UserTypeInfo, UserTypes } from 'src/app/models/user/user/user-types.enum';
@Component({
  selector: 'app-user-perfil-form',
  templateUrl: './user-perfil-form.component.html',
  styleUrls: ['./user-perfil-form.component.scss'],
})
export class UserPerfilFormComponent implements OnInit {

  @Input() persona: Persona;
  @Output('emitSave') emitSave: EventEmitter<Persona> = new EventEmitter(); 

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

  userTypes = UserTypes;
  usersTypesList: Array<UserTypeInfo> = usersTypes;
  user: User;

  constructor(
    private localidadSrv: LocalidadService,
    private shareSrv: ShareService,
    private userSingleton: UserSingleton,
    private personaSrv: PersonaService) { }

  async ngOnInit() {
    this.user = await this.userSingleton.instance();
    if(!this.persona) this.persona = new Persona();
    await this.initForm();
    this.initConfigs();
  }

  async initForm(){
    //Obtengo el tipo de usuario
    let userType = this.usersTypesList.filter(type =>{
      return type.value == this.user.tipo;
    });

    //Obtengo el número de cuenta
    let nroCuentaParsed = '';
    if(!this.persona || !this.persona.getNroCuenta){
      let lastNroCuentaResponse = await this.personaSrv.getLastNroCuenta();
      nroCuentaParsed = format(new Date(), 'yy')+"-";
      let intNroCuenta = 0;
      if(!lastNroCuentaResponse.exito || !lastNroCuentaResponse.nroCuenta.nroCuenta){
        lastNroCuentaResponse.nroCuenta = {nroCuenta: '0'};
      } else if(lastNroCuentaResponse.exito && lastNroCuentaResponse.nroCuenta.nroCuenta){
        intNroCuenta = parseInt(lastNroCuentaResponse.nroCuenta.nroCuenta.split('-')[1]);
      }

      //Agregando los ceros necesarios precendentes
      for(let i=0; i<4-intNroCuenta.toString().length; i++){
        nroCuentaParsed+='0';
      }
     
      intNroCuenta++;
      nroCuentaParsed += intNroCuenta;
      this.persona.setNroCuenta = nroCuentaParsed;
    }

    this.form = new FormGroup({
      nroCuenta: new FormControl({value: (this.persona && this.persona.getNroCuenta ? this.persona.getNroCuenta : nroCuentaParsed), disabled: true}, Validators.required),
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
      Object.assign(this.persona, ob);
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
      form: this.form,
      suffixIcon: 'search-outline'
    };

    this.localidadConfig = {
      form: this.form,
      formControlName: 'localidad',
      label: 'Localidad',
      list: [],
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

  get dni() { return this.form.controls.dni; }
  get codPostal() { return this.form.controls.codPostal; }
  get edad() { return this.form.controls.edad; }
  get localidad() { return this.form.controls.localidad; }
  get provincia() { return this.form.controls.provincia; }

  calculateAge(event){
    if(event){
      let age = differenceInYears(new Date(), parseISO(event));
      this.edad.patchValue(age);
    }
  }

  getLocalidadListIcon(event: boolean){
    if(event) this.getLocalidadList(this.codPostal.value);
  }

  async getLocalidadList(event) {
    if(event){
      let response = await this.localidadSrv.getSomeLocalidadesList({codPostal: event});
      if(response && response.exito && response.localidades.length > 0){
        this.localidadConfig.list = response.localidades;
      } else {
        this.shareSrv.presentToast({message: response.messages[0], cssClass: 'ERROR_TOAST'});
      }
    }
  }

  setProvinciaField(event){
    if(event){
      this.provincia.patchValue(this.localidad.value['provincia']);
    }
  }

  searchByDNIIcon(event: boolean){
    if(event) this.searchByDNI(this.dni.value);
  }
  searchByDNI(event){
    //TODO: buscar por DNI en focusout y click ícono lupa
    if(event){
      console.log('searchByDNI');
      console.log(event);
    }
  }

  
}
