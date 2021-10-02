import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import { EquipmentIoPagePageRoutingModule } from './equipment-io-page-routing.module';

import { EquipmentIoPage } from './equipment-io-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipmentIoPagePageRoutingModule
  ],
  declarations: [EquipmentIoPage]
})
export class EquipmentIoPagePageModule {
}
