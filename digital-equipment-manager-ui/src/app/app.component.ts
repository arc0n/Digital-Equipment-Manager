import {Component} from '@angular/core';
import {CommonStateService} from "./services/common-state.service";
import {AuthenticationService} from "./services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private commonStateService: CommonStateService,
    private authService: AuthenticationService,
    private router: Router,
    ) {
  }

  public appPages = [
    {title: 'Ausrüstung', url: '/tabs/equipment', icon: 'pricetags'},
    {title: 'Einstellungen', url: '/tabs/settings', icon: 'settings'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  onSplitPaneChange(event: CustomEvent) {
    this.commonStateService.setSplitPaneVisible(!!event?.detail?.visible)
  }

  logoutUser() {
    this.authService.logout().subscribe(()=> {
      this.router.navigate(['/login']);
    });
  }
}
