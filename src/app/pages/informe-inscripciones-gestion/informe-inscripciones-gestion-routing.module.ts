import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformeInscripcionesGestionPage } from './informe-inscripciones-gestion.page';

const routes: Routes = [
  {
    path: '',
    component: InformeInscripcionesGestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformeInscripcionesGestionPageRoutingModule {}
