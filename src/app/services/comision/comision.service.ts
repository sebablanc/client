import { Injectable } from '@angular/core';
import { Comision } from 'src/app/models/comision/comision';
import { ComisionResponse, ILastIdResponse } from 'src/app/models/comision/comisionResponse';
import { HttpHelperService } from '../http/http-helper.service';
import { IComisionSend } from './comisionService.interface';

@Injectable({
  providedIn: 'root'
})
export class ComisionService {

  private urlCreateComision = 'comision/create';
  private urlUpdateComision = 'comision/update';
  private urlFindAllComisiones = 'comision/all';
  private urlLastId = 'comision/lastId';

  constructor(private httpHelperSrv: HttpHelperService) { }

  parseComisionToComisionSend(comision: Comision): IComisionSend{
    if(!comision) return;

    // Formatear dias a string

    let comisionToSend: IComisionSend = {
      id: comision.obtenerId,
      cursoId: comision.obtenerCurso.obtenerId,
      dias: '',
      fechaFin: comision.obtenerFechaFin,
      fechaInicio: comision.obtenerFechaInicio,
      horaDesde: comision.obtenerHoraDesde,
      horaHasta: comision.obtenerHoraHasta,
      createdAt: comision.obtenerFechaCreacion ? comision.obtenerFechaCreacion : null,
      updatedAt: null
    }

    return comisionToSend;
  }

  async guardarComision(data: IComisionSend): Promise<ComisionResponse>{
    return this.httpHelperSrv.post({url: this.urlCreateComision, body: data}).then(response =>{
      return response;
    }).catch(error => {
      return error.error;
    })
  }

  async updateComision(data: IComisionSend): Promise<ComisionResponse>{
    return this.httpHelperSrv.put({url: this.urlUpdateComision, body: data}).then(response => { 
      return response;
    }).catch(error => {
      return error.error;
    })
  }

  async getComisionesList(): Promise<ComisionResponse>{
    return this.httpHelperSrv.get({url: this.urlFindAllComisiones, body: null}).then(result => {
      return result;
    })
  }
}
