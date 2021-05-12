import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescargarMaterialDidacticoPageRoutingModule } from './descargar-material-didactico-routing.module';

import { DescargarMaterialDidacticoPage } from './descargar-material-didactico.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { uiModule } from 'src/app/ui/ui.module';
import { WebComponentsModule } from 'src/app/components/web/webComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescargarMaterialDidacticoPageRoutingModule,
    LayoutModule,
    WebComponentsModule,
    uiModule
  ],
  declarations: [DescargarMaterialDidacticoPage]
})
export class DescargarMaterialDidacticoPageModule {}
