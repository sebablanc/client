import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/models/user/user/user';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';

export const NAV_ITEMS = [
  {text: 'Home', link: 'home'},
  {text: 'Quiénes somos', link: 'about-us'},
  {text: 'DR Computers', link: 'dr-computers'},
  {text: 'DR Kids', link: 'dr-kids'},
  {text: 'Promociones', link: 'promociones'},
  {text: 'Boletín informativo', link: 'boletin-informativo'},
  {text: 'Consultas', link: 'consultas'},
  {text: 'Premios', link: 'premios'},
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
  
  constructor(private navCtrl: NavController, private userSingleton: UserSingleton) { }

  async ngOnInit() {
    this.viewComponentsConfiguration();
    this.linkActive = location.pathname.substring(1, location.pathname.length);
    this.user = await this.userSingleton.instance();
  }

  async ngOnChanges(){
    this.user = await this.userSingleton.instance();
  }

  viewComponentsConfiguration(){
    this.roundedButtonConfig = { text: 'Registrarme' };
  }

  goTo(link: string){
    this.linkActive = link;
    this.navCtrl.navigateRoot(`/${link}`);
  }

}

export interface INavItem {
  text: string,
  link: string
}
