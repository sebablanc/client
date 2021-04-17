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
  private urlUpdateNovedad = 'novedad/update';
  private urlDeleteNovedad = 'novedad/delete';
  private urlFindAllNovedades = 'novedad/all';

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

  async saveNovedad(data: INovedadSend): Promise<NovedadResponse>{
    return this.httpHelperSrv.post({url: this.urlCreateNovedad, body: data}).then(response =>{
      return response;
    }).catch(error => {
      return error.error;
    })
  }

  async updateNovedad(data: INovedadSend): Promise<NovedadResponse>{
    return this.httpHelperSrv.put({url: this.urlUpdateNovedad, body: data}).then(response =>{
      return response;
    }).catch(error => {
      return error.error;
    });
  }

  async deleteNovedad(id: number): Promise<NovedadResponse>{
    let data = {id: id};
    return this.httpHelperSrv.post({url: this.urlDeleteNovedad, body: data}).then(response => { 
      return response;
    }).catch(error => {
      return error.error;
    })
  }

  async getNovedadesList(): Promise<NovedadResponse>{
    return this.httpHelperSrv.get({url: this.urlFindAllNovedades, body: null}).then(result => {
      return result;
    })
  }
}
