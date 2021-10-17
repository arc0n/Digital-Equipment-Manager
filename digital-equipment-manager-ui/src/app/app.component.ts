import {Component, OnInit} from '@angular/core';
import {CommonStateService} from "./services/common-state.service";
import { ResolveEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {AuthenticationService} from "./services/authentication.service";

const MAIN_PAGE_LINKS: EquipmentRouterLink[] = [
  {title: 'Home', url: '/tabs/dashboard', icon: 'home', secondary: false},
  {title: 'Mitarbeiter anlegen', url: '/ma-add-page', icon: 'person-add', secondary: true},
  {title: 'Gegenstand anlegen', url: '/equipment-add-page', icon: 'duplicate', secondary: true},
  {title: 'Geräteliste', url: '/nux1', icon: 'briefcase', secondary: true}
];

const EQUIPMENT_PAGE_LINKS: EquipmentRouterLink[] = [
  {title: 'Home', url: '/tabs/dashboard', icon: 'home', secondary: false},
  {title: 'Option 1', url: '/nix', icon: 'settings', secondary: true},
  {title: 'Option 2', url: '/nox', icon: 'log-out', secondary: true}
];

export interface EquipmentRouterLink {
  title: string;
  url: string,
  icon: string,
  secondary: boolean

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public appPages: EquipmentRouterLink[] = MAIN_PAGE_LINKS

  constructor(
    private commonStateService: CommonStateService,
    private authService: AuthenticationService,
    private router: Router,
    ) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => (event instanceof ResolveEnd))
    ).subscribe((resolveEndEvent: ResolveEnd) => {
      this.appPages = resolveEndEvent.url.match(/^\/equipment/) ?
        EQUIPMENT_PAGE_LINKS : MAIN_PAGE_LINKS;
    })
  }


  onSplitPaneChange(event: CustomEvent) {
    this.commonStateService.setSplitPaneVisible(!!event?.detail?.visible)
  }

  logoutUser() {
    this.authService.logout().subscribe(()=> {
      this.router.navigate(['/login']);
    });
  }
}
