import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoDetailPageRoutingModule } from './curso-detail-routing.module';

import { CursoDetailPage } from './curso-detail.page';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { uiModule } from 'src/app/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoDetailPageRoutingModule,
    LayoutModule,
    uiModule
  ],
  declarations: [CursoDetailPage]
})
export class CursoDetailPageModule {}
