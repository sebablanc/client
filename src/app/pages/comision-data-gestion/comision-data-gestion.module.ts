import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComisionDataGestionPageRoutingModule } from './comision-data-gestion-routing.module';

import { ComisionDataGestionPage } from './comision-data-gestion.page';
import { WebComponentsModule } from 'src/app/components/web/webComponents.module';
import { LayoutModule } from 'src/app/components/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComisionDataGestionPageRoutingModule,
    LayoutModule,
    WebComponentsModule
  ],
  declarations: [ComisionDataGestionPage]
})
export class ComisionDataGestionPageModule {}
