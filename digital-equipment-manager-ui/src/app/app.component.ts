import {Component, OnInit} from '@angular/core';
import {CommonStateService} from "./services/common-state.service";
import {DefaultUrlSerializer, ResolveEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {AuthenticationService} from "./services/authentication.service";
import * as _ from 'lodash'
import {BaseResourceService} from "./services/api-services/base-resource.service";


const MAIN_PAGE_LINKS: EquipmentRouterLink[] = [
  {title: 'Home', url: '/tabs/dashboard', icon: 'home', secondary: false, disabled: false},
  {title: 'Mitarbeiter anlegen', url: '/employee-add-page', icon: 'person-add', secondary: false, disabled: false},
  {title: 'Gegenstand anlegen', url: '/equipment-add-page', icon: 'duplicate', secondary: false, disabled: false},
  {title: 'Geräteliste', url: '/item-list', icon: 'briefcase', secondary: false, disabled: false},

];

const EQUIPMENT_PAGE_LINKS_DEFAULT: EquipmentRouterLink[] = [
  {title: 'Zurück zu Home', url: '/tabs/dashboard', icon: 'home', secondary: false,  disabled: false},
  {title: 'Gerät', url: '/equipment', icon: 'settings', secondary: true, disabled: true}, // the id needs to be added
  {title: 'Mitarbeitter verknüpfen', url: '/employee-dashboard', icon: 'log-out', secondary: true,  disabled: true}, // the id needs to be added
  {title: 'Übersicht', url: '/booking-summary', icon: 'log-out', secondary: true,  disabled: true}
];


export interface EquipmentRouterLink {
  title: string;
  url: string,
  icon: string,
  secondary: boolean,
  disabled: boolean,
  params?: any

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public sidebarRoutes: EquipmentRouterLink[] = MAIN_PAGE_LINKS
  public mytime: moment.MomentInput;
  mydate: moment.MomentInput;
  public urlParser = new DefaultUrlSerializer();


  private currentActiveEquipmentRoutes: EquipmentRouterLink[] = _.clone(EQUIPMENT_PAGE_LINKS_DEFAULT);

  constructor(
    private commonStateService: CommonStateService,
    private authService: AuthenticationService,
    private router: Router,
    private baseResSrv: BaseResourceService<any>) {
  }

  ngOnInit() {

    this.baseResSrv.getStoredConnectionData();

    this.router.events.pipe(
      filter(event => (event instanceof ResolveEnd))
    ).subscribe((resolveEndEvent: ResolveEnd) => {
      const index = resolveEndEvent.url.match(/^\/equipment\?.*id/) ? 1 :
        resolveEndEvent.url.match(/^\/employee-dashboard.itemId/) ? 2 :
          resolveEndEvent.url.match(/^\/booking-summary/) ? 3
          : 0
      const parsedUrl = this.urlParser.parse(resolveEndEvent.state.url);
      const segments = parsedUrl.root.children.primary.segments.map(seg => seg.path);

      if((parsedUrl.queryParams?.id || parsedUrl.queryParams?.itemId)
        !== this.currentActiveEquipmentRoutes[1]?.params?.id)      {
        this.currentActiveEquipmentRoutes = _.clone(EQUIPMENT_PAGE_LINKS_DEFAULT);
        this.sidebarRoutes = _.clone(EQUIPMENT_PAGE_LINKS_DEFAULT);
      }
      if(index) { // 0 is falsy
        this.currentActiveEquipmentRoutes[index] =
          {...this.currentActiveEquipmentRoutes[index], url: segments.join(''), params: parsedUrl.queryParams, disabled: false}
        this.sidebarRoutes = this.currentActiveEquipmentRoutes
      } else {
        this.sidebarRoutes =  _.clone(MAIN_PAGE_LINKS)
        this.currentActiveEquipmentRoutes = _.clone(EQUIPMENT_PAGE_LINKS_DEFAULT);
      }
    })
  }


  onSplitPaneChange(event: any) {
    this.commonStateService.setSplitPaneVisible(!!event?.detail?.visible)
  }

  logoutUser() {
    this.authService.logout().subscribe(()=> {
      this.router.navigate(['/login']);
    });
  }

}
