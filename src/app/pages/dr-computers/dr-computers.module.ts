import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrComputersPageRoutingModule } from './dr-computers-routing.module';

import { DrComputersPage } from './dr-computers.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { uiModule } from 'src/app/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrComputersPageRoutingModule,
    LayoutModule,
    uiModule
  ],
  declarations: [DrComputersPage]
})
export class DrComputersPageModule {}
