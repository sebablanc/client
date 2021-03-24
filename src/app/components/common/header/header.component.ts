import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user/user';
import { UserTypes } from 'src/app/models/user/user/user-types.enum';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';
import { ShareService } from 'src/app/services/share-service/share.service';
import { LoginService } from 'src/app/services/user/login/login.service';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';

export const NAV_ITEMS = [
  {text: 'Home', link: 'home', needLogin: false},
  {text: 'Quiénes somos', link: 'about-us', needLogin: false},
  {text: 'DR Computers', link: 'dr-computers', needLogin: false},
  {text: 'DR Kids', link: 'dr-kids', needLogin: false},
  {text: 'Descargas', link: 'descargas', needLogin: true},
  {text: 'Promociones', link: 'promociones', needLogin: false},
  {text: 'Boletín informativo', link: 'boletin-informativo', needLogin: false},
  {text: 'Consultas', link: 'consultas', needLogin: false},
  {text: 'Inscripciones', link: 'inscripciones', needLogin: true},
  {text: 'Premios', link: 'premios', needLogin: false},
]

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  roundedButtonConfig: IRoundedButtonConfig;
  headerNavItems: Array<INavItem> = NAV_ITEMS;
  linkActive = NAV_ITEMS[0].text;
  user: User;
  userTypes = UserTypes;
  
  constructor(private shareSrv: ShareService, private userSingleton: UserSingleton, private loginSrv: LoginService) { }

  async ngOnInit() {
    this.viewComponentsConfiguration();
    this.user = await this.userSingleton.instance();
    this.linkActive = location.pathname.substring(1, location.pathname.length);
  }

  async ngOnChanges(){
    this.user = await this.userSingleton.instance();
  }

  viewComponentsConfiguration(){
    this.roundedButtonConfig = { text: 'Registrarme' };
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
  needLogin: boolean
}
