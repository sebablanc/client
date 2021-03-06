import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescargasPageRoutingModule } from './descargas-routing.module';

import { DescargasPage } from './descargas.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { uiModule } from 'src/app/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescargasPageRoutingModule,
    LayoutModule,
    uiModule
  ],
  declarations: [DescargasPage]
})
export class DescargasPageModule {}
