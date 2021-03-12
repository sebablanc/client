import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { uiModule } from 'src/app/ui/ui.module';
import { AngularMaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    LayoutModule,
    AngularMaterialModule,
    uiModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
