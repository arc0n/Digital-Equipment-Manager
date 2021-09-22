import {Component} from '@angular/core';
import {CommonStateService} from "./services/common-state.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private commonStateService: CommonStateService) {
  }

  public appPages = [
    {title: 'Ausrüstung', url: '/tabs/equipment', icon: 'pricetags'},
    {title: 'Einstellungen', url: '/tabs/settings', icon: 'settings'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  onSplitPaneChange(event: CustomEvent) {
    this.commonStateService.setSplitPaneVisible(!!event?.detail?.visible)
  }
}
