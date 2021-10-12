import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipmentAddPagePageRoutingModule } from './equipment-add-page-routing.module';

import { EquipmentAddPagePage } from './equipment-add-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipmentAddPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EquipmentAddPagePage]
})
export class EquipmentAddPagePageModule {}
