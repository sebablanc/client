import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosGestionPageRoutingModule } from './alumnos-gestion-routing.module';

import { AlumnosGestionPage } from './alumnos-gestion.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { MyCommonModule } from 'src/app/components/common/common.module';
import { uiModule } from 'src/app/ui/ui.module';
import { AngularMaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosGestionPageRoutingModule,
    LayoutModule,
    MyCommonModule,
    uiModule,
    AngularMaterialModule
  ],
  declarations: [AlumnosGestionPage]
})
export class AlumnosGestionPageModule {}
