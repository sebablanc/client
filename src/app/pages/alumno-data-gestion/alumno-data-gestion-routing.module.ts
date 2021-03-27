import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoDataGestionPage } from './alumno-data-gestion.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoDataGestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoDataGestionPageRoutingModule {}
