import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeDashboardPageRoutingModule } from './employee-dashboard-routing.module';

import { EmployeeDashboardPage } from './employee-dashboard.page';
import {EquipmentDashboardPageModule} from "../equipment-dashboard-page/equipment-dashboard.module";
import {SharedModule} from "../../services/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeDashboardPageRoutingModule,
    EquipmentDashboardPageModule,
    SharedModule
  ],
  declarations: [EmployeeDashboardPage]
})
export class EmployeeDashboardPageModule {}
