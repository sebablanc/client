import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosGestionPage } from './alumnos-gestion.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnosGestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosGestionPageRoutingModule {}
