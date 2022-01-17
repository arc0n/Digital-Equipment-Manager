(self["webpackChunkdigital_equipment_manager_ui"] = self["webpackChunkdigital_equipment_manager_ui"] || []).push([["src_app_pages_booking-summary_booking-summary_module_ts"],{

/***/ 15629:
/*!*************************************************************************!*\
  !*** ./src/app/pages/booking-summary/booking-summary-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingSummaryPageRoutingModule": () => (/* binding */ BookingSummaryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _booking_summary_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-summary.page */ 95719);




const routes = [
    {
        path: '',
        component: _booking_summary_page__WEBPACK_IMPORTED_MODULE_0__.BookingSummaryPage
    }
];
let BookingSummaryPageRoutingModule = class BookingSummaryPageRoutingModule {
};
BookingSummaryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookingSummaryPageRoutingModule);



/***/ }),

/***/ 9033:
/*!*****************************************************************!*\
  !*** ./src/app/pages/booking-summary/booking-summary.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingSummaryPageModule": () => (/* binding */ BookingSummaryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _booking_summary_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-summary-routing.module */ 15629);
/* harmony import */ var _booking_summary_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-summary.page */ 95719);
/* harmony import */ var _services_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared.module */ 5710);








let BookingSummaryPageModule = class BookingSummaryPageModule {
};
BookingSummaryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _booking_summary_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingSummaryPageRoutingModule,
            _services_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_booking_summary_page__WEBPACK_IMPORTED_MODULE_1__.BookingSummaryPage]
    })
], BookingSummaryPageModule);



/***/ }),

/***/ 95719:
/*!***************************************************************!*\
  !*** ./src/app/pages/booking-summary/booking-summary.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingSummaryPage": () => (/* binding */ BookingSummaryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_booking_summary_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./booking-summary.page.html */ 17972);
/* harmony import */ var _booking_summary_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-summary.page.scss */ 96364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 35758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _services_api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/item-resource.service */ 16764);
/* harmony import */ var _services_api_services_person_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-services/person-resource.service */ 28502);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_api_services_booking_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api-services/booking-resource.service */ 36145);
/* harmony import */ var _services_common_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common-state.service */ 83827);
/* harmony import */ var _components_qr_scan_qr_scan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/qr-scan/qr-scan.component */ 64949);













