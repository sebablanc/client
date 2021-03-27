import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosGestionPageRoutingModule } from './cursos-gestion-routing.module';

import { CursosGestionPage } from './cursos-gestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosGestionPageRoutingModule
  ],
  declarations: [CursosGestionPage]
})
export class CursosGestionPageModule {}
