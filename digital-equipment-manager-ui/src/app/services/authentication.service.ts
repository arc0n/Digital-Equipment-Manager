import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {Platform, ToastController} from "@ionic/angular";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState = new BehaviorSubject(false);
  constructor(
    private router: Router,
    private storage: StorageService,
    private platform: Platform,
    public toastController: ToastController
  )  {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  private ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }

  public login() {
    let response = {
      user_id: 'admin',
      user_password: 'admin'
    };
    this.storage.set('USER_INFO', response).then((response) => {
        this.router.navigate(['']);
        this.authState.next(true);
    });
  }

  public logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    })

  }

  public isAuthenticated() {
    return this.authState.value;
  }

}

