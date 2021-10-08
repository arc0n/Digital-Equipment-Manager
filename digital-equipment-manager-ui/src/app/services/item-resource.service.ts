import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Item} from "./model";

@Injectable({
  providedIn: 'root'
})
export class ItemResourceService {

  constructor() { }

  getItemByCode(code:string): Observable<Item> {
    return of({model: "somestring", id:"someid"});
  }
}
