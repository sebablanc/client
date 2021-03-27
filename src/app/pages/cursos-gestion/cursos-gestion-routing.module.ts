import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosGestionPage } from './cursos-gestion.page';

const routes: Routes = [
  {
    path: '',
    component: CursosGestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosGestionPageRoutingModule {}
