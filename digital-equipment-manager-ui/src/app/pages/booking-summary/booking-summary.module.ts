import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingSummaryPageRoutingModule } from './booking-summary-routing.module';

import { BookingSummaryPage } from './booking-summary.page';
import {SharedModule} from "../../services/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BookingSummaryPageRoutingModule,
        SharedModule
    ],
  declarations: [BookingSummaryPage]
})
export class BookingSummaryPageModule {}
