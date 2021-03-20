import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescargasPageRoutingModule } from './descargas-routing.module';

import { DescargasPage } from './descargas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescargasPageRoutingModule
  ],
  declarations: [DescargasPage]
})
export class DescargasPageModule {}
