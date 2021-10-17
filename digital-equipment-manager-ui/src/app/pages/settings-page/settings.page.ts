import {Component, OnDestroy, OnInit} from '@angular/core';
import {mergeMap} from "rxjs/operators";
import {Subscription} from "rxjs";
import {Item} from "../../services/model";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonStateService} from "../../services/common-state.service";
import {ItemResourceService} from "../../services/item-resource.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit, OnDestroy{
  private subscriptions: Subscription[] = [];

  /** @internal */
  showMobileMenu = true;

  /** @internal  */
  item: Item;

  constructor(
    public router: Router,
    public state: CommonStateService,
    public itemService: ItemResourceService,
    public activeRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.subscriptions.push(
      this.state.getSplitPaneVisible().subscribe(
        (isVisible) => this.showMobileMenu = !isVisible
      )
    )
    this.activeRoute.queryParams.pipe(
      mergeMap(params => this.itemService.getItemByCode(params.id))
    ).subscribe(item =>{
      this.item = item;
      console.log("fetched item: ", item)
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onAddItemClicked() {
    this.router.navigate(['/equipment-add-page'])
  }
}
