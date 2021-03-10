import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrComputersPage } from './dr-computers.page';

const routes: Routes = [
  {
    path: '',
    component: DrComputersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrComputersPageRoutingModule {}
