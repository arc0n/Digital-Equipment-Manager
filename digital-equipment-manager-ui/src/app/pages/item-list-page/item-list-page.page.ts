import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Item} from "../../services/model";
import {CommonStateService} from "../../services/common-state.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-item-list-page',
  templateUrl: './item-list-page.page.html',
  styleUrls: ['./item-list-page.page.scss'],
})
export class ItemListPagePage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  /** @internal */
  public showMobileMenu: boolean = false;


  constructor(public router: Router,
              public state: CommonStateService) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.state.getSplitPaneVisible().subscribe(
        (isVisible) => this.showMobileMenu = !isVisible
      )
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  async itemClicked(event: Item) {
    await this.router.navigate(['equipment'], {queryParams: {id: event.dynamic_id}, replaceUrl: true});
  }


}
