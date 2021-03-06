import {Component, OnDestroy, OnInit} from '@angular/core';
import { forkJoin, Subject, Subscription} from "rxjs";
import { debounceTime, filter, switchMap, take, tap} from "rxjs/operators";
import {PersonResourceService} from "../../services/api-services/person-resource.service";
import {QrScanComponent} from "../../components/qr-scan/qr-scan.component";
import {ModalController, ToastController} from "@ionic/angular";
import {Person} from "../../services/model";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonStateService} from "../../services/common-state.service";

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.page.html',
  styleUrls: ['./employee-dashboard.page.scss'],
})
export class EmployeeDashboardPage implements OnInit, OnDestroy {

  /** @internal */
  showMobileMenu = true;

  triggerServerCall$ = new Subject<string>();
  private modal: HTMLIonModalElement;
  resetControls = new Subject<void>();

  constructor(private employeeService: PersonResourceService,
              private toastContrl: ToastController,
              private modalController: ModalController,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private state: CommonStateService) {
  }

  subscriptions: Subscription[] = [];
  personResults: Person[] = [];

  ngOnInit() {
    this.subscriptions.push(
      this.state.getSplitPaneVisible().subscribe(
        (isVisible) => this.showMobileMenu = !isVisible
      )
    )

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
      ).subscribe(([personByNAme, personByCode]) => {
        this.personResults = personByNAme
        if (!!personByCode && personByCode !== 'NOT_FOUND') {
          this.navigateToSummaryPage(personByCode as Person);
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
    this.employeeService.getPersonByCode(value).subscribe(async (employee) => {
      await this.modal.dismiss();

      if (!!employee && employee !== 'NOT_FOUND') {
        this.navigateToSummaryPage(employee as Person);
      } else {
        const p = await this.toastContrl.create({color:"danger", duration:2000, message:"" +
            "Element mit diesem Code wurde nicht gefunden",
        });
        p.present();

        // this.modal.present();
      }
    })
  }

  navigateToSummaryPage(employee: Person): void {
    this.personResults = []
    this.resetControls.next();
    this.activatedRoute.queryParams.pipe(take(1)).subscribe(params =>{
      this.router.navigate(['booking-summary'], {queryParams:{
          isOpenBooking: params.isOpenBooking,
          personId: employee.dynamic_id,
          itemId: params.itemId
        }});
    })
  }

  onValueChange(value: string) {
    this.triggerServerCall$.next(value)
  }


  personSelected(person: Person) {
    this.navigateToSummaryPage(person);
  }

  goBack() {
    window.history.back();
  }
}
