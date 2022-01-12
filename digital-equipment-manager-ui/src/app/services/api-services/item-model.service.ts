import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ItemModel} from "../model";
import {BaseResourceService} from "./base-resource.service";
import {StorageService} from "../storage.service";
import {CommonStateService} from "../common-state.service";

@Injectable()
export class ItemModelResourceService extends BaseResourceService<ItemModel>{
  entityUrl = "/itemmodel";

  constructor(protected http: HttpClient, protected storageSrv: StorageService, stateSrv: CommonStateService) {
    super(http, storageSrv, stateSrv);
  }
}
