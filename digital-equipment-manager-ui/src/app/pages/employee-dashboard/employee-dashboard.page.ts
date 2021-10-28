import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest,  Subject, Subscription} from "rxjs";
import { debounceTime,  switchMap} from "rxjs/operators";
import {PersonResourceService} from "../../services/api-services/person-resource.service";
import {QrScanComponent} from "../../components/qr-scan/qr-scan.component";
import {ModalController} from "@ionic/angular";
import {Person} from "../../services/model";

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.page.html',
  styleUrls: ['./employee-dashboard.page.scss'],
})
export class EmployeeDashboardPage implements OnInit, OnDestroy {

  triggerServerCall$ = new Subject<string>();
  private modal: HTMLIonModalElement;

  constructor(private employeeService: PersonResourceService, private modalController: ModalController) {
  }

  subscriptions: Subscription[] = [];

  ngOnInit() {
    this.subscriptions.push(
      this.triggerServerCall$.pipe(
        debounceTime(500),
        switchMap((searchValue) => {
          return combineLatest([
            this.employeeService.getPersonByName(searchValue),
            this.employeeService.getPersonByCode(searchValue)])
          // TODO also try to get code
        })
      ).subscribe(([byName, byCode]) => {
        if (!!byName || !!byCode) {
          this.navigateToSummaryPage(byCode || byCode)
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
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
    this.employeeService.getPersonByCode(value).subscribe((employee) => {
      if (!!employee) {
        this.modal.dismiss();
        this.navigateToSummaryPage(employee)
      }
    })
  }

  navigateToSummaryPage(employee: Person): void {
    // TODO implement
    console.log("summary page not yet implemented", employee)
  }

  onValueChange(value: string) {
    this.triggerServerCall$.next(value)
  }


}
