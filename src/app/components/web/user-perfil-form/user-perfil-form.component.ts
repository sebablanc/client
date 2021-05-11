import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
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
import { usersTypes, UserTypeInfo, UserTypes } from 'src/app/models/user/user/user-types.enum';
import { Localidad } from 'src/app/models/localidad/localidad';

@Component({
  selector: 'app-user-perfil-form',
  templateUrl: './user-perfil-form.component.html',
  styleUrls: ['./user-perfil-form.component.scss'],
})
export class UserPerfilFormComponent implements OnInit {

  @Input() personaId: number;
  @Input() userTipo: string;
  @Output('emitSave') emitSave: EventEmitter<Persona> = new EventEmitter(); 
  @ViewChild('imageUser', null) imageUser;
  
  persona: Persona;
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
  userImage: string;

  constructor(
    private localidadSrv: LocalidadService,
    private shareSrv: ShareService,
    private personaSrv: PersonaService) { }

  async ngOnInit() {
    let personaFinded = null;
    this.userImage = null;
    if(this.personaId){
      personaFinded = await this.personaSrv.getPersonaById(this.personaId);
    }
    this.persona = new Persona();
    if(personaFinded && personaFinded.exito && personaFinded.personas && personaFinded.personas.length>0 ){
      let personaToAssign =personaFinded.personas[0];
      let localidad: Localidad = new Localidad();
      Object.assign(localidad, personaToAssign['localidad']);
      personaToAssign.setLocalidad = localidad;
      Object.assign(this.persona, personaToAssign);

    }
    await this.initForm();
    this.initConfigs();
    if(this.form){
      this.mostarImagenUser();
    }
  }

 async  initForm(){
    //Obtengo el tipo de usuario
    let userType = this.usersTypesList.filter(type =>{
      return type.value == this.userTipo;
    });

    let nroCuentaParsed = '';
    if(!this.persona || !this.persona.getNroCuenta){
      this.persona = new Persona();
      let lastNroCuentaResponse = await this.personaSrv.getLastNroCuenta();
      nroCuentaParsed = format(new Date(), 'yy')+"-";
      let intNroCuenta = 0;
      if(!lastNroCuentaResponse.exito || !lastNroCuentaResponse.nroCuenta || !lastNroCuentaResponse.nroCuenta.nroCuenta){
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
      nroCuenta: new FormControl({value: this.persona && this.persona.getNroCuenta ? this.persona.getNroCuenta : '', disabled: true}, Validators.required),
      dni: new FormControl(this.persona && this.persona.getDNI ? this.persona.getDNI : '', { validators: [Validators.required, Validators.maxLength(10), Validators.minLength(7)], updateOn: 'change'}),
      nombre: new FormControl(this.persona && this.persona.getNombre ? this.persona.getNombre : '',{ validators: [Validators.required], updateOn: 'change'}),
      apellido: new FormControl(this.persona && this.persona.getApellido ? this.persona.getApellido : '',{ validators: [Validators.required], updateOn: 'change'}),
      fechaNacimiento: new FormControl(this.persona && this.persona.obtenerFechaNacimiento ? this.persona.obtenerFechaNacimiento : '',{ validators: [Validators.required], updateOn: 'change'}),
      edad: new FormControl(this.persona && this.persona.obtenerFechaNacimiento ? this.calculateAge(this.persona.obtenerFechaNacimiento) : '', { validators: [Validators.required], updateOn: 'change'}),
      direccion: new FormControl(this.persona && this.persona.getDireccion ? this.persona.getDireccion : '', { validators: [Validators.required], updateOn: 'change'}),
      codPostal: new FormControl(this.persona && this.persona.getLocalidad && this.persona.getLocalidad.obtenerCodPostal ? this.persona.getLocalidad.obtenerCodPostal : '', { validators: [Validators.required], updateOn: 'change'}),
      localidad: new FormControl(this.persona && this.persona.getLocalidad ? this.persona.getLocalidad :'', { validators: [Validators.required], updateOn: 'change'}),
      provincia: new FormControl(this.persona && this.persona.getLocalidad && this.persona.getLocalidad.obtenerProvincia ? this.persona.getLocalidad.obtenerProvincia :'', { validators: [Validators.required], updateOn: 'change'}),
      telefono: new FormControl(this.persona && this.persona.getTelefono ? this.persona.getTelefono : '', { validators: [Validators.required], updateOn: 'change'}),
      celular: new FormControl(this.persona && this.persona.getCelular ? this.persona.getCelular : '', { validators: [], updateOn: 'change'}),
      email: new FormControl(this.persona && this.persona.getEmail ? this.persona.getEmail : '', { validators: [], updateOn: 'change'}),
      otroMedio: new FormControl(this.persona && this.persona.getOtroMedio ? this.persona.getOtroMedio : '', { validators: [], updateOn: 'change'}),
      foto: new FormControl(this.persona && this.persona.getFoto ? this.persona.getFoto : null, { validators: [], updateOn: 'change'}),
      rol: new FormControl(userType[0], { validators: [Validators.required], updateOn: 'change'})
    });

    if(this.persona && this.persona.getLocalidad && this.persona.getLocalidad.obtenerCodPostal && this.persona.getLocalidad.obtenerCodPostal > 0){
      this.getLocalidadList(this.persona.getLocalidad.obtenerCodPostal);
    }
   
    this.form.valueChanges.subscribe(ob =>{
      Object.assign(this.persona, ob);
      if(this.localidad && this.localidad.value) {
        let localidad: Localidad = new Localidad();
        Object.assign(localidad, this.localidad.value);
        this.persona.setLocalidad = localidad;
      }
    });
  }

