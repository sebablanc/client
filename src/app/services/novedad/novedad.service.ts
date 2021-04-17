import { Injectable } from '@angular/core';
import { Novedad } from 'src/app/models/novedad/novedad';
import { NovedadResponse } from 'src/app/models/novedad/novedadResponse';
import { HttpHelperService } from '../http/http-helper.service';
import { INovedadSend } from './novedadService.interface';

@Injectable({
  providedIn: 'root'
})
export class NovedadService {

  private urlCreateNovedad = 'novedad/create';

  constructor(private httpHelperSrv: HttpHelperService) { }

  parseNovedadToNovedadSend(novedad: Novedad): INovedadSend{
    if(!novedad) return;

    let novedadToSend: INovedadSend = {
      id: novedad.obtenerId,
      title: novedad.obtenerTitle,
      messageNovedad: novedad.obtenerMensaje,
      createdAt: novedad.obtenerFechaCreacion ? novedad.obtenerFechaCreacion : null,
      updatedAt: null
    }

    return novedadToSend;
  }

  async guardarNovedad(data: INovedadSend): Promise<NovedadResponse>{
    return this.httpHelperSrv.post({url: this.urlCreateNovedad, body: data}).then(response =>{
      return response;
    }).catch(error => {
      return error.error;
    })
  }
}
