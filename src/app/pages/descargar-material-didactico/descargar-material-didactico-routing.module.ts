import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescargarMaterialDidacticoPage } from './descargar-material-didactico.page';

const routes: Routes = [
  {
    path: '',
    component: DescargarMaterialDidacticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescargarMaterialDidacticoPageRoutingModule {}
