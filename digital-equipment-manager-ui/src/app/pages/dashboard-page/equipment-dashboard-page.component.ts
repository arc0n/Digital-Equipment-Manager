import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ModalController, ToastController} from "@ionic/angular";
import {QrScanComponent} from "../../components/qr-scan/qr-scan.component";
import {ItemResourceService} from "../../services/api-services/item-resource.service";
import {Booking, Item} from "../../services/model";
import {Subscription} from "rxjs";
import {CommonStateService} from "../../services/common-state.service";

@Component({
  selector: 'equipment-dashboard',
  templateUrl: 'equipment-dashboard-page.component.html',
  styleUrls: ['equipment-dashboard-page.component.scss']
})
export class EquipmentDashboardPage implements OnInit, OnDestroy{

  private modal: HTMLIonModalElement;

  private subscriptions: Subscription[] = []
  /** @internal */
  showMobileMenu = false;

  constructor(private router: Router,
              private modalController: ModalController,
              public itemService: ItemResourceService,
              private toastController: ToastController,
              private state: CommonStateService) {
  }

  onScanClicked(event: any) {
    this.presentModal();
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
    this.itemService.getItemByCode(value).subscribe(async (item) => {
      await this.modal.dismiss();

      if(!!item && item !== 'NOT_FOUND'){
      this.navigateToEquipmentPage(item as Item);

      } else{
        const p = await this.toastController.create({color:"danger", duration:2000, message:"" +
            "Element mit diesem Code wurde nicht gefunden",
        })
        p.present()
      }
    })
  }

  onContinueBtnClick(inputValue: string) {
    if(!inputValue) return;
    return this.itemService.getItemByCode(inputValue).subscribe(async(item) => {
      if(!item || item === 'NOT_FOUND') {
        const toast = await this.toastController.create({
          position: "bottom",
          duration: 2000,
          message: "Es wurde keine Gerät mit diesem Code gefunden",
          color: "danger"
        })
        toast.present();
        return
      }
      this.navigateToEquipmentPage(item as Item);
    })
  }

  navigateToEquipmentPage(item: Item) {
    this.router.navigate(['equipment'], {queryParams: {id: item.dynamic_id}});
  }


  bookingClicked(event: Booking) {
    this.navigateToEquipmentPage(event.item)
  }
}
