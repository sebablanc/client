import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComisionesGestionPageRoutingModule } from './comisiones-gestion-routing.module';

import { ComisionesGestionPage } from './comisiones-gestion.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { WebComponentsModule } from 'src/app/components/web/webComponents.module';
import { uiModule } from 'src/app/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComisionesGestionPageRoutingModule,
    LayoutModule,
    uiModule,
    WebComponentsModule
  ],
  declarations: [ComisionesGestionPage]
})
export class ComisionesGestionPageModule {}
