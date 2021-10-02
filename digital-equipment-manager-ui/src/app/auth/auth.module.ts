import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import {IonicStorageModule} from "@ionic/storage-angular";
import {AuthGuardService} from "./auth-guard.service";
import {NegAuthGuardService} from "./neg-auth-guard.service";
import {SharedModule} from "../services/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    IonicStorageModule,
    SharedModule
  ],
  declarations: [AuthPage],
  providers: [
    NegAuthGuardService,
    AuthGuardService
  ]
})
export class AuthPageModule {}
