import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Item} from "../model";
import {BaseResourceService, QueryParams} from "./base-resource.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {StorageService} from "../storage.service";
import {CommonStateService} from "../common-state.service";

@Injectable()
export class ItemResourceService extends BaseResourceService<Item>{

  entityUrl = '/item';

  constructor(protected http: HttpClient, protected storageSrv: StorageService, stateSrv: CommonStateService) {
    super(http, storageSrv, stateSrv);
  }

  getItemByCode(code:string): Observable<Item | string> {
    return this.getByID(code,{});
  }
  getAllItems(filter: QueryParams): Observable<Item[]> {
    return this.getList(filter);
  }
  postItem(item: Item): Observable<string>{
    return this.post(item, {}).pipe(
      map(res => {
        if ((res as { id: string })?.id) {
          return (res as { id: string })?.id
        }
        return res as string
      }))
  }
}
