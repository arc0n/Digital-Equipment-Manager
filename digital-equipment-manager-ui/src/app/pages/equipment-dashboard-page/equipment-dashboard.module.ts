import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EquipmentDashboardPage } from './equipment-dashboard-page.component';

import { Tab1PageRoutingModule } from './equipment-dashboard-routing.module';
import {AppModule} from "../../app.module";
import {QrScanControlComponent} from "../../components/qr-scan-control/qr-scan-control.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [EquipmentDashboardPage, QrScanControlComponent]
})
export class EquipmentDashboardPageModule {}
