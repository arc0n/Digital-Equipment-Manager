import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthenticationService } from "./services/authentication.service";
import { IonicStorageModule } from "@ionic/storage-angular";
import {SharedModule} from "./services/shared.module";
import {NegAuthGuardService} from "./auth/neg-auth-guard.service";


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [
    AuthGuardService,
    NegAuthGuardService,
    AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