let BookingSummaryPage = class BookingSummaryPage {
    constructor(route, itemSrv, personSrv, bookingSrv, router, state, toastController, modalController, itemService) {
        this.route = route;
        this.itemSrv = itemSrv;
        this.personSrv = personSrv;
        this.bookingSrv = bookingSrv;
        this.router = router;
        this.state = state;
        this.toastController = toastController;
        this.modalController = modalController;
        this.itemService = itemService;
        /** @internal */
        this.showMobileMenu = true;
        this.subscriptions = [];
        /** @internal */
        this.items = [];
        this.isOpenBooking = false;
        this.subscriptions.push(this.state.getSplitPaneVisible().subscribe((isVisible) => this.showMobileMenu = !isVisible));
    }
    goBack() {
        window.history.back();
    }
    ngOnInit() {
        this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(params => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)([
                this.itemSrv.getItemByCode(params.itemId),
                (this.isOpenBooking ? (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(null) : this.personSrv.getPersonByCode(params.personId))
            ]);
        })).subscribe(([item, person]) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (!item || item === 'NOT_FOUND' || person === 'NOT_FOUND') {
                const toast = yield this.toastController.create({
                    position: "bottom", color: "danger",
                    message: "Verbindung zum Server verloren, bitte Seite neu laden"
                });
                toast.present();
            }
            this.items.push(item);
            this.person = person;
            this.isOpenBooking = item.borrowed;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    createBooking() {
        var _a, _b;
        if (this.isOpenBooking) {
            this.bookingSrv.putBooking({
                item_id: (_a = this.items) === null || _a === void 0 ? void 0 : _a.map(i => i.dynamic_id),
            }).subscribe(val => {
                this.handleBookingResponse(val);
            });
        }
        else {
            this.bookingSrv.postBooking({
                item_id: (_b = this.items) === null || _b === void 0 ? void 0 : _b.map(i => i.dynamic_id),
                person_id: this.person.dynamic_id
            }).subscribe(val => {
                this.handleBookingResponse(val);
            });
        }
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.modal = yield this.modalController.create({
                component: _components_qr_scan_qr_scan_component__WEBPACK_IMPORTED_MODULE_6__.QrScanComponent,
                componentProps: {
                    "cancelClicked": () => this.modal.dismiss(),
                    "qrCodeRead": this.modalResult.bind(this)
                }
            });
            return yield this.modal.present();
        });
    }
    modalResult(value) {
        this.itemService.getItemByCode(value)
            .subscribe((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modal.dismiss();
            if (!!item) {
                this.addItemToList(item);
            }
            else {
                const p = yield this.toastController.create({
                    color: "danger", duration: 2000, message: "" +
                        "Element mit diesem Code wurde nicht gefunden",
                });
                p.present();
                this.modal.dismiss();
            }
        }));
    }
    addItemToList(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (this.items.some(i => i.dynamic_id === item.dynamic_id)) {
                const p = yield this.toastController.create({
                    color: "danger", duration: 4000,
                    message: "Das Element existiert bereits in der Liste",
                });
                p.present();
            }
            else if (item.borrowed !== this.isOpenBooking) {
                const p = yield this.toastController.create({
                    color: "danger", duration: 6000,
                    message: "Das Element ist aktuell nicht" + this.isOpenBooking ? 'Ausgegeben' : 0,
                });
                p.present();
            }
            else {
                this.items.push(item);
            }
        });
    }
    deleteItemFromList(i) {
        this.items.splice(i, 1);
    }
    handleBookingResponse(val) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (!val || val === 'INVALID_REQUEST' || val === 'UNFINISHED_BOOKING') {
                const p = yield this.toastController.create({
                    color: "danger", duration: 6000, message: "" +
                        "Error Code: " + val,
                });
                yield p.present();
            }
            else {
                const p = yield this.toastController.create({
                    color: "success", duration: 2000, message: `die ${this.isOpenBooking ? 'Rückgabe' : 'Ausgabe'} wurde gebucht`
                });
                yield p.present();
                yield this.router.navigate(['/tabs/dashboard']);
            }
        });
    }
};
BookingSummaryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _services_api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_2__.ItemResourceService },
    { type: _services_api_services_person_resource_service__WEBPACK_IMPORTED_MODULE_3__.PersonResourceService },
    { type: _services_api_services_booking_resource_service__WEBPACK_IMPORTED_MODULE_4__.BookingResourceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _services_common_state_service__WEBPACK_IMPORTED_MODULE_5__.CommonStateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _services_api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_2__.ItemResourceService }
];
BookingSummaryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-booking-summary',
        template: _raw_loader_booking_summary_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_booking_summary_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BookingSummaryPage);



/***/ }),

