import { Injectable } from '@angular/core';
import { RegisterResponse } from 'src/app/models/user/register/model/registerResponse';
import { HttpHelperService } from '../../http/http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerURL = 'user/register';

  constructor(private httpHelperSrv: HttpHelperService) { }

  register(body: any){
    return this.httpHelperSrv.post({url: this.registerURL, body: body}).then(response =>{
      let registerResponse: RegisterResponse = null;
      registerResponse = response;
      return registerResponse;
    }).catch(error => {
      return error.error;
    })
  }
}
