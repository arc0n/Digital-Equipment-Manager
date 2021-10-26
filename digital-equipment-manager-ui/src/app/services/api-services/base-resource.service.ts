import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";

export interface QueryParams {
  [key: string]: any
}
@Injectable({
  providedIn: 'root'
})
export class BaseResourceService<T> {

  protected baseUrl= "http://localhost:3000"
  constructor(protected http: HttpClient){

  }

  getList(params: QueryParams): Observable<T[]> {
    return this.http.get<T>(this.baseUrl, params).pipe( // todo does not work, not use as querypram
      catchError(err => {
        console.log(err);
        // TODO handle error
        return of(null);
      })
    )
  }

  getByID(id: string | number, params: QueryParams): Observable<T> {
    if(!id) return of(null)

    return this.http.get<T>(this.baseUrl + `/${id}`, params).pipe( // todo does not work, not use as querypram
      catchError(err => {
        console.log("err in service", err);
        // TODO handle error
        return of(null);
      }),
      map(resp => {
        return resp.result as T
      })
    )
  }

}
