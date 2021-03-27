import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoDataGestionPageRoutingModule } from './alumno-data-gestion-routing.module';

import { AlumnoDataGestionPage } from './alumno-data-gestion.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { WebComponentsModule } from 'src/app/components/web/webComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoDataGestionPageRoutingModule,
    LayoutModule,
    WebComponentsModule
  ],
  declarations: [AlumnoDataGestionPage]
})
export class AlumnoDataGestionPageModule {}
