import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentIoPage } from './equipment-io-page.component';

const routes: Routes = [
  {
    path: '',
    component: EquipmentIoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipmentIoPagePageRoutingModule {}
