import {Component, EventEmitter, OnDestroy, OnInit, Output, Query, SimpleChanges} from '@angular/core';
import {Item} from "../../services/model";
import {QueryParams} from "../../services/api-services/base-resource.service";
import {ItemResourceService} from "../../services/api-services/item-resource.service";
import {CommonStateService} from "../../services/common-state.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit, OnDestroy  {

  /** @internal */
  public showMobileMenu: boolean = true;

  /** @internal */
  private subscription: Subscription[] = [];

  items: Item[];
  filter: QueryParams
  @Output() itemClicked = new EventEmitter<Item>();

  constructor(private itemService: ItemResourceService,
              private state: CommonStateService) { }

  ngOnInit() {
    this.fetchBookings({})

    this.subscription.push(
      this.state.getSplitPaneVisible().subscribe(
        (isVisible) => this.showMobileMenu = !isVisible
      )
    )

  }

  ngOnDestroy() {
    this.subscription.forEach(s => s.unsubscribe());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.filter && !changes.filter.firstChange && this.filter){
      this.fetchBookings(this.filter);
    }
  }

  fetchBookings(filter: QueryParams) {
    this.itemService.getList(filter).subscribe((items) =>{
      this.items = items;
      this.sortItems();
    })
  }

  sortItems() {
    this.items.sort((item1, item2) => {
      return item1.status < item2.status ? -1 : (item1.status === item2.status ? 0 : 1);
    })
    this.items.sort((item1, item2):number => {
      return item1.borrowed === item2.borrowed ? 0 : (item1.borrowed ? 1 : -1);
    })
  }


  emitItemClick(item: Item) {
    this.itemClicked.emit(item)
  }
}
