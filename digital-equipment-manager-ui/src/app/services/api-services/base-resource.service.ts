import {Injectable} from '@angular/core';
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

  protected baseUrl = "http://localhost:3000"

  constructor(protected http: HttpClient) {

  }

  getList(params: QueryParams): Observable<T[]> {
    return this.http.get<{ result: T[]}>(this.baseUrl, {params: params}).pipe(
      map(res => res.result as T[]),
      catchError(err => {
        console.log(err);
        // TODO handle error for list
        return of([]);
      })
    )
  }

  getByID(id: string | number, params: QueryParams): Observable<T > {
    if (!id) return of(null)

    return this.http.get<{ result: T | string }>(this.baseUrl + `/${id}`, {params: params}).pipe(
      catchError(err => {
        return this.handleError(err);
      }),
      map(resp => {
        return resp?.result || null
      })
    )
  }


  post(entity: T, params: QueryParams): Observable<boolean | string | {id: string}> {
    if (!entity) return of(null)

    return this.http.post<{result: boolean | string | {id: string}}>(this.baseUrl, entity, {params: params}).pipe(
      catchError(err => {
        return this.handleError(err);
      }),
      map(resp => {
        return resp?.result || null
      })
    )
  }

  private handleError(err) {
    console.log("err in service", err);
    return of(err.error);
  }

  put(entity: T, params: QueryParams): Observable<boolean | string> {
    if (!entity) return of(null)

    return this.http.put<{result: boolean | string}>(this.baseUrl, entity, {params: params}).pipe(
      catchError(err => {
        return this.handleError(err);
      }),
      map(resp => {
        return resp?.result
      })
    )
  }

}
