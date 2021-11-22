import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Item} from "../../services/model";

@Component({
  selector: 'app-item-list-page',
  templateUrl: './item-list-page.page.html',
  styleUrls: ['./item-list-page.page.scss'],
})
export class ItemListPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  itemClicked(event: Item) {
    this.router.navigate(['equipment'], {queryParams: {id: event.dynamic_id}});
  }
}
