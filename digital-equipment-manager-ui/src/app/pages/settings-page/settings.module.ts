import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsPage } from './settings.page';
import { QrScanComponentModule } from '../../components/qr-scan/explore-container.module';

import { Tab2PageRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    QrScanComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
