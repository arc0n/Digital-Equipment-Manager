import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentAddPagePage } from './equipment-add-page.page';

const routes: Routes = [
  {
    path: '',
    component: EquipmentAddPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipmentAddPagePageRoutingModule {}
