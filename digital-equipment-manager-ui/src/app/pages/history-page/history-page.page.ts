import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Item} from "../../services/model";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonStateService} from "../../services/common-state.service";
import {ActionSheetController, ToastController} from "@ionic/angular";
import {ItemResourceService} from "../../services/api-services/item-resource.service";
import {mergeMap} from "rxjs/operators";
import {BookingResourceService} from "../../services/api-services/booking-resource.service";

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.page.html',
  styleUrls: ['./history-page.page.scss'],
})
export class HistoryPagePage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  /** @internal */
  showMobileMenu = true;

  /** @internal item id used for the hitory list */
 itemId: string;
 historyFilter: { item_id: string };

  constructor(public router: Router,
              public state: CommonStateService,
              private actionSheetController: ActionSheetController,
              private activeRoute: ActivatedRoute,
              private bookingService: BookingResourceService,
              private toastController: ToastController
  ) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.state.getSplitPaneVisible().subscribe(
        (isVisible) => this.showMobileMenu = !isVisible
      )
    )
    this.activeRoute.queryParams.subscribe((params) => {
      this.historyFilter = {item_id: params.itemId}
      this.itemId = params.itemId;
    })
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  };


  backButtonClicked() {
    this.router.navigate(['equipment'], {
      queryParams: {id: this.itemId}
    });
  }

  async presentToast(message: string, color: string, duration: number, position: any) {
    const p = await this.toastController.create({message, color, duration, position})
    await p.present();
  }

}
