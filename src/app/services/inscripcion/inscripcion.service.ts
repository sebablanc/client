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

  constructor(private httpHelperSrv: HttpHelperService) { }

  parseInscripcionToInscripcionSend(inscripcion: Inscripcion): IInscripcionSend{
    if(!inscripcion) return;

    let inscripcionToSend: IInscripcionSend = {
      id: inscripcion.obtenerId,
      alumnoId: inscripcion.obtenerAlumno.id,
      comisionId: inscripcion.obtenerComision.id,
      fechaInscripcion: inscripcion.obtenerFechaInscripcion,
      createdAt: inscripcion.obtenerFechaCreacion ? inscripcion.obtenerFechaCreacion : null,
      updatedAt: null
    }

    return inscripcionToSend;
  }

  async guardarInscripcion(data: IInscripcionSend): Promise<InscripcionResponse>{
    console.log('url');
    console.log(this.urlCreateInscripcion);
    
    return this.httpHelperSrv.post({url: this.urlCreateInscripcion, body: data}).then(response =>{
      return response;
    }).catch(error => {
      return error.error;
    })
  }
}
