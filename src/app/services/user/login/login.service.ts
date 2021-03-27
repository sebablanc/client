import { Injectable } from '@angular/core';
import { LoginSingleton } from 'src/app/models/user/login/loginSingleton';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';
import { HttpHelperService } from '../../http/http-helper.service';
import { StorageService } from '../../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private loginURL = 'user/login';

  constructor(private httpHelperSrv: HttpHelperService, private storageSrv: StorageService, private userSingleton: UserSingleton) { }

  login(body: LoginSingleton): Promise<boolean>{
    return this.httpHelperSrv.post({url: this.loginURL, body: body}).then(user =>{
      if(user && user.exito && user.usuarios && user.usuarios.length>0){
        let userFinded = user.usuarios[0];
        this.storageSrv.set('user', userFinded);
        if(userFinded && userFinded.persona && userFinded.persona['id']) this.storageSrv.set('persona', userFinded.persona);
      }
      return user;
    }).catch(error => {
      return false;
    })
  }

  autoLogin(){
    return this.storageSrv.get('user');
  }

  logOut(){
    this.userSingleton.instance(true);
    return this.storageSrv.removeAll();
  }

}
