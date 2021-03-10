import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrComputersPageRoutingModule } from './dr-computers-routing.module';

import { DrComputersPage } from './dr-computers.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrComputersPageRoutingModule,
    LayoutModule
  ],
  declarations: [DrComputersPage]
})
export class DrComputersPageModule {}
