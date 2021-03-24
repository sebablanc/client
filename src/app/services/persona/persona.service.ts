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
  private urlLastNroCuenta = 'persona/findLastNroCuenta';

  constructor(private httpHelperSrv: HttpHelperService, private storageSrv: StorageService) { }


  parsePersonaToPersonaSend(persona: Persona): IPersonaSend{
    if(!persona) return;

    let personaToSend: IPersonaSend = {
      apellido: persona.getApellido,
      celular: persona.getCelular,
      createdAt: persona.obtenerFechaCreacion ? persona.obtenerFechaCreacion : null,
      direccion: persona.getDireccion,
      email: persona.getEmail,
      id: persona.getId,
      localidadId: persona.getLocalidad.obtenerId,
      nombre: persona.getNombre,
      nroCuenta: persona.getNroCuenta,
      otroMedio: persona.getOtroMedio,
      telefono: persona.getTelefono,
      updatedAt: null
    }

    return personaToSend;
  }

  async guardarPersona(data: IPersonaSend): Promise<PersonaResponse>{
    return this.httpHelperSrv.post({url: this.urlCreatePersona, body: data}).then(response =>{
      return response;
    })
  }

  async getLastNroCuenta(): Promise<ILastNroCuentaResponse>{
    return this.httpHelperSrv.get({url: this.urlLastNroCuenta, body: null}).then(response => {
      return response
    })
  }
}