/***/ 96364:
/*!*****************************************************************!*\
  !*** ./src/app/pages/booking-summary/booking-summary.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".booking-summary-content-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.booking-summary-content-card {\n  flex-grow: 1;\n}\n\n.booking-summary-flex-item {\n  display: flex;\n  flex-direction: row;\n}\n\n.booking-summary-flex-item-list {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.booking-summary-picture-wrapper {\n  margin: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0 1 130px;\n  min-height: 130px;\n  border: 3px solid var(--ion-color-light);\n  border-radius: 2px;\n  color: var(--ion-color-medium);\n}\n\n.booking-summary-flex-list-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.booking-summary-grid-list-header {\n  display: grid;\n  grid-template-columns: [picture] 17% [Name] 30% [SN] auto [Option] 25%;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.booking-summary-flex-list-items {\n  display: flex;\n  flex-grow: 1;\n}\n\n.booking-summary-list-picture-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0 1 50px;\n  min-height: 50px;\n  max-width: 50px;\n  border: 3px solid var(--ion-color-light);\n  border-radius: 2px;\n  color: var(--ion-color-medium);\n}\n\n.booking-summary-add-button {\n  display: flex;\n  flex: 0 1;\n  justify-content: center;\n}\n\n.equipment-add-bottom-collapsed {\n  display: flex;\n  justify-content: space-between;\n}\n\n.equipment-add-bottom-toolbar {\n  justify-content: center;\n  display: flex;\n  padding-right: 2rem;\n  padding-left: 2rem;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctc3VtbWFyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNFQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBRiIsImZpbGUiOiJib29raW5nLXN1bW1hcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2tpbmctc3VtbWFyeS1jb250ZW50LXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ib29raW5nLXN1bW1hcnktY29udGVudC1jYXJkIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5ib29raW5nLXN1bW1hcnktZmxleC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5ib29raW5nLXN1bW1hcnktZmxleC1pdGVtLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5ib29raW5nLXN1bW1hcnktcGljdHVyZS13cmFwcGVyIHtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDAgMSAxMzBweDtcclxuICBtaW4taGVpZ2h0OiAxMzBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbn1cclxuXHJcbi5ib29raW5nLXN1bW1hcnktZmxleC1saXN0LWhlYWRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uYm9va2luZy1zdW1tYXJ5LWdyaWQtbGlzdC1oZWFkZXJ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFtwaWN0dXJlXSAxNyUgW05hbWVdIDMwJSBbU05dIGF1dG8gW09wdGlvbl0gMjUlO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uYm9va2luZy1zdW1tYXJ5LWZsZXgtbGlzdC1pdGVtc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmJvb2tpbmctc3VtbWFyeS1saXN0LXBpY3R1cmUtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDAgMSA1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxufVxyXG5cclxuXHJcbi5ib29raW5nLXN1bW1hcnktYWRkLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAwIDE7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcXVpcG1lbnQtYWRkLWJvdHRvbS1jb2xsYXBzZWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZXF1aXBtZW50LWFkZC1ib3R0b20tdG9vbGJhciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 17972:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booking-summary/booking-summary.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons\r\n      *ngIf=\"this.showMobileMenu\"\r\n      slot=\"start\" class=\"back-button\" (click)=\"goBack()\">\r\n      <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Zusammenfassung über {{this.isOpenBooking ? 'Rücknahme' : 'Ausgabe'}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div class=\"booking-summary-content-wrapper\">\r\n  <div class=\"booking-summary-content-card ion-margin\">\r\n    <div class=\"booking-summary-flex-item\">\r\n      <div class=\"booking-summary-picture-wrapper\">\r\n        <ion-img [src]=\"'assets/people/'+ (this.person?.photo || 'no-image.png')\"></ion-img>\r\n      </div>\r\n      <div class=\"booking-summary-item-wrapper\">\r\n        <h3>Person</h3>\r\n        <p>Vorname: {{ this.person?.firstname}}</p>\r\n        <p>Nachname: {{ this.person?.lastname}}</p>\r\n        <p>ID: {{ this.person?.id_card}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"booking-summary-grid-list-header\">\r\n      <ion-label><p>Picture</p></ion-label>\r\n      <ion-label><p>Name</p></ion-label>\r\n      <ion-label><p>Seriennummer</p></ion-label>\r\n      <ion-label><p class=\"ion-text-end\">Option</p></ion-label>\r\n    </div>\r\n    <div class=\"booking-summary-flex-item-list\" *ngFor=\"let item of items; let i = index\">\r\n      <ion-item class=\"booking-summary-flex-list-items\">\r\n        <ion-label>\r\n          <div class=\"booking-summary-list-picture-wrapper\">\r\n            <ion-img [src]=\"'assets/equipment/'+ (this.item?.photo || 'no-image.png')\"></ion-img>\r\n          </div>\r\n        </ion-label>\r\n        <ion-label class=\"ion-text-left\">{{ item.model_name }}</ion-label>\r\n        <ion-label>{{ item.serial_number }}</ion-label>\r\n        <ion-label class=\"ion-text-end\">\r\n          <ion-button (click)=\"deleteItemFromList(i)\" color=\"danger\" [fill]=\"'outline'\">\r\n            <ion-icon name=\"close\"></ion-icon>\r\n          </ion-button></ion-label>\r\n      </ion-item>\r\n    </div>\r\n    <div class=\"booking-summary-add-button ion-margin ion-padding\">\r\n      <ion-button cy-data=\"Equ-Add\" (click)=\"presentModal()\" [fill]=\"'outline'\">Gegenstand hinzufügen</ion-button>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n  <div class=\"equipment-add-bottom-toolbar\" [ngClass]=\"{'ion-justify-content-between': !showMobileMenu}\">\r\n    <div *ngIf=\"!showMobileMenu\">\r\n      <ion-button class=\"max-width-100\" color=\"primary\" [fill]=\"'outline'\"\r\n                  (click)=\"goBack()\">\r\n        Zurück\r\n      </ion-button>\r\n    </div>\r\n    <ion-button cy-data=\"Btn-Confirm\" class=\"max-width-100\" color=\"primary\" (click)=\"createBooking()\">\r\n      Bestätigen\r\n    </ion-button>\r\n  </div>\r\n</div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_booking-summary_booking-summary_module_ts.js.map