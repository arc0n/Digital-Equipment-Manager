import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActionSheetController, ToastController} from "@ionic/angular";
import {CommonStateService} from "../../services/common-state.service";
import {Subscription} from "rxjs";
import {mergeMap} from "rxjs/operators";
import {Item} from "../../services/model";
import {ItemResourceService} from "../../services/api-services/item-resource.service";

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.page.html',
  styleUrls: ['./item-update.page.scss'],
})
export class ItemUpdatePage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  /** @internal */
  showMobileMenu = true;

  /** @internal  */
  item: Item;

  constructor(public router: Router,
              public state: CommonStateService,
              private actionSheetController: ActionSheetController,
              private activeRoute: ActivatedRoute,
              private itemService: ItemResourceService,
              private toastController: ToastController
  ) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.state.getSplitPaneVisible().subscribe(
        (isVisible) => this.showMobileMenu = !isVisible
      )
    )
    this.activeRoute.queryParams.pipe(
      mergeMap(params => {
        return this.itemService.getItemByCode(params.itemID)
      })
    ).subscribe(async (item) => {
      if (!item || item === 'NOT_FOUND') {
        const toast = await this.toastController.create({
          position: "bottom",
          duration: 2000,
          message: "Es wurde keine Gerät mit diesem Code gefunden",
          color: "danger"
        })
        await this.router.navigate(['/tabs/dashboard']);
        toast.present();
        return
      }
      this.item = item as Item;
      if(this.item.borrowed === true) {
        const toast = await this.toastController.create({
          position: "middle",
          duration: 4000,
          message: "Achtung - Gerät ist aktuell ausgeborgt!",
          color: "warning"
        })
        toast.present();
      }
      console.log('item: '+this.item.borrowed);
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  };

  backButtonClicked() {
    this.router.navigate(['equipment'], {
      queryParams: {id: this.item.dynamic_id}
    });
  }

  decommissionAndReturn() {
    //TODO - decommission item
  }

  deactivateAndReturn() {
    //TODO - deactivate item
  }
}
