import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentDashboardPage } from './equipment-dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: EquipmentDashboardPage,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class Tab1PageRoutingModule {}
