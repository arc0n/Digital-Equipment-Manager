import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EquipmentDashboardPage } from './equipment-dashboard-page.component';

import { Tab1PageRoutingModule } from './equipment-dashboard-routing.module';
import {SharedModule} from "../../services/shared.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
    declarations: [EquipmentDashboardPage]
})
export class EquipmentDashboardPageModule {}
