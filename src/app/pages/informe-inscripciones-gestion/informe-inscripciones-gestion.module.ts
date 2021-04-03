import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformeInscripcionesGestionPageRoutingModule } from './informe-inscripciones-gestion-routing.module';

import { InformeInscripcionesGestionPage } from './informe-inscripciones-gestion.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { WebComponentsModule } from 'src/app/components/web/webComponents.module';
import { uiModule } from 'src/app/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformeInscripcionesGestionPageRoutingModule,
    LayoutModule,
    uiModule,
    WebComponentsModule
  ],
  declarations: [InformeInscripcionesGestionPage]
})
export class InformeInscripcionesGestionPageModule {}
