import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'equipment-dashboard-page.component.html',
  styleUrls: ['equipment-dashboard-page.component.scss']
})
export class EquipmentDashboardPage {

  constructor(private router: Router) {
  }

  onScanClicked(event: any) {
    this.navigateToEquipmentPage()
  }

  onContinueBtnClick(event: string) {
    this.navigateToEquipmentPage()
  }

  navigateToEquipmentPage() {
    this.router.navigate(['equipment'])
  }

}
