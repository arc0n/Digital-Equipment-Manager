import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import { EquipmentIoPagePageRoutingModule } from './equipment-io-page-routing.module';

import { EquipmentIoPage } from './equipment-io-page.component';
import {SharedModule} from "../../services/shared.module";
import {QRCodeModule} from "angularx-qrcode";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EquipmentIoPagePageRoutingModule,
        SharedModule,
        QRCodeModule
    ],
  declarations: [EquipmentIoPage]
})
export class EquipmentIoPagePageModule {
}
