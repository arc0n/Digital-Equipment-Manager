import {Component, EventEmitter, OnInit, Output, Query, SimpleChanges} from '@angular/core';
import {Item} from "../../services/model";
import {QueryParams} from "../../services/api-services/base-resource.service";
import {ItemResourceService} from "../../services/api-services/item-resource.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  items: Item[];
  filter: QueryParams
  @Output() itemClicked = new EventEmitter<Item>();

  constructor(private itemService: ItemResourceService) { }

  ngOnInit() {
    this.fetchBookings({})
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.filter && !changes.filter.firstChange && this.filter){
      this.fetchBookings(this.filter);
    }
  }

  fetchBookings(filter: QueryParams) {
    this.itemService.getList(filter).subscribe((items) =>{
      this.items = items;
    })
  }

  emitItemClick(item: Item) {
    this.itemClicked.emit(item)
  }
}
