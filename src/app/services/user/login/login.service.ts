import { Injectable } from '@angular/core';
import { HttpHelperService } from '../../http/http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private loginURL = 'user/login';

  constructor(private httpHelperSrv: HttpHelperService) { }

  login(body: any){
    return this.httpHelperSrv.post({url: this.loginURL, body: body}).then(user =>{
      console.log(user);
      
    }).catch(error => {
      console.log(error);
      
    })
  }

}
