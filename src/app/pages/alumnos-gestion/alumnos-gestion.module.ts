import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosGestionPageRoutingModule } from './alumnos-gestion-routing.module';

import { AlumnosGestionPage } from './alumnos-gestion.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { uiModule } from 'src/app/ui/ui.module';
import { AngularMaterialModule } from 'src/app/material/material.module';
import { WebComponentsModule } from 'src/app/components/web/webComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosGestionPageRoutingModule,
    LayoutModule,
    WebComponentsModule,
    uiModule,
    AngularMaterialModule
  ],
  declarations: [AlumnosGestionPage]
})
export class AlumnosGestionPageModule {}
