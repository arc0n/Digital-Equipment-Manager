import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Item, Person} from "../model";
import {BaseResourceService, QueryParams} from "./base-resource.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ItemResourceService extends BaseResourceService<Item>{

  constructor(protected http: HttpClient) {
    super(http);
    this.baseUrl = this.baseUrl +"/item";
  }

  getItemByCode(code:string): Observable<Item> {
    return this.getByID(code,{});
  }
  getAllItems(filter: QueryParams): Observable<Item[]> {
    return this.getList(filter);
  }
  postItem(item: Item): Observable<Item>{
    return this.post(item, {})
  }
}
