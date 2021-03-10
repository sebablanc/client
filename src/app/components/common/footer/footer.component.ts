import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { INavItem, NAV_ITEMS } from '../header/header.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  navItems: Array<INavItem> = NAV_ITEMS;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  goTo(link: string){
    this.navCtrl.navigateRoot(`/${link}`);
  }

}
