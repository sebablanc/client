import { Injectable } from '@angular/core';
import { Persona } from 'src/app/models/persona/persona';
import { PersonaResponse } from 'src/app/models/persona/personaResponse';
import { HttpHelperService } from '../http/http-helper.service';
import { StorageService } from '../storage/storage.service';
import { ILastNroCuentaResponse, IPersonaSend } from './personaService.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlCreatePersona = 'persona/create';
  private urlUpdatePersona = 'persona/update';
  private urlDeletePersona = 'persona/delete';
  private urlLastNroCuenta = 'persona/findLastNroCuenta';
  private urlFindPersona = 'persona/find';
  private urlFindAllPersonas = 'persona/all';

  constructor(private httpHelperSrv: HttpHelperService, private storageSrv: StorageService) { }


  parsePersonaToPersonaSend(persona: Persona): IPersonaSend{
    if(!persona) return;

    let personaToSend: IPersonaSend = {
      apellido: persona.getApellido,
      celular: persona.getCelular,
      direccion: persona.getDireccion,
      email: persona.getEmail,
      id: persona.getId,
      localidadId: persona.getLocalidad.obtenerId,
      nombre: persona.getNombre,
      nroCuenta: persona.getNroCuenta,
      otroMedio: persona.getOtroMedio,
      telefono: persona.getTelefono,
      dni: parseInt(persona.getDNI.toString()),
      fechaNacimiento: persona.obtenerFechaNacimiento,
      foto: persona.getFoto,
      createdAt: persona.obtenerFechaCreacion ? persona.obtenerFechaCreacion : null,
      updatedAt: null
    }

    return personaToSend;
  }

  async guardarPersona(data: IPersonaSend): Promise<PersonaResponse>{
    return this.httpHelperSrv.post({url: this.urlCreatePersona, body: data}).then(response =>{
      return response;
    }).catch(error => {
      return error.error;
    })
  }

  async updatePersona(data: IPersonaSend): Promise<PersonaResponse>{
    return this.httpHelperSrv.put({url: this.urlUpdatePersona, body: data}).then(response => { 
      return response;
    }).catch(error => {
      return error.error;
    })
  }

  async deletePersona(id: number): Promise<PersonaResponse>{
    let data = {id: id}
    return this.httpHelperSrv.post({url: this.urlDeletePersona, body: data}).then(response => { 
      return response;
    }).catch(error => {
      return error.error;
    })
  }

  async getPersonasList(): Promise<PersonaResponse>{
    return this.httpHelperSrv.get({url: this.urlFindAllPersonas, body: null}).then(result => {
      return result;
    })
  }

  async getPersonaByDNI(dni: number): Promise<PersonaResponse>{
    let data = {dni: dni}
    return this.httpHelperSrv.post({url: this.urlFindPersona, body: data}).then(response =>{
      return response;
    }).catch(error => {
      return error.error;
    })
  }

  async getPersonaById(id: number): Promise<PersonaResponse>{
    let data = {id: id}
    return this.httpHelperSrv.post({url: this.urlFindPersona, body: data}).then(response =>{
      return response;
    }).catch(error => {
      return error.error;
    })
  }

  async getLastNroCuenta(): Promise<ILastNroCuentaResponse>{
    return this.httpHelperSrv.get({url: this.urlLastNroCuenta, body: null}).then(response => {
      return response
    })
  }
}
