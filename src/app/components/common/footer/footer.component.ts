import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/models/user/user/user';
import { UserTypes } from 'src/app/models/user/user/user-types.enum';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';
import { INavItem, NAV_ITEMS } from '../header/header.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  
  user: User;
  userTypes = UserTypes;
  navItems: Array<INavItem> = NAV_ITEMS;

  constructor(private navCtrl: NavController, private userSingleton: UserSingleton) { }

  async ngOnInit() {
    this.user = this.userSingleton.instance();
  }

  goTo(link: string){
    this.navCtrl.navigateRoot(`/${link}`);
  }

}
