(self["webpackChunkdigital_equipment_manager_ui"] = self["webpackChunkdigital_equipment_manager_ui"] || []).push([["src_app_pages_employee-add-page_employee-add-page_module_ts"],{

/***/ 93395:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/employee-add-page/employee-add-page-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeAddPagePageRoutingModule": () => (/* binding */ EmployeeAddPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _employee_add_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-add-page.page */ 80011);




const routes = [
    {
        path: '',
        component: _employee_add_page_page__WEBPACK_IMPORTED_MODULE_0__.EmployeeAddPagePage
    }
];
let EmployeeAddPagePageRoutingModule = class EmployeeAddPagePageRoutingModule {
};
EmployeeAddPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmployeeAddPagePageRoutingModule);



/***/ }),

/***/ 31408:
/*!*********************************************************************!*\
  !*** ./src/app/pages/employee-add-page/employee-add-page.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeAddPagePageModule": () => (/* binding */ EmployeeAddPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _employee_add_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-add-page-routing.module */ 93395);
/* harmony import */ var _employee_add_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-add-page.page */ 80011);







let EmployeeAddPagePageModule = class EmployeeAddPagePageModule {
};
EmployeeAddPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _employee_add_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeAddPagePageRoutingModule
        ],
        declarations: [_employee_add_page_page__WEBPACK_IMPORTED_MODULE_1__.EmployeeAddPagePage]
    })
], EmployeeAddPagePageModule);



/***/ }),

/***/ 80011:
/*!*******************************************************************!*\
  !*** ./src/app/pages/employee-add-page/employee-add-page.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeAddPagePage": () => (/* binding */ EmployeeAddPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_employee_add_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./employee-add-page.page.html */ 56384);
/* harmony import */ var _employee_add_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-add-page.page.scss */ 95424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common-state.service */ 83827);
/* harmony import */ var _services_api_services_person_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-services/person-resource.service */ 28502);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);









let EmployeeAddPagePage = class EmployeeAddPagePage {
    constructor(router, state, personService, toastController) {
        this.router = router;
        this.state = state;
        this.personService = personService;
        this.toastController = toastController;
        this.subscription = [];
        /** @internal */
        this.showMobileMenu = true;
        /** @internal */
        this.addEmployeeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            personFirstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            personLastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            personBirthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            personSex: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            addressStreet: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            addressZip: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            addressCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        });
    }
    ngOnInit() {
        this.subscription.push(this.state.getSplitPaneVisible().subscribe((isVisible) => this.showMobileMenu = !isVisible));
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
    ngOnDestroy() {
        this.subscription.forEach(s => s.unsubscribe());
    }
    backButtonClicked() {
        this.router.navigate(['/']);
    }
    resetForm() {
        this.addEmployeeForm.reset();
    }
    onSubmit() {
        if (this.addEmployeeForm.invalid) {
            this.presentToast('Unvollständige Eingabe', 'danger');
            return;
        }
        const rawFormValues = this.addEmployeeForm.getRawValue();
        let personEntries = {
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
            if (result !== 'INVALID_REQUEST') {
                this.presentToast('Person angelegt', 'success').then(() => {
                    this.router.navigate(['/tabs/dashboard']);
                });
            }
            else {
                this.presentToast('Unvollständige Eingabe', 'danger');
            }
        });
    }
    presentToast(message, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const p = yield this.toastController.create({ message, color, duration: 3000 });
            yield p.present();
        });
    }
};
EmployeeAddPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__.CommonStateService },
    { type: _services_api_services_person_resource_service__WEBPACK_IMPORTED_MODULE_3__.PersonResourceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
EmployeeAddPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-employee-add-page',
        template: _raw_loader_employee_add_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_employee_add_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmployeeAddPagePage);



/***/ }),

/***/ 95424:
/*!*********************************************************************!*\
  !*** ./src/app/pages/employee-add-page/employee-add-page.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".employee-page-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  padding-bottom: 1rem;\n}\n\n.employee-add-form-wrapper {\n  display: flex;\n  justify-content: center;\n  height: auto;\n}\n\n.employee-add-form {\n  margin: 2rem;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  flex: 0 1 600px;\n  border: 3px solid var(--ion-color-light);\n  border-radius: 2px;\n  color: var(--ion-color-medium);\n  height: auto;\n}\n\n.employee-add-form-item {\n  display: flex;\n}\n\n.employee-add-bottom-collapsed {\n  display: flex;\n  justify-content: space-between;\n}\n\n.webkit-datetime-edit-fields-wrapper {\n  background: silver;\n}\n\n.employee-add-bottom-toolbar {\n  justify-content: center;\n  display: flex;\n  padding-right: 2rem;\n  padding-left: 2rem;\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLWFkZC1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFBdUMsa0JBQUE7QUFFdkM7O0FBQUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFHRiIsImZpbGUiOiJlbXBsb3llZS1hZGQtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbG95ZWUtcGFnZS13cmFwcGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZW1wbG95ZWUtYWRkLWZvcm0td3JhcHBlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmVtcGxveWVlLWFkZC1mb3Jte1xyXG4gIG1hcmdpbjogMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDAgMSA2MDBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZW1wbG95ZWUtYWRkLWZvcm0taXRlbXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZW1wbG95ZWUtYWRkLWJvdHRvbS1jb2xsYXBzZWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ud2Via2l0LWRhdGV0aW1lLWVkaXQtZmllbGRzLXdyYXBwZXIgeyBiYWNrZ3JvdW5kOiBzaWx2ZXI7IH1cclxuXHJcbi5lbXBsb3llZS1hZGQtYm90dG9tLXRvb2xiYXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 56384:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employee-add-page/employee-add-page.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons\r\n      *ngIf=\"this.showMobileMenu\"\r\n      slot=\"start\" class=\"back-button\" (click)=\"this.router.navigate(['/tabs/settings'])\">\r\n      <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Mitarbeiter anlegen</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"employee-page-wrapper\">\r\n  <!-- Formular -->\r\n  <div class=\"employee-add-form-wrapper\">\r\n    <form class=\"employee-add-form\" [formGroup]=\"addEmployeeForm\">\r\n        <ion-item class=\"employee-add-form-item\">\r\n          <ion-icon name=\"chatbox-ellipses\" class=\"ion-margin\"></ion-icon>\r\n          <ion-label>Vorname</ion-label>\r\n          <ion-input placeholder=\"Vorname\" formControlName=\"personFirstname\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"employee-add-form-item\">\r\n          <ion-icon name=\"bookmark\" class=\"ion-margin\"></ion-icon>\r\n          <ion-label>Nachname</ion-label>\r\n          <ion-input placeholder=\"Nachname\" formControlName=\"personLastname\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"calendar\" class=\"ion-margin\"></ion-icon>\r\n          <ion-label>Geburtsdatum</ion-label>\r\n          <input formControlName=\"personBirthdate\" type=\"date\">\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"body\" class=\"ion-margin\"></ion-icon>\r\n          <ion-label>Geschlecht</ion-label>\r\n          <ion-select formControlName=\"personSex\" interface=\"popover\" placeholder=\"Wähle Geschlecht\">\r\n            <ion-select-option value=\"0\">Männlich</ion-select-option>\r\n            <ion-select-option value=\"1\">Weiblich</ion-select-option>\r\n            <ion-select-option value=\"2\">Divers</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item class=\"employee-add-form-item\">\r\n          <ion-icon name=\"home\" class=\"ion-margin\"></ion-icon>\r\n          <ion-label>Straße</ion-label>\r\n          <ion-input placeholder=\"Straße\" formControlName=\"addressStreet\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"employee-add-form-item\">\r\n          <ion-icon name=\"keypad\" class=\"ion-margin\"></ion-icon>\r\n          <ion-label>Postleitzahl</ion-label>\r\n          <ion-input placeholder=\"1234\" formControlName=\"addressZip\" type=\"number\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"employee-add-form-item\">\r\n          <ion-icon name=\"business\" class=\"ion-margin\"></ion-icon>\r\n          <ion-label>Stadt</ion-label>\r\n          <ion-input placeholder=\"Stadt\" formControlName=\"addressCity\"></ion-input>\r\n        </ion-item>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"employee-add-bottom-toolbar\" [ngClass]=\"{'ion-justify-content-between': !showMobileMenu}\">\r\n    <div *ngIf=\"!showMobileMenu\">\r\n      <ion-button class=\"max-width-100\" color=\"primary\" [fill]=\"'outline'\"\r\n                  (click)=\"backButtonClicked()\">\r\n        Zurück\r\n      </ion-button>\r\n    </div>\r\n    <ion-button class=\"max-width-100\" [fill]=\"'outline'\" color=\"danger\" (click)=\"resetForm()\">\r\n      Formular zurücksetzen\r\n    </ion-button>\r\n    <ion-button class=\"max-width-100\" color=\"primary\" (click)=\"onSubmit()\" type=\"submit\">\r\n      Anlegen\r\n    </ion-button>\r\n  </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_employee-add-page_employee-add-page_module_ts.js.map