import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ActionSheetController} from "@ionic/angular";
import {CommonStateService} from "../../services/common-state.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-equipment-io-page',
  templateUrl: './equipment-io-page.component.html',
  styleUrls: ['./equipment-io-page.component.scss'],
})
export class EquipmentIoPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public showMobileMenu: boolean = true;

  constructor(public router: Router,
              public state: CommonStateService,
              private actionSheetController: ActionSheetController) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.state.getSplitPaneVisible().subscribe(
        (isVisible) => this.showMobileMenu = !isVisible
      )
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
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


}
