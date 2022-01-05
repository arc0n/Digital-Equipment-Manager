import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeDashboardPageRoutingModule } from './employee-dashboard-routing.module';

import { EmployeeDashboardPage } from './employee-dashboard.page';
import {SharedModule} from "../../services/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeDashboardPageRoutingModule,
    SharedModule
  ],
  declarations: [EmployeeDashboardPage]
})
export class EmployeeDashboardPageModule {}
