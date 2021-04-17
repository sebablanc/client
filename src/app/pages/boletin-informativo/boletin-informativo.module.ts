import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoletinInformativoPageRoutingModule } from './boletin-informativo-routing.module';

import { BoletinInformativoPage } from './boletin-informativo.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { WebComponentsModule } from 'src/app/components/web/webComponents.module';
import { AngularMaterialModule } from 'src/app/material/material.module';
import { uiModule } from 'src/app/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoletinInformativoPageRoutingModule,
    LayoutModule,
    WebComponentsModule,
    uiModule,
    AngularMaterialModule
  ],
  declarations: [BoletinInformativoPage]
})
export class BoletinInformativoPageModule {}
