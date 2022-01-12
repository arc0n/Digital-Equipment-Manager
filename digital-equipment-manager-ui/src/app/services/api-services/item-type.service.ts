import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ItemType} from "../model";
import {BaseResourceService} from "./base-resource.service";
import {StorageService} from "../storage.service";
import {CommonStateService} from "../common-state.service";

@Injectable()
export class ItemTypeResourceService extends BaseResourceService<ItemType>{
  entityUrl = "/itemtype";

  constructor(protected http: HttpClient, protected storageSrv: StorageService, stateSrv: CommonStateService) {
    super(http, storageSrv, stateSrv);
  }
}
