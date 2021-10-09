import {ModuleWithProviders, NgModule} from '@angular/core';
import {StorageService} from "./storage.service";
import {IonicStorageModule} from "@ionic/storage-angular";
import {AuthenticationService} from "./authentication.service";


@NgModule({
  imports: [IonicStorageModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [StorageService, AuthenticationService]
    };
  }
}
