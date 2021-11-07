import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, forkJoin, merge, of, Subject, Subscription} from "rxjs";
import {combineAll, debounceTime, filter, mergeAll, switchMap, tap} from "rxjs/operators";
import {PersonResourceService} from "../../services/api-services/person-resource.service";
import {QrScanComponent} from "../../components/qr-scan/qr-scan.component";
import {ModalController, ToastController} from "@ionic/angular";
import {Person} from "../../services/model";

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.page.html',
  styleUrls: ['./employee-dashboard.page.scss'],
})
export class EmployeeDashboardPage implements OnInit, OnDestroy {

  triggerServerCall$ = new Subject<string>();
  private modal: HTMLIonModalElement;

  constructor(private employeeService: PersonResourceService,
              private toastContrl: ToastController,
              private modalController: ModalController) {
  }

  subscriptions: Subscription[] = [];
  personResults: Person[] = [];

  ngOnInit() {
    this.subscriptions.push(
      this.triggerServerCall$.pipe(
        debounceTime(500),
        tap(()=> this.personResults = []),
        filter((searchValue) => !!searchValue && !!searchValue.trim()),
        switchMap((searchValue) => {
          return forkJoin([
            this.employeeService.getPersonByName(searchValue),
            this.employeeService.getPersonByCode(searchValue)])
        })
      ).subscribe(([byName, byCode]) => {
        console.log("byname",byName)
        console.log("bycode",byCode)
        this.personResults = byName
        if (!!byCode) {
          // TODO by name should be filled into the list
          this.navigateToSummaryPage(byCode)

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
    this.employeeService.getPersonByCode(value).subscribe(async (employee) => {
      await this.modal.dismiss();

      if (!!employee) {
        this.navigateToSummaryPage(employee)
      } else {
        const p = await this.toastContrl.create({color:"danger", duration:2000, message:"" +
            "Element mit diesem Code wurde nicht gefunden",
        })
        p.present()

        // this.modal.present();
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


  personSelected(person: Person) {
    this.navigateToSummaryPage(person);
  }
}
