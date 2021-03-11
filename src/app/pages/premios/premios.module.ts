import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiosPageRoutingModule } from './premios-routing.module';

import { PremiosPage } from './premios.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremiosPageRoutingModule,
    LayoutModule
  ],
  declarations: [PremiosPage]
})
export class PremiosPageModule {}
