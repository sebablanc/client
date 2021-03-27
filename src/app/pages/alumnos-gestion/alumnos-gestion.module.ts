import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosGestionPageRoutingModule } from './alumnos-gestion-routing.module';

import { AlumnosGestionPage } from './alumnos-gestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosGestionPageRoutingModule
  ],
  declarations: [AlumnosGestionPage]
})
export class AlumnosGestionPageModule {}
