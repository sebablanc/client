import { Injectable } from '@angular/core';
import { HttpHelperService } from '../http/http-helper.service';
import { ConsultaResponse, IConsultaSend } from './consultaService.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private urlSendConsulta = 'consulta/send';

  constructor(private httpHelperSrv: HttpHelperService) { }

  async sendConsulta(data: IConsultaSend): Promise<ConsultaResponse>{
    return this.httpHelperSrv.post({url: this.urlSendConsulta, body: data}).then(response =>{
      return response;
    }).catch(error => {
      return error.error;
    })
  }
}
