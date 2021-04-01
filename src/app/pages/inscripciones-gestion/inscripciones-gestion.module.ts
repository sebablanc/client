import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscripcionesGestionPageRoutingModule } from './inscripciones-gestion-routing.module';

import { InscripcionesGestionPage } from './inscripciones-gestion.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { uiModule } from 'src/app/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscripcionesGestionPageRoutingModule,
    LayoutModule,
    uiModule
  ],
  declarations: [InscripcionesGestionPage]
})
export class InscripcionesGestionPageModule {}
