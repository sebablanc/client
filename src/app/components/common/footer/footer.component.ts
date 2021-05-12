import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/models/user/user/user';
import { UserTypes } from 'src/app/models/user/user/user-types.enum';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';
import { StorageService } from 'src/app/services/storage/storage.service';
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

  constructor(private navCtrl: NavController, private storageSrv: StorageService, private userSingleton: UserSingleton) { }

  async ngOnInit() {
    setInterval(()=>{
      this.storageSrv.get('user').then(user =>{
        if(user){
          this.user = new User();
          Object.assign(this.user, user);
        }
      });
    }, 500);
  }

  goTo(link: string){
    this.navCtrl.navigateRoot(`/${link}`);
  }

}
