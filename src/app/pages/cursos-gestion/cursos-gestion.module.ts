import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosGestionPageRoutingModule } from './cursos-gestion-routing.module';

import { CursosGestionPage } from './cursos-gestion.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { uiModule } from 'src/app/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosGestionPageRoutingModule,
    LayoutModule,
    uiModule
  ],
  declarations: [CursosGestionPage]
})
export class CursosGestionPageModule {}