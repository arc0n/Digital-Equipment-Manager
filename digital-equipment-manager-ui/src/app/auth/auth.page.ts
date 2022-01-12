import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {MenuController, ToastController} from "@ionic/angular";
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
    private toastCtl: ToastController
  ) {  }

  ngOnInit() {
  }

  loginUser(email: string | number, password: string | number) {
    if(!email || !password) {
      this.presentToast("Unvollständige Eingabe", "danger" )
      return

    }
    this.authService.login(email+'', password+'').subscribe((result)=>{
      if(!!result) {
      this.router.navigate(['../']);
      } else{
        this.presentToast("Login fehlgeschlagen", "danger" )
      }
    });
  }

  async presentToast(message: string, color: string) {
    const p = await this.toastCtl.create({message, color, duration: 3000})
    await p.present();
  }

}
