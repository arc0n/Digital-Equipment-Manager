import {Component, OnInit} from '@angular/core';
import {CommonStateService} from "./services/common-state.service";
import {ActivatedRoute, ResolveEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {EquipmentIoPage} from "./pages/equipment-io-page/equipment-io-page.component";

const MAIN_PAGE_LINKS: EquipmentRouterLink[] = [
  {title: 'Home', url: '/tabs/dashboard', icon: 'pricetags', secondary: false},
  {title: 'Einstellung 1', url: '/tabs/settings', icon: 'log-out', secondary: true},
  {title: 'Einstellung 2', url: '/tabs/settings', icon: 'settings', secondary: true}
];

const EQUIPMENT_PAGE_LINKS: EquipmentRouterLink[] = [
  {title: 'Home', url: '/tabs/dashboard', icon: 'pricetags', secondary: false},
  {title: 'Option 1', url: '/nix', icon: 'log-out', secondary: true},
  {title: 'Option 2', url: '/nox', icon: 'settings', secondary: true}
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

  constructor(private commonStateService: CommonStateService, private router: Router) {
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
}
