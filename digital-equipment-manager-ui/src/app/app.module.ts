import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthenticationService } from "./services/authentication.service";
import { IonicStorageModule } from "@ionic/storage-angular";
import {SharedModule} from "./services/shared.module";
import {NegAuthGuardService} from "./auth/neg-auth-guard.service";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MomentModule} from "ngx-moment";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./services/api-services/token.interceptor";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    SharedModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    }),
  ],
  providers: [
    AuthGuardService,
    NegAuthGuardService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
 ],
  bootstrap: [AppComponent],
})
export class AppModule {}
