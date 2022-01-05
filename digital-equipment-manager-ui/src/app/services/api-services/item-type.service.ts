import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ItemType} from "../model";
import {BaseResourceService} from "./base-resource.service";

@Injectable()
export class ItemTypeResourceService extends BaseResourceService<ItemType>{

  constructor(protected http: HttpClient) {
    super(http);
    this.baseUrl = this.baseUrl +"/itemtype";
  }
}
