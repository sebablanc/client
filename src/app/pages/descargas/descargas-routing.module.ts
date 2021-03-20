import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescargasPage } from './descargas.page';

const routes: Routes = [
  {
    path: '',
    component: DescargasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescargasPageRoutingModule {}
