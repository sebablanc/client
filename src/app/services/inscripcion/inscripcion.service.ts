import { Injectable } from '@angular/core';
import { Inscripcion } from 'src/app/models/inscripcion/inscripcion';
import { InscripcionResponse } from 'src/app/models/inscripcion/inscripcionResponse';
import { HttpHelperService } from '../http/http-helper.service';
import { IInscripcionSend } from './inscripcionService.interface';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  private urlCreateInscripcion = 'personaComision/create';
  private urlFindAllInscripciones = 'personaComision/all';

  constructor(private httpHelperSrv: HttpHelperService) { }

  parseInscripcionToInscripcionSend(inscripcion: Inscripcion): IInscripcionSend{
    if(!inscripcion) return;

    let inscripcionToSend: IInscripcionSend = {
      id: inscripcion.obtenerId,
      personaId: inscripcion.obtenerAlumno.id,
      comisionId: inscripcion.obtenerComision.id,
      fechaInscripcion: inscripcion.obtenerFechaInscripcion,
      createdAt: inscripcion.obtenerFechaCreacion ? inscripcion.obtenerFechaCreacion : null,
      updatedAt: null
    }

    return inscripcionToSend;
  }

  async guardarInscripcion(data: IInscripcionSend): Promise<InscripcionResponse>{
    return this.httpHelperSrv.post({url: this.urlCreateInscripcion, body: data}).then(response =>{
      return response;
    }).catch(error => {
      return error.error;
    })
  }

  async getInscripcionesList(): Promise<InscripcionResponse>{
    return this.httpHelperSrv.get({url: this.urlFindAllInscripciones, body: null}).then(result => {
      return result;
    }).catch(error => {
      return error.error;
    })
  }
}
