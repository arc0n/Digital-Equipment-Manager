import {Component, OnInit} from '@angular/core';
import {mergeMap, take} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {Item, Person} from "../../services/model";
import {forkJoin} from "rxjs";
import {ItemResourceService} from "../../services/api-services/item-resource.service";
import {PersonResourceService} from "../../services/api-services/person-resource.service";
import {ToastController} from "@ionic/angular";
import {BookingResourceService} from "../../services/api-services/booking-resource.service";

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.page.html',
  styleUrls: ['./booking-summary.page.scss'],
})
export class BookingSummaryPage implements OnInit {

  /** @internal */
  person: Person;
  /** @internal */
  item: Item

  constructor(private route: ActivatedRoute,
              private itemSrv: ItemResourceService,
              private personSrv: PersonResourceService,
              private bookingSrv: BookingResourceService,
              private router: Router,
              private toastController: ToastController) {
  }

  ngOnInit() {
    this.route.queryParams.pipe(take(1),
      mergeMap(params => {
        return forkJoin(
          [
            this.itemSrv.getItemByCode(params.itemId),
            this.personSrv.getPersonByCode(params.personId)
          ]
        )
      })
    ).subscribe(async ([item, person]) => {
      this.item = item;
      this.person = person
      if (!item || !person) {
        const toast = await this.toastController.create({
          position: "bottom", color: "danger",
          message: "Verbindung zum Server verloren, bitte Seite neu laden"
        })
        toast.present();
      }
    })
  }


  createBooking() {
    this.bookingSrv.postBooking({item_id: this.item.dynamic_id, person_id: this.person.dynamic_id}).subscribe(console.log)
  }
}
