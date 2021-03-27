import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosGestionPageRoutingModule } from './alumnos-gestion-routing.module';

import { AlumnosGestionPage } from './alumnos-gestion.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosGestionPageRoutingModule,
    LayoutModule
  ],
  declarations: [AlumnosGestionPage]
})
export class AlumnosGestionPageModule {}
