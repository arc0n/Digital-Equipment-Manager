(self["webpackChunkdigital_equipment_manager_ui"] = self["webpackChunkdigital_equipment_manager_ui"] || []).push([["src_app_pages_employee-dashboard_employee-dashboard_module_ts"],{

/***/ 37369:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/employee-dashboard/employee-dashboard-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDashboardPageRoutingModule": () => (/* binding */ EmployeeDashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _employee_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-dashboard.page */ 93398);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);





const routes = [
    {
        path: '',
        component: _employee_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.EmployeeDashboardPage
    }
];
let EmployeeDashboardPageRoutingModule = class EmployeeDashboardPageRoutingModule {
};
EmployeeDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmployeeDashboardPageRoutingModule);



/***/ }),

/***/ 64052:
/*!***********************************************************************!*\
  !*** ./src/app/pages/employee-dashboard/employee-dashboard.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDashboardPageModule": () => (/* binding */ EmployeeDashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _employee_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-dashboard-routing.module */ 37369);
/* harmony import */ var _employee_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-dashboard.page */ 93398);
/* harmony import */ var _services_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared.module */ 5710);








let EmployeeDashboardPageModule = class EmployeeDashboardPageModule {
};
EmployeeDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _employee_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeDashboardPageRoutingModule,
            _services_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_employee_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.EmployeeDashboardPage]
    })
], EmployeeDashboardPageModule);



/***/ }),

/***/ 93398:
/*!*********************************************************************!*\
  !*** ./src/app/pages/employee-dashboard/employee-dashboard.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeDashboardPage": () => (/* binding */ EmployeeDashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_employee_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./employee-dashboard.page.html */ 11849);
/* harmony import */ var _employee_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-dashboard.page.scss */ 66985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 35758);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 54395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var _services_api_services_person_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/person-resource.service */ 28502);
/* harmony import */ var _components_qr_scan_qr_scan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/qr-scan/qr-scan.component */ 64949);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_common_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common-state.service */ 83827);











let EmployeeDashboardPage = class EmployeeDashboardPage {
    constructor(employeeService, toastContrl, modalController, router, activatedRoute, state) {
        this.employeeService = employeeService;
        this.toastContrl = toastContrl;
        this.modalController = modalController;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.state = state;
        /** @internal */
        this.showMobileMenu = true;
        this.triggerServerCall$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.resetControls = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.subscriptions = [];
        this.personResults = [];
    }
    ngOnInit() {
        this.subscriptions.push(this.state.getSplitPaneVisible().subscribe((isVisible) => this.showMobileMenu = !isVisible));
        this.subscriptions.push(this.triggerServerCall$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.personResults = []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)((searchValue) => !!searchValue && !!searchValue.trim()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)((searchValue) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)([
                this.employeeService.getPersonByName(searchValue),
                this.employeeService.getPersonByCode(searchValue)
            ]);
        })).subscribe(([personByNAme, personByCode]) => {
            this.personResults = personByNAme;
            if (!!personByCode && personByCode !== 'NOT_FOUND') {
                this.navigateToSummaryPage(personByCode);
            }
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    onScanClicked(event) {
        this.presentModal();
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.modal = yield this.modalController.create({
                component: _components_qr_scan_qr_scan_component__WEBPACK_IMPORTED_MODULE_3__.QrScanComponent,
                componentProps: {
                    "cancelClicked": () => this.modal.dismiss(),
                    "qrCodeRead": this.modalResult.bind(this)
                }
            });
            return yield this.modal.present();
        });
    }
    modalResult(value) {
        this.employeeService.getPersonByCode(value).subscribe((employee) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modal.dismiss();
            if (!!employee && employee !== 'NOT_FOUND') {
                this.navigateToSummaryPage(employee);
            }
            else {
                const p = yield this.toastContrl.create({ color: "danger", duration: 2000, message: "" +
                        "Element mit diesem Code wurde nicht gefunden",
                });
                p.present();
                // this.modal.present();
            }
        }));
    }
    navigateToSummaryPage(employee) {
        this.personResults = [];
        this.resetControls.next();
        this.activatedRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(params => {
            this.router.navigate(['booking-summary'], { queryParams: {
                    isOpenBooking: params.isOpenBooking,
                    personId: employee.dynamic_id,
                    itemId: params.itemId
                } });
        });
    }
    onValueChange(value) {
        this.triggerServerCall$.next(value);
    }
    personSelected(person) {
        this.navigateToSummaryPage(person);
    }
    goBack() {
        window.history.back();
    }
};
EmployeeDashboardPage.ctorParameters = () => [
    { type: _services_api_services_person_resource_service__WEBPACK_IMPORTED_MODULE_2__.PersonResourceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: _services_common_state_service__WEBPACK_IMPORTED_MODULE_4__.CommonStateService }
];
EmployeeDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-employee-dashboard',
        template: _raw_loader_employee_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_employee_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmployeeDashboardPage);



