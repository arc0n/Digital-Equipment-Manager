import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private menu: MenuController,
  ) {
    this.menu.enable(false, 'main-menu-id')
  }

  ngOnInit() {
  }

  loginUser() {
    this.authService.login();
    this.menu.enable(true, 'main-menu-id')
  }
}
