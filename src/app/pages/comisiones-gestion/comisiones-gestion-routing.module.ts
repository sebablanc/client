import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComisionesGestionPage } from './comisiones-gestion.page';

const routes: Routes = [
  {
    path: '',
    component: ComisionesGestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComisionesGestionPageRoutingModule {}
