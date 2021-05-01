import { Injectable } from '@angular/core';
import { Premio } from 'src/app/models/premio/premio';
import { PremioResponse } from 'src/app/models/premio/premioReponse';
import { HttpHelperService } from '../http/http-helper.service';
import { IPremioSend } from './premioService.interface';

@Injectable({
  providedIn: 'root'
})
export class PremioService {

  private urlCreatePremio = 'premio/create';

  constructor(private httpHelperSrv: HttpHelperService) { }

  parsePremioToPremioSend(premio: Premio): IPremioSend{
    if(!premio) return;

    let premioToSend: IPremioSend = {
      id: premio.obtenerId,
      fechaSorteo: premio.obtenerFechaSorteo,
      alumnoFavorecido: premio.obtenerAlumnoFavorecido,
      alumnoExtractor: premio.obtenerAlumnoExtractor,
      detalleExtraccion: premio.obtenerDetalleExtraccion,
      numeroCupon: premio.obtenerNumeroCupon,
      tipo: premio.obtenerTipo.value,
      createdAt: premio.obtenerFechaCreacion ? premio.obtenerFechaCreacion : null,
      updatedAt: null
    }

    return premioToSend;
  }

  async savePremio(data: IPremioSend): Promise<PremioResponse>{
    return this.httpHelperSrv.post({url: this.urlCreatePremio, body: data}).then(response =>{
      return response;
    }).catch(error => {
      return error.error;
    })
  }
}
