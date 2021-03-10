import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

export const NAV_ITEMS = [
  {text: 'Home', link: 'home'},
  {text: 'Quiénes somos', link: 'about-us'},
  {text: 'DR Computers', link: 'dr-computers'},
  {text: 'DR Kids', link: 'dr-kids'},
  {text: 'Promociones', link: ''},
  {text: 'Boletín informativo', link: ''},
  {text: 'Consultas', link: ''},
  {text: 'Premios', link: ''},
]

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  headerNavItems: Array<INavItem> = NAV_ITEMS;
  linkActive = NAV_ITEMS[0].text;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.linkActive = location.pathname.substring(1, location.pathname.length);
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
