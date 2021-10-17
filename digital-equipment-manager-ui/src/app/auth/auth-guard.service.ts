import { Injectable } from '@angular/core';
import {CanActivate, Router, UrlTree} from "@angular/router";

import {AuthenticationService} from "../services/authentication.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    public authenticationService: AuthenticationService,
    public router: Router,
  ) { }

  canActivate(): Observable<boolean|UrlTree> {
    return this.authenticationService.isAuthenticated().pipe(
      map(isLoggedIn =>{
        if(!isLoggedIn) return this.router.parseUrl('/login');
        return true;
    }));
  }


}
