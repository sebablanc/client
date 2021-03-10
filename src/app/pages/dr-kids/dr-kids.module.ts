import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrKidsPageRoutingModule } from './dr-kids-routing.module';

import { DrKidsPage } from './dr-kids.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrKidsPageRoutingModule,
    LayoutModule
  ],
  declarations: [DrKidsPage]
})
export class DrKidsPageModule {}
