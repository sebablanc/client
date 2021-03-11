import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoletinInformativoPage } from './boletin-informativo.page';

const routes: Routes = [
  {
    path: '',
    component: BoletinInformativoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoletinInformativoPageRoutingModule {}
