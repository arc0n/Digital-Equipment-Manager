import {Component,  OnDestroy, OnInit} from '@angular/core';
import {mergeMap, take} from "rxjs/operators";
import {ActivatedRoute,  Router} from "@angular/router";
import {Item, Person} from "../../services/model";
import {forkJoin, of, Subscription} from "rxjs";
import {ItemResourceService} from "../../services/api-services/item-resource.service";
import {PersonResourceService} from "../../services/api-services/person-resource.service";
import {ModalController, ToastController} from "@ionic/angular";
import {BookingResourceService} from "../../services/api-services/booking-resource.service";
import {CommonStateService} from "../../services/common-state.service";
import {QrScanComponent} from "../../components/qr-scan/qr-scan.component";

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.page.html',
  styleUrls: ['./booking-summary.page.scss'],
})
export class BookingSummaryPage implements OnInit, OnDestroy {

  /** @internal */
  person: Person;
  /** @internal */
  showMobileMenu = true;
  /** @internal */
  modal: HTMLIonModalElement

  private subscriptions: Subscription[] = [];
  /** @internal */
  items: Item[] = [];

  isOpenBooking = false;


  constructor(private route: ActivatedRoute,
              private itemSrv: ItemResourceService,
              private personSrv: PersonResourceService,
              private bookingSrv: BookingResourceService,
              private router: Router,
              private state: CommonStateService,
              private toastController: ToastController,
              private modalController: ModalController,
              private itemService: ItemResourceService) {

    this.subscriptions.push(
      this.state.getSplitPaneVisible().subscribe(
        (isVisible) => this.showMobileMenu = !isVisible
      )
    )
  }


  goBack() {
    window.history.back();
  }

  ngOnInit() {
    this.route.queryParams.pipe(take(1),
      mergeMap(params => {
        return forkJoin(
          [
            this.itemSrv.getItemByCode(params.itemId),
            (this.isOpenBooking ? of(null) : this.personSrv.getPersonByCode(params.personId))
          ]
        )
      })
    ).subscribe(async ([item, person]) => {
      if (!item ||item === 'NOT_FOUND' ||person === 'NOT_FOUND') {
        const toast = await this.toastController.create({
          position: "bottom", color: "danger",
          message: "Verbindung zum Server verloren, bitte Seite neu laden"
        })
        toast.present();
      }
      this.items.push(item as Item);
      this.person = person as Person
      this.isOpenBooking = (item as Item).borrowed;
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }


  createBooking() {
    if (this.isOpenBooking) {
      this.bookingSrv.putBooking({
        item_id: this.items?.map(i => i.dynamic_id),
      }).subscribe(val => {
        this.handleBookingResponse(val)
      })
    } else {
      this.bookingSrv.postBooking({
        item_id: this.items?.map(i => i.dynamic_id),
        person_id: this.person.dynamic_id
      }).subscribe(val => {
        this.handleBookingResponse(val)
        }
      )
    }

  }


  async presentModal() {
    this.modal = await this.modalController.create({
      component: QrScanComponent,
      componentProps: {
        "cancelClicked": () => this.modal.dismiss(),
        "qrCodeRead": this.modalResult.bind(this)
      }
    });
    return await this.modal.present();
  }

  modalResult(value: string) {
    this.itemService.getItemByCode(value)

      .subscribe(async (item) => {
      await this.modal.dismiss();

      if (!!item) {
        this.addItemToList(item as Item);

      } else {
        const p = await this.toastController.create({
          color: "danger", duration: 2000, message: "" +
            "Element mit diesem Code wurde nicht gefunden",
        })
        p.present()
        this.modal.dismiss();
      }
    })
  }

  async addItemToList(item: Item) {
    if (this.items.some(i => i.dynamic_id === item.dynamic_id)) {
      const p = await this.toastController.create({
        color: "danger", duration: 4000,
        message: "Das Element existiert bereits in der Liste",
      })
      p.present()
    } else if (item.borrowed !== this.isOpenBooking) {
      const p = await this.toastController.create({
        color: "danger", duration: 6000,
        message: "Das Element ist aktuell nicht" + this.isOpenBooking ? 'Ausgegeben' : 'Verfügbar',
      })
      p.present()
    } else {
      this.items.push(item);

    }
  }

  deleteItemFromList(i: number) {
    this.items.splice(i, 1)
  }


  private async handleBookingResponse(val: any) {
    if (!val || val === 'INVALID_REQUEST' || val === 'UNFINISHED_BOOKING') {
      const p = await this.toastController.create({
        color: "danger", duration: 6000, message: "" +
          "Error Code: " + val,
      })
      await p.present()
    } else {
      const p = await this.toastController.create({
        color: "success", duration: 2000, message: `die ${this.isOpenBooking ? 'Rückgabe' : 'Ausgabe'} wurde gebucht`
      })
      await p.present()
      await this.router.navigate(['/tabs/dashboard'] )
    }
  }
}
