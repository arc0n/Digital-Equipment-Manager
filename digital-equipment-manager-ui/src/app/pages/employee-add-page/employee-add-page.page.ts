import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CommonStateService} from "../../services/common-state.service";
import {Person} from "../../services/model";
import {PersonResourceService} from "../../services/api-services/person-resource.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-employee-add-page',
  templateUrl: './employee-add-page.page.html',
  styleUrls: ['./employee-add-page.page.scss'],
})
export class EmployeeAddPagePage implements OnInit, OnDestroy {
  private subscription: Subscription[] = [];

  /** @internal */
  showMobileMenu = true;

  /** @internal */
  addEmployeeForm = new FormGroup(
    {
            personFirstname: new FormControl('',Validators.required),
            personLastname: new FormControl('', Validators.required),
            personBirthdate: new FormControl('', Validators.required),
            personSex: new FormControl('', Validators.required),
            addressStreet: new FormControl('', Validators.required),
            addressZip: new FormControl('', Validators.required ),
            addressCity: new FormControl('',Validators.required),
          }
    )

  constructor(public router: Router,
              public state: CommonStateService,
              private personService: PersonResourceService,
              private toastController: ToastController
  ) { }


  ngOnInit() {
    this.subscription.push(this.state.getSplitPaneVisible().subscribe(
      (isVisible) => this.showMobileMenu = !isVisible
      )
    );

/*    this.addEmployeeForm.valueChanges.subscribe((rawFormValues) => {
      let personEntries :Person = {
        birthdate: new Date(rawFormValues.personBirthdate),
        city: rawFormValues.addressCity,
        dynamic_id: null,
        firstname: rawFormValues.personFirstname,
        lastname: rawFormValues.personLastname,
        sex: rawFormValues.personSex,
        street: rawFormValues.addressStreet,
        zip: rawFormValues.addressZip
      }
    });*/
  }

  ngOnDestroy(): void {
    this.subscription.forEach(s => s.unsubscribe());
  }

  backButtonClicked() {
    this.router.navigate(['/'])
  }

  resetForm() {
    this.addEmployeeForm.reset();
  }

  onSubmit() {
    if(this.addEmployeeForm.invalid) {
      this.presentToast('Unvollständige Eingabe', 'danger')
      return;
    }
    const rawFormValues = this.addEmployeeForm.getRawValue();
    let personEntries :Person = {
      birthdate: new Date(rawFormValues.personBirthdate),
      city: rawFormValues.addressCity,
      dynamic_id: null,
      firstname: rawFormValues.personFirstname,
      lastname: rawFormValues.personLastname,
      sex: rawFormValues.personSex,
      street: rawFormValues.addressStreet,
      zip: rawFormValues.addressZip
    };
    this.personService.postPerson(personEntries).subscribe(result => {
      if(result !== 'INVALID_REQUEST') {
        this.presentToast('Person angelegt', 'success').then(()=>{
          this.router.navigate(['/tabs/dashboard'])
        })
      } else {
        this.presentToast('Unvollständige Eingabe', 'danger')
      }
      //TODO post that to server if ok - otherwise null
    });
  }

  async presentToast(message: string, color: string) {
    const p = await this.toastController.create({message, color, duration:3000})
    await p.present();
  }

}
