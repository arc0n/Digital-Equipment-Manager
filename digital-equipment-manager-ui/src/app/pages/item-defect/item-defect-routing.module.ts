import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemDefectPage } from './item-defect.page';

const routes: Routes = [
  {
    path: '',
    component: ItemDefectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemDefectPageRoutingModule {}
