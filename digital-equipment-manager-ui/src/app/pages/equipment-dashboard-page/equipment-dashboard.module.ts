import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EquipmentDashboardPage } from './equipment-dashboard-page.component';
import { QrScanComponentModule } from '../../components/qr-scan/explore-container.module';

import { Tab1PageRoutingModule } from './equipment-dashboard-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    QrScanComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [EquipmentDashboardPage]
})
export class EquipmentDashboardPageModule {}
