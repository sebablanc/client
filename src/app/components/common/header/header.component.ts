import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user/user';
import { UserTypes } from 'src/app/models/user/user/user-types.enum';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';
import { ShareService } from 'src/app/services/share-service/share.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { LoginService } from 'src/app/services/user/login/login.service';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';

export const NAV_ITEMS = [
  {text: 'Home', link: 'home', needLogin: false, isGestion: false},
  {text: 'Quiénes somos', link: 'about-us', needLogin: false, isGestion: false},
  {text: 'DR Computers', link: 'dr-computers', needLogin: false, isGestion: false},
  {text: 'DR Kids', link: 'dr-kids', needLogin: false, isGestion: false},
  {text: 'Descargas', link: 'descargas', needLogin: true, isGestion: false},
  {text: 'Promociones', link: 'promociones', needLogin: false, isGestion: false},
  {text: 'Boletín informativo', link: 'boletin-informativo', needLogin: false, isGestion: false},
  {text: 'Consultas', link: 'consultas', needLogin: false, isGestion: false},
  {text: 'Inscripciones', link: 'inscripciones', needLogin: true, isGestion: false},
  {text: 'Premios', link: 'premios', needLogin: false, isGestion: false},
  {text: 'Alumnos', link: 'alumnos-gestion', needLogin: true, isGestion: true},
  {text: 'Cursos', link: 'cursos-gestion', needLogin: true, isGestion: true},
  {text: 'Comisiones', link: 'comisiones-gestion', needLogin: true, isGestion: true},
  {text: 'Inscripciones', link: 'inscripciones-gestion', needLogin: true, isGestion: true},
]

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isKids: boolean = false;
  roundedButtonConfig: IRoundedButtonConfig;
  headerNavItems: Array<INavItem> = NAV_ITEMS;
  linkActive = NAV_ITEMS[0].text;
  user: User = new User();
  userTypes = UserTypes;
  
  constructor(private shareSrv: ShareService, private storageSrv: StorageService, private loginSrv: LoginService) {
  }
  
  ngOnInit() {
    this.viewComponentsConfiguration();
    this.linkActive = location.pathname.substring(1, location.pathname.length);
    this.getUser();
  }

  viewComponentsConfiguration(){
    this.roundedButtonConfig = { text: 'Registrarme' };
    this.getUser();
  }

  getUser(){
    setInterval(()=>{
      this.storageSrv.get('user').then(user =>{
        Object.assign(this.user, user);
    });
    }, 500);
  }

  goTo(link: string){
    this.linkActive = link;
    this.shareSrv.goTo(link);
  }

  async logOut(){
    await this.loginSrv.logOut();
    location.reload();
    this.goTo('home');
  }

}

export interface INavItem {
  text: string,
  link: string,
  needLogin: boolean,
  isGestion: boolean
}
