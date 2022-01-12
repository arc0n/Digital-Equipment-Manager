import {Injectable, OnDestroy} from '@angular/core';
import {from, Observable, of, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {StorageService} from "../storage.service";
import {CommonStateService} from "../common-state.service";

const IP_KEY = 'server_ip';
const PORT_KEY = 'server_port';


export interface QueryParams {
  [key: string]: any
}

@Injectable({
  providedIn: 'root'
})
export abstract class BaseResourceService<T> implements OnDestroy {

  protected baseUrl = '';
  abstract entityUrl: string;
  subscriptions: Subscription[] = [];

  protected constructor(protected http: HttpClient, protected storageSrv: StorageService, protected stateSrv: CommonStateService) {
    this.subscriptions.push(this.stateSrv.getServerConfigObservable().subscribe(({ip, port}) => {
      this.baseUrl = `http://${ip}:${port}`;
    }))
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  getList(params: QueryParams): Observable<T[]> {
    return this.http.get<{ result: T[]}>(this.baseUrl + this.entityUrl, {params: params}).pipe(
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

    return this.http.get<{ result: T | string }>(this.baseUrl + this.entityUrl + `/${id}`, {params: params}).pipe(
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

    return this.http.post<{result: boolean | string | {id: string}}>(this.baseUrl + this.entityUrl, entity, {params: params}).pipe(
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

    return this.http.put<{result: boolean | string}>(this.baseUrl + this.entityUrl, entity, {params: params}).pipe(
      catchError(err => {
        return this.handleError(err);
      }),
      map(resp => {
        return resp?.result
      })
    )
  }

}
