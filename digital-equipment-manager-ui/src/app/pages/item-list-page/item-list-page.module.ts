import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemListPagePageRoutingModule } from './item-list-page-routing.module';

import { ItemListPagePage } from './item-list-page.page';
import {SharedModule} from "../../services/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ItemListPagePageRoutingModule,
        SharedModule
    ],
  declarations: [ItemListPagePage]
})
export class ItemListPagePageModule {}
