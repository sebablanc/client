import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasPageRoutingModule } from './consultas-routing.module';

import { ConsultasPage } from './consultas.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { AngularMaterialModule } from 'src/app/material/material.module';
import { uiModule } from 'src/app/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasPageRoutingModule,
    LayoutModule,
    AngularMaterialModule,
    uiModule
  ],
  declarations: [ConsultasPage]
})
export class ConsultasPageModule {}
