import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoDetailPage } from './curso-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CursoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoDetailPageRoutingModule {}
