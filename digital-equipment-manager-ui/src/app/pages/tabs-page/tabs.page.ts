import {Component, OnInit} from '@angular/core';
import {CommonStateService} from "../../services/common-state.service";
import {Subject, Subscription} from "rxjs";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  // private subscriptions: Subscription[] = [];
  constructor(
    public commonStateService: CommonStateService,
    public authService: AuthenticationService,
    public router: Router) {}

  ngOnInit(): void {
  }

  logoutUser(): void {
    this.authService.logout().subscribe(() =>{
      this.router.navigate(['/login']);
    });
  }



}
