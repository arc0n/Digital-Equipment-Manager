import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectionPagePageRoutingModule } from './connection-page-routing.module';

import { ConnectionPagePage } from './connection-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectionPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConnectionPagePage]
})
export class ConnectionPagePageModule {}
