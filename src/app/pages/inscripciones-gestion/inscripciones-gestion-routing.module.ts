import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscripcionesGestionPage } from './inscripciones-gestion.page';

const routes: Routes = [
  {
    path: '',
    component: InscripcionesGestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscripcionesGestionPageRoutingModule {}
