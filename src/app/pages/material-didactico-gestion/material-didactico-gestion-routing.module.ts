import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialDidacticoGestionPage } from './material-didactico-gestion.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialDidacticoGestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialDidacticoGestionPageRoutingModule {}
