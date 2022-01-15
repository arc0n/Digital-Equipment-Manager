import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActionSheetController, ToastController} from "@ionic/angular";
import {CommonStateService} from "../../services/common-state.service";
import {Subscription} from "rxjs";
import {mergeMap} from "rxjs/operators";
import {Item} from "../../services/model";
import {ItemResourceService} from "../../services/api-services/item-resource.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  /** @internal  */
  updateItemForm = new FormGroup(
    {
      itemDescription: new FormControl(''),
      itemSerialnumber: new FormControl('', Validators.required),
    }
  )

  constructor(public router: Router,
              public state: CommonStateService,
              private actionSheetController: ActionSheetController,
              private activeRoute: ActivatedRoute,
              private itemService: ItemResourceService,
              private toastController: ToastController
  ) {  }

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
      if (this.item.status !== 'aktiv') {
        this.presentToast('Achtung - Gerät ist aktuell defekt gemeldet',
          'warning', 3000, "middle");
      }
      else if (this.item.borrowed === true) {
        this.presentToast('Achtung - Gerät ist aktuell ausgeborgt!',
          'warning', 3000, "middle");
      }

      this.updateItemForm.setValue({
        itemName: this.item.model_name,
        itemDescription: this.item.description,
        itemSerialnumber: this.item.serial_number
      });
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

  async presentToast(message: string, color: string, duration: number, position: any) {
    const p = await this.toastController.create({message, color, duration, position})
    await p.present();
  }

  saveAndReturn() {
    this.updateItemForm.markAllAsTouched();
    if (this.updateItemForm.invalid) {
      this.presentToast('Unvollständige Eingaben', 'danger', 2000, 'middle');
      return;
    }
    const rawValues= this.updateItemForm.getRawValue()

    const item: Item = {
      ...this.item,
      ...{description: rawValues.itemDescription,
      serial_number: rawValues.itemSerialnumber}
    }

    this.itemService.put(item,  {}, item.dynamic_id).subscribe(result => {
      if(result) {
        this.updateItemForm.reset()
        this.presentToast('Gerät bearbeitet', 'success', 2000, 'middle');
        this.backButtonClicked();

      } else {
        this.presentToast('Bearbeiten Fehlgeschlagen', 'danger', 3000, 'middle');

      }
    })



  }


}
