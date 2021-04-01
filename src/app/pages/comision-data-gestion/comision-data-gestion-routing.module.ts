import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComisionDataGestionPage } from './comision-data-gestion.page';

const routes: Routes = [
  {
    path: '',
    component: ComisionDataGestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComisionDataGestionPageRoutingModule {}
