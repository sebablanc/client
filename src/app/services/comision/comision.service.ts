import { Injectable } from '@angular/core';
import { ComisionResponse } from 'src/app/models/comision/comisionResponse';
import { HttpHelperService } from '../http/http-helper.service';
import { IComisionSend } from './comisionService.interface';

@Injectable({
  providedIn: 'root'
})
export class ComisionService {

  private urlCreateComision = 'comision/create';
  private urlFindAllComisiones = 'comision/all';

  constructor(private httpHelperSrv: HttpHelperService) { }

  async guardarComision(data: IComisionSend): Promise<ComisionResponse>{
    return this.httpHelperSrv.post({url: this.urlCreateComision, body: data}).then(response =>{
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
