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
    {title: 'Tab 1', url: '/tabs/tab1', icon: 'mail'},
    {title: 'Tab 2', url: '/tabs/tab2', icon: 'paper-plane'},
    {title: 'Tab 3', url: '/tabs/tab3', icon: 'heart'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  onSplitPaneChange(event: CustomEvent) {
    this.commonStateService.setSplitPaneVisible(!!event?.detail?.visible)
  }
}
