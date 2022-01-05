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
  templateUrl: './item-defect.page.html',
  styleUrls: ['./item-defect.page.scss'],
})
export class ItemDefectPage implements OnInit, OnDestroy {
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
        return this.itemService.getItemByCode(params.itemId)
      })
    ).subscribe(async (item) => {
      if (!item || item === 'NOT_FOUND') {
        this.presentToast('Es wurde keine Gerät mit diesem Code gefunden',
          'danger', 2000, "bottom");
        await this.router.navigate(['/tabs/dashboard']);
        return
      }
      this.item = item as Item;
      if(this.item.borrowed === true) {
        this.presentToast('Achtung - Gerät ist aktuell ausgeborgt!',
          'warning', 4000, "middle");
      }
      //console.log('item: '+this.item.borrowed);
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
    //TODO - deactivate Item
  }

  async presentToast(message: string, color: string, duration: number, position: any) {
    const p = await this.toastController.create({message, color, duration, position})
    await p.present();
  }
}
