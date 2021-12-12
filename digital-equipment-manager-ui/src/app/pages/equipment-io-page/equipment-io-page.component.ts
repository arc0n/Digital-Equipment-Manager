import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActionSheetController, ToastController} from "@ionic/angular";
import {CommonStateService} from "../../services/common-state.service";
import {Observable, of, Subscription} from "rxjs";
import {mergeMap} from "rxjs/operators";
import {Booking, Item} from "../../services/model";
import {ItemResourceService} from "../../services/api-services/item-resource.service";
import {BookingResourceService} from "../../services/api-services/booking-resource.service";

@Component({
  selector: 'app-equipment-io-page',
  templateUrl: './equipment-io-page.component.html',
  styleUrls: ['./equipment-io-page.component.scss'],
})
export class EquipmentIoPage implements OnInit, OnDestroy {
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
              private toastController: ToastController,
              private bookingService: BookingResourceService
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
        return this.itemService.getItemByCode(params.id)
      })
    ).subscribe(async (item) =>{
      if(!item || item === 'NOT_FOUND') {
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
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'QR Code generieren',
        icon: 'share',
        handler: () => {
          console.log('generate QR clicked');
        }
      },
        {
          text: 'Dekommisionieren',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Decomission clicked');
          }
        },
        {
        text: 'Historie anzeigen',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('history clicked');
        }
      }, {
        text: 'Defekte anzeigen',
        icon: 'heart',
        handler: () => {
          console.log('show defect clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const {role} = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  onMenuClicked() {
    this.presentActionSheet();
  }


  navigateToBookAndReturn() {
    let obs: Observable<Booking[]> = of([null]);
    if(this.item.borrowed){
      obs = this.bookingService.getBookingsByItem(this.item.dynamic_id, {borrowed: true})
    }
    obs.subscribe((booking) => {
      let openBooking= booking[0];
      this.item.borrowed ?
        this.router.navigate(['booking-summary'], {
          queryParams: {itemId: this.item.dynamic_id, personId: openBooking?.person?.dynamic_id, isOpenBooking: !!this.item.borrowed}}) :
        this.router.navigate(['/employee-dashboard'], {
          queryParams: {itemId: this.item.dynamic_id, isOpenBooking: !!this.item.borrowed}})
    })


  }

  backButtonClicked() {
    this.router.navigate(['/'])
  }

  getStatusColor(status: string, isBorrowed: boolean) {
    if(!status) {return '#3a7be0';}
    if(isBorrowed) {
      return 'yellow'
    }
    if(status === 'aktiv') {return 'var(--ion-color-success)';}
    else {return 'var(--ion-color-danger)';}
  }

  navigateToUpdateItem() {
    this.router.navigate(['item-update'], {
      queryParams: {itemID: this.item.dynamic_id}, replaceUrl: true,
    })
  }
}
