import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoletinInformativoPageRoutingModule } from './boletin-informativo-routing.module';

import { BoletinInformativoPage } from './boletin-informativo.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoletinInformativoPageRoutingModule,
    LayoutModule
  ],
  declarations: [BoletinInformativoPage]
})
export class BoletinInformativoPageModule {}
