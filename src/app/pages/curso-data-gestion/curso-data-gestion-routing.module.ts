import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoDataGestionPage } from './curso-data-gestion.page';

const routes: Routes = [
  {
    path: '',
    component: CursoDataGestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoDataGestionPageRoutingModule {}
