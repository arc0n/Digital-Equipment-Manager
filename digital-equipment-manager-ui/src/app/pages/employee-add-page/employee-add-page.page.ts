import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CommonStateService} from "../../services/common-state.service";
import {Person} from "../../services/model";
import {PersonResourceService} from "../../services/api-services/person-resource.service";

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
            personFirstname: new FormControl(''),
            personLastname: new FormControl(''),
            personBirthdate: new FormControl(''),
            personSex: new FormControl(''),
            addressStreet: new FormControl(''),
            addressZip: new FormControl(''),
            addressCity: new FormControl(''),
          }
    )

  constructor(public router: Router,
              public state: CommonStateService,
              private personService: PersonResourceService,
  ) { }


  ngOnInit() {
    this.subscription.push(this.state.getSplitPaneVisible().subscribe(
      (isVisible) => this.showMobileMenu = !isVisible
      )
    );

    this.addEmployeeForm.valueChanges.subscribe((rawFormValues) => {
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
      console.log(personEntries);
    });
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
    this.personService.post(personEntries, {}).subscribe(person => {
      //TODO post that to server if ok - otherwise null
    });
  }

}
