import {Component, OnDestroy, OnInit} from '@angular/core';
import {mergeMap} from "rxjs/operators";
import {Subscription} from "rxjs";
import {Item} from "../../services/model";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonStateService} from "../../services/common-state.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit, OnDestroy{
  private subscriptions: Subscription[] = [];

  /** @internal */
  showMobileMenu = true;

  constructor(
    public router: Router,
    public state: CommonStateService,
  ) {

  }

  ngOnInit() {
    this.subscriptions.push(
      this.state.getSplitPaneVisible().subscribe(
        (isVisible) => this.showMobileMenu = !isVisible
      )
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }


}
