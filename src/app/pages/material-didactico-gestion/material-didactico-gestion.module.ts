import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialDidacticoGestionPageRoutingModule } from './material-didactico-gestion-routing.module';

import { MaterialDidacticoGestionPage } from './material-didactico-gestion.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { WebComponentsModule } from 'src/app/components/web/webComponents.module';
import { uiModule } from 'src/app/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialDidacticoGestionPageRoutingModule,
    LayoutModule,
    WebComponentsModule,
    uiModule
  ],
  declarations: [MaterialDidacticoGestionPage]
})
export class MaterialDidacticoGestionPageModule {}
