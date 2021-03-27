import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoDataGestionPageRoutingModule } from './curso-data-gestion-routing.module';

import { CursoDataGestionPage } from './curso-data-gestion.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoDataGestionPageRoutingModule,
    LayoutModule
  ],
  declarations: [CursoDataGestionPage]
})
export class CursoDataGestionPageModule {}
