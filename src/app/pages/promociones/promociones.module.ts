import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocionesPageRoutingModule } from './promociones-routing.module';

import { PromocionesPage } from './promociones.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocionesPageRoutingModule,
    LayoutModule
  ],
  declarations: [PromocionesPage]
})
export class PromocionesPageModule {}
