import {CanActivate, Router, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class NegAuthGuardService implements CanActivate {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate(): Observable<boolean|UrlTree> {
    return this.authenticationService.isAuthenticated().pipe(
      map(isLoggedIn =>{
        if(isLoggedIn) return this.router.parseUrl('/');
        return true;
      }));

  }
}
