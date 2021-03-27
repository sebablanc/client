import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosGestionPageRoutingModule } from './alumnos-gestion-routing.module';

import { AlumnosGestionPage } from './alumnos-gestion.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { MyCommonModule } from 'src/app/components/common/common.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosGestionPageRoutingModule,
    LayoutModule,
    MyCommonModule
  ],
  declarations: [AlumnosGestionPage]
})
export class AlumnosGestionPageModule {}
