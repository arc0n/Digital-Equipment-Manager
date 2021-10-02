import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {MenuController} from "@ionic/angular";
import {Router} from "@angular/router";
import {subscribeOn} from "rxjs/operators";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private menu: MenuController,
    private router: Router,
  ) {  }

  ngOnInit() {
  }

  loginUser() {
    this.authService.login().subscribe(()=>{
      this.router.navigate(['../']);
    });
  }
}
