import {Component, OnInit} from '@angular/core';
import {CommonStateService} from "../../services/common-state.service";
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  // private subscriptions: Subscription[] = [];
  constructor(public commonStateService: CommonStateService) {}

  ngOnInit(): void {
  }



}