/***/ }),

/***/ 66985:
/*!***********************************************************************!*\
  !*** ./src/app/pages/employee-dashboard/employee-dashboard.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".employee-page-vertical {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.employee-page-horizontal {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  justify-content: center;\n}\n\n.employee-page-qr-header {\n  max-width: 400px;\n  padding: 1rem;\n}\n\n.employee-page-content-wrapper {\n  margin: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex: 1 1;\n  border: 3px solid var(--ion-color-light);\n  border-radius: 2px;\n  color: var(--ion-color-medium);\n  min-height: 400px;\n}\n\n.employee-page-note-content {\n  flex-grow: 1;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.employee-page-result-list {\n  width: 100%;\n}\n\n.employee-page-result {\n  cursor: pointer;\n}\n\n.employee-page-result:hover {\n  --ion-item-background: #ECECECFF !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLWRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQUU7RUFDRSwyQ0FBQTtBQUVKIiwiZmlsZSI6ImVtcGxveWVlLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbG95ZWUtcGFnZS12ZXJ0aWNhbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmVtcGxveWVlLXBhZ2UtaG9yaXpvbnRhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5lbXBsb3llZS1wYWdlLXFyLWhlYWRlciB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG5cclxufVxyXG5cclxuLmVtcGxveWVlLXBhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICBtYXJnaW46IDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBmbGV4OiAxIDE7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uZW1wbG95ZWUtcGFnZS1ub3RlLWNvbnRlbnR7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZW1wbG95ZWUtcGFnZS1yZXN1bHQtbGlzdHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZW1wbG95ZWUtcGFnZS1yZXN1bHR7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXJ7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNFQ0VDRUNGRiAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 11849:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/employee-dashboard/employee-dashboard.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons\r\n      *ngIf=\"this.showMobileMenu\"\r\n      slot=\"start\" class=\"back-button\" (click)=\"goBack()\">\r\n      <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>An Mitarbeiter ausgeben</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"equipment-page-vertical\">\r\n    <div class=\"employee-page-horizontal\">\r\n      <p class=\"employee-page-qr-header\">\r\n        QR Code des Mitarbeiters für die Ausgabe Scannen oder eintippen.\r\n        Alternativ kann nach Name des Mitarbeiters gesucht werden\r\n      </p>\r\n    </div>\r\n\r\n    <app-qr-control placeholder=\"Name / QR Code\"\r\n                    (onQrClick)=\"onScanClicked($event)\"\r\n                    [showContinueButton]=\"false\"\r\n                    (onValueInputChange)=\"onValueChange($event)\"\r\n                    [resetControls]=\"this.resetControls\"\r\n                    cy-data=\"QR-Code\"\r\n    ></app-qr-control>\r\n\r\n    <div class=\"employee-page-content-wrapper\">\r\n      <!-- List of Text Items -->\r\n      <ion-list class=\"employee-page-result-list\" *ngIf=\"personResults.length > 0; else noResultTemplate\">\r\n        <ion-item cy-data=\"person-result\" class=\"employee-page-result\" *ngFor=\"let person of personResults\" (click)=\"personSelected(person)\">\r\n          <ion-label>{{ person.firstname + ' ' + person.lastname }}</ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ng-template #noResultTemplate >\r\n        <div class=\"employee-page-note-content\"> <p>Keine Ergebnisse</p></div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_employee-dashboard_employee-dashboard_module_ts.js.map