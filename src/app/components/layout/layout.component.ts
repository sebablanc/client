import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user/user';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  user: User;
  userName: string;
  constructor(private userSingleton: UserSingleton) { 
    
  }

  ngOnInit() {
    this.user = this.userSingleton.instance();
    if(this.user && this.user.email){
      this.userName = this.user.persona && this.user.persona['nombre'] ? this.user.persona['nombre'] + ' ' + this.user.persona['apellido'] : this.user.email.split('@')[0];
    }
  }
}
