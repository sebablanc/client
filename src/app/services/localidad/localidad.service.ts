import { Injectable } from '@angular/core';
import { LocalidadResponse } from 'src/app/models/localidad/localidadResponse';
import { HttpHelperService } from '../http/http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {

  private urlGetAll = 'localidad/all'
  private urlGet = 'localidad/find'

  constructor(private httpHelperSrv: HttpHelperService) { }

  getLocalidadesList(): Promise<LocalidadResponse> {
    return this.httpHelperSrv.get({url: this.urlGetAll, body: null}).then(result => {
      return result;
    })
  }

  getSomeLocalidadesList(data): Promise<LocalidadResponse> {
    return this.httpHelperSrv.post({url: this.urlGet, body: data}).then(result => {
      return result;
    })
  }
}
