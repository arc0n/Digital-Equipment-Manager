import { Injectable } from '@angular/core';
import {BehaviorSubject, from, Observable} from "rxjs";
import {MenuController, Platform} from "@ionic/angular";
import {StorageService} from "./storage.service";
import {mergeMap} from "rxjs/operators";

@Injectable()
export class AuthenticationService {
  authState = new BehaviorSubject(false);
  constructor(
    private storage: StorageService,
    private platform: Platform,
    public menu: MenuController,
  )  {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  private ifLoggedIn(): Promise<void> {
    return this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }

  public login(): Observable<boolean> {
    let response = {
      user_id: 'admin',
      user_password: 'admin'
    };
    return from(this.storage.set('USER_INFO', response).then((response) => {
        this.authState.next(true);
        this.menu.enable(true, 'main-menu-id');
    })).pipe(
      mergeMap(()=>
      this.isAuthenticated()
    ));
  }

  public logout(): Observable<boolean> {
    return from(
      this.storage.remove('USER_INFO').then(() => {
      this.authState.next(false);
      this.menu.enable(false,'main-menu-id');
    })).pipe(
      mergeMap(()=>this.isAuthenticated()));
  }

  public isAuthenticated() : Observable<boolean> {
    return this.authState.asObservable();
  }

}

