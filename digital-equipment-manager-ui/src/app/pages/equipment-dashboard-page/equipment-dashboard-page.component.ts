import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {QrScanComponent} from "../../components/qr-scan/qr-scan.component";

@Component({
  selector: 'app-tab1',
  templateUrl: 'equipment-dashboard-page.component.html',
  styleUrls: ['equipment-dashboard-page.component.scss']
})
export class EquipmentDashboardPage {

  constructor(private router: Router,
              private modalController: ModalController) {
  }

  onScanClicked(event: any) {
     this.presentModal();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: QrScanComponent,
      componentProps: {
        "cancelClicked": ()=>modal.dismiss(),
        "qrCodeRead": (value)=>{console.log("test qrRead", value); modal.dismiss()}
      }
    });
    return await modal.present();
  }

  onContinueBtnClick(event: string) {
    this.navigateToEquipmentPage()
  }

  navigateToEquipmentPage() {
    this.router.navigate(['equipment'])
  }

}