  async ngOnChanges(){
    await this.fillForm();
  }

  async fillForm(){
    if(!this.persona || !this.persona.getNombre) return;

    //Obtengo el número de cuenta
    let nroCuentaParsed = '';
    if(!this.persona || !this.persona.getNroCuenta){
      let lastNroCuentaResponse = await this.personaSrv.getLastNroCuenta();
      nroCuentaParsed = format(new Date(), 'yy')+"-";
      let intNroCuenta = 0;
      if(!lastNroCuentaResponse.exito || !lastNroCuentaResponse.nroCuenta || !lastNroCuentaResponse.nroCuenta.nroCuenta){
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

   this.form.patchValue(this.persona);
   this.codPostal.setValue(this.persona.getLocalidad.obtenerCodPostal);
   this.getLocalidadList(this.persona.getLocalidad.obtenerCodPostal);
   this.localidad.patchValue(this.persona.getLocalidad);
   this.provincia.patchValue(this.persona.getLocalidad.obtenerProvincia);
   this.changeAge(this.persona.obtenerFechaNacimiento);
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
      suffixIcon: 'search'
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
      suffixIcon: 'search'
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

  get nroCuenta() { return this.form.controls.nroCuenta; }
  get dni() { return this.form.controls.dni; }
  get nombre() { return this.form.controls.nombre; }
  get apellido() { return this.form.controls.apellido; }
  get codPostal() { return this.form.controls.codPostal; }
  get edad() { return this.form.controls.edad; }
  get localidad() { return this.form.controls.localidad; }
  get provincia() { return this.form.controls.provincia; }
  get foto() { return this.form.controls.foto; }

  calculateAge(date){
    return differenceInYears(new Date(), parseISO(date))
  }

  changeAge(event){
    if(event){
      let age = this.calculateAge(event);
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
  
  async searchByDNI(event){
    if(event){
      let resp = await this.personaSrv.getPersonaByDNI(event);
      Object.assign(this.persona, resp.personas[0]);
      this.fillForm();
    }
  }

  mostarImagenUser(){
    if(!this.persona || !this.persona.getFoto) return;
    this.userImage = 'http://localhost:8000/images/user/'+this.persona.getFoto;
  }

  mostrarImagenCargada(event){
    // Creamos el objeto de la clase FileReader
    let reader = new FileReader();
    var self = this;
    // Leemos el archivo subido y se lo pasamos a nuestro fileReader
    reader.readAsDataURL(event.target.files[0]);

    // Le decimos que cuando este listo ejecute el código interno
    reader.onload = function(){
      self.foto.patchValue(reader.result);
      let preview = document.getElementById('preview');
      let image = document.createElement('img');
      
      image.src = reader.result.toString();

      preview.innerHTML = '';
      preview.append(image);
    };
  }
  
}
