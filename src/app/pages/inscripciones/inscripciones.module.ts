import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscripcionesPageRoutingModule } from './inscripciones-routing.module';

import { InscripcionesPage } from './inscripciones.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { WebComponentsModule } from 'src/app/components/web/webComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscripcionesPageRoutingModule,
    LayoutModule,
    WebComponentsModule
  ],
  declarations: [InscripcionesPage]
})
export class InscripcionesPageModule {}
