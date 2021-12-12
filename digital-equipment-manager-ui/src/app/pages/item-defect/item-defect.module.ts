import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDefectPageRoutingModule } from './item-defect-routing.module';

import { ItemDefectPage } from './item-defect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDefectPageRoutingModule
  ],
  declarations: [ItemDefectPage]
})
export class ItemDefectPageModule {}
