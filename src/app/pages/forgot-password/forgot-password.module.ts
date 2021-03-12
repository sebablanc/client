import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordPage } from './forgot-password.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { AngularMaterialModule } from 'src/app/material/material.module';
import { uiModule } from 'src/app/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordPageRoutingModule,
    LayoutModule,
    AngularMaterialModule,
    uiModule
  ],
  declarations: [ForgotPasswordPage]
})
export class ForgotPasswordPageModule {}
