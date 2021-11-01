import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActionSheetController, ToastController} from "@ionic/angular";
import {CommonStateService} from "../../services/common-state.service";
import {Subscription} from "rxjs";
import {mergeMap} from "rxjs/operators";
import {Item} from "../../services/model";
import {ItemResourceService} from "../../services/api-services/item-resource.service";

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
        console.log(params)
        return this.itemService.getItemByCode(params.id)
      })
    ).subscribe(async (item) =>{
      if(!item) {
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
      this.item = item;
      console.log("fetched item: ", item)
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
    this.presentActionSheet(); // TODO do not present on desktop
  }


  ioButtonClicked() {
    this.router.navigate(['/employee-dashboard'])
  }

  backButtonClicked() {
    this.router.navigate(['/'])
  }

  getStatusColor(status: string) {
    console.log(status);
    if(!status) {return '#3a7be0';}
    if(status === 'aktiv') {return 'var(--ion-color-success)';}
    else {return 'var(--ion-color-danger)';}
  }
}
