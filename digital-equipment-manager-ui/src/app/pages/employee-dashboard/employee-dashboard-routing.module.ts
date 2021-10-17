import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeDashboardPage } from './employee-dashboard.page';
import {IonicModule} from "@ionic/angular";

const routes: Routes = [
  {
    path: '',
    component: EmployeeDashboardPage
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), IonicModule],
  exports: [RouterModule],
})
export class EmployeeDashboardPageRoutingModule {}
