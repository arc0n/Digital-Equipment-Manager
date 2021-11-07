import {ModuleWithProviders, NgModule} from '@angular/core';
import {StorageService} from "./storage.service";
import {IonicStorageModule} from "@ionic/storage-angular";
import {AuthenticationService} from "./authentication.service";
import {QrScanComponent} from "../components/qr-scan/qr-scan.component";
import {QrScanControlComponent} from "../components/qr-scan-control/qr-scan-control.component";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {ItemResourceService} from "./api-services/item-resource.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PersonResourceService} from "./api-services/person-resource.service";
import {DateTimeDisplayComponent} from "../components/date-time-display/date-time-display.component";


@NgModule({
  imports: [IonicStorageModule, IonicModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  declarations: [QrScanComponent, QrScanControlComponent, DateTimeDisplayComponent],
  exports: [
    QrScanComponent,
    QrScanControlComponent,
    DateTimeDisplayComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [StorageService, AuthenticationService, ItemResourceService, PersonResourceService]
    };
  }
}
