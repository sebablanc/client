import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiosPageRoutingModule } from './premios-routing.module';

import { PremiosPage } from './premios.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { WebComponentsModule } from 'src/app/components/web/webComponents.module';
import { uiModule } from 'src/app/ui/ui.module';
import { AngularMaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremiosPageRoutingModule,
    LayoutModule,
    WebComponentsModule,
    uiModule,
    AngularMaterialModule
  ],
  declarations: [PremiosPage]
})
export class PremiosPageModule {}
