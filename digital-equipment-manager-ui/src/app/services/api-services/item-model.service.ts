import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ItemModel} from "../model";
import {BaseResourceService} from "./base-resource.service";

@Injectable()
export class ItemModelResourceService extends BaseResourceService<ItemModel>{

  constructor(protected http: HttpClient) {
    super(http);
    this.baseUrl = this.baseUrl +"/itemmodel";
  }
}
