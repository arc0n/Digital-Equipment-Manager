import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActionSheetController} from "@ionic/angular";
import {CommonStateService} from "../../services/common-state.service";
import {Subscription} from "rxjs";
import {mergeMap, switchMap} from "rxjs/operators";
import {ItemResourceService} from "../../services/item-resource.service";
import {Item} from "../../services/model";

@Component({
  selector: 'app-equipment-io-page',
  templateUrl: './equipment-io-page.component.html',
  styleUrls: ['./equipment-io-page.component.scss'],
})
export class EquipmentIoPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public showMobileMenu: boolean = true;

  /** @internal  */
  item: Item;

  constructor(public router: Router,
              public state: CommonStateService,
              private actionSheetController: ActionSheetController,
              private activeRoute: ActivatedRoute,
              private itemService: ItemResourceService
              ) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.state.getSplitPaneVisible().subscribe(
        (isVisible) => this.showMobileMenu = !isVisible
      )
    )
    this.activeRoute.queryParams.pipe(
      mergeMap(params => this.itemService.getItemByCode(params.id))
    ).subscribe(item =>{
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
          console.log('Share clicked');
        }
      },
        {
          text: 'Dekommisionieren',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
        text: 'Historie anzeigen',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Defekte anzeigen',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
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
}
