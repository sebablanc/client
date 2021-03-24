import { Injectable } from '@angular/core';
import { PersonaResponse } from 'src/app/models/persona/personaResponse';
import { HttpHelperService } from '../http/http-helper.service';
import { IPersonaSend } from './personaService.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpHelperSrv: HttpHelperService) { }

  guardarPersona(data: IPersonaSend): Promise<PersonaResponse>{
    return this.httpHelperSrv.post({url: '', body: data}).then(response =>{
      if(response && response.exito){
        // TODO: save in localStorage
      }
      return response;
    })
  }

  getLastNroCuenta(): Promise<{exito: boolean, value: string}>{
    return this.httpHelperSrv.get({url: '', body: null}).then(response => {
      return response
    })
  }
}
