import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeAddPagePage } from './employee-add-page.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeAddPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeAddPagePageRoutingModule {}
