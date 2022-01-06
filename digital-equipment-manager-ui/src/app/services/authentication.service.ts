import { Injectable } from '@angular/core';
import {BehaviorSubject, from, Observable, of} from "rxjs";
import {MenuController, Platform} from "@ionic/angular";
import {StorageService} from "./storage.service";
import {catchError, map, mergeMap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthenticationService {
  authState = new BehaviorSubject(false);
  private baseLink= "http://localhost:3000/login"
  constructor(
    private storage: StorageService,
    private platform: Platform,
    public menu: MenuController,
    private http: HttpClient
  )  {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  private ifLoggedIn(): Promise<void> {
    return this.storage.get('JWT').then((response) => {
      if (response) {
        this.authState.next(true);
      } else {
        this.menu.enable(false, 'main-menu-id');
      }
    });
  }

  public login(email: string, password: string): Observable<boolean> {
    return this.http.post<{jwt: string, refreshToken: string, email: string}>(
      this.baseLink,  {     email,  password}
    ).pipe(
      catchError((err) => {
        if(err.code === 403) {
         // do sth, login wrong
        }
        if(err.code === 404) {
          // do sth, no connection
        }
        console.log("login failed", err)
        return of(null)
      }),
      map((response)=>{
        if(!response) {
          return false
        } else {
          this.storage.set('JWT', response.jwt)
          this.storage.set('REFRESH_TOKEN', response.refreshToken)
          // is logged in
          this.authState.next(true);
          this.menu.enable(true, 'main-menu-id');
          return true;
        }
      })
    )
  }

  public logout(): Observable<boolean> {
    return from(
      this.storage.remove('JWT').then(() => {this.storage.remove('REFRESH_TOKEN')
      this.authState.next(false);
      this.menu.enable(false,'main-menu-id');
    })).pipe(
      mergeMap(()=>this.isAuthenticated()));
  }

  public isAuthenticated() : Observable<boolean> {
    return this.authState.asObservable();
  }

}

