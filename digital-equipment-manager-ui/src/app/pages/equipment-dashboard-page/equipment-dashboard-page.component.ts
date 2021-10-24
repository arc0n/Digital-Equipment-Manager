import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {QrScanComponent} from "../../components/qr-scan/qr-scan.component";
import {ItemResourceService} from "../../services/item-resource.service";
import {Item} from "../../services/model";
import {Observable} from "rxjs";

@Component({
  selector: 'equipment-dashboard',
  templateUrl: 'equipment-dashboard-page.component.html',
  styleUrls: ['equipment-dashboard-page.component.scss']
})
export class EquipmentDashboardPage {

  private modal: HTMLIonModalElement;

  constructor(private router: Router,
              private modalController: ModalController,
              private itemService: ItemResourceService) {
  }

  onScanClicked(event: any) {
    this.presentModal();
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

    console.log("Modal result: ", value)
    this.getItemByCode(value).subscribe((item) => {
      this.modal.dismiss();
      this.navigateToEquipmentPage(item);
    })
  }

  onContinueBtnClick(inputValue: string) {
    this.getItemByCode(inputValue).subscribe((item) => {
      this.navigateToEquipmentPage(item);
    })
  }

  navigateToEquipmentPage(item: Item) {
    this.router.navigate(['equipment'], {queryParams: {id: item.id}});
  }

  getItemByCode(value: string): Observable<Item> {
    return this.itemService.getItemByCode(value);
  }

}