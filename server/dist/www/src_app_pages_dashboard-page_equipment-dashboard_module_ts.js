(self["webpackChunkdigital_equipment_manager_ui"] = self["webpackChunkdigital_equipment_manager_ui"] || []).push([["src_app_pages_dashboard-page_equipment-dashboard_module_ts"],{

/***/ 70338:
/*!****************************************************************************!*\
  !*** ./src/app/pages/dashboard-page/equipment-dashboard-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipmentDashboardPage": () => (/* binding */ EquipmentDashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_equipment_dashboard_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./equipment-dashboard-page.component.html */ 66018);
/* harmony import */ var _equipment_dashboard_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipment-dashboard-page.component.scss */ 87779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _components_qr_scan_qr_scan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/qr-scan/qr-scan.component */ 64949);
/* harmony import */ var _services_api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-services/item-resource.service */ 16764);
/* harmony import */ var _services_common_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common-state.service */ 83827);









let EquipmentDashboardPage = class EquipmentDashboardPage {
    constructor(router, modalController, itemService, toastController, state) {
        this.router = router;
        this.modalController = modalController;
        this.itemService = itemService;
        this.toastController = toastController;
        this.state = state;
        this.subscriptions = [];
        /** @internal */
        this.showMobileMenu = false;
    }
    onScanClicked(event) {
        this.presentModal();
    }
    ngOnInit() {
        this.subscriptions.push(this.state.getSplitPaneVisible().subscribe((isVisible) => this.showMobileMenu = !isVisible));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.modal = yield this.modalController.create({
                component: _components_qr_scan_qr_scan_component__WEBPACK_IMPORTED_MODULE_2__.QrScanComponent,
                componentProps: {
                    "cancelClicked": () => this.modal.dismiss(),
                    "qrCodeRead": this.modalResult.bind(this)
                }
            });
            return yield this.modal.present();
        });
    }
    modalResult(value) {
        this.itemService.getItemByCode(value).subscribe((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modal.dismiss();
            if (!!item && item !== 'NOT_FOUND') {
                this.navigateToEquipmentPage(item);
            }
            else {
                const p = yield this.toastController.create({ color: "danger", duration: 2000, message: "" +
                        "Element mit diesem Code wurde nicht gefunden",
                });
                p.present();
            }
        }));
    }
    onContinueBtnClick(inputValue) {
        if (!inputValue)
            return;
        return this.itemService.getItemByCode(inputValue).subscribe((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (!item || item === 'NOT_FOUND') {
                const toast = yield this.toastController.create({
                    position: "bottom",
                    duration: 2000,
                    message: "Es wurde keine Gerät mit diesem Code gefunden",
                    color: "danger"
                });
                toast.present();
                return;
            }
            this.navigateToEquipmentPage(item);
        }));
    }
    navigateToEquipmentPage(item) {
        this.router.navigate(['equipment'], { queryParams: { id: item.dynamic_id } });
    }
    bookingClicked(event) {
        this.navigateToEquipmentPage(event.item);
    }
};
EquipmentDashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _services_api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_3__.ItemResourceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _services_common_state_service__WEBPACK_IMPORTED_MODULE_4__.CommonStateService }
];
EquipmentDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'equipment-dashboard',
        template: _raw_loader_equipment_dashboard_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_equipment_dashboard_page_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EquipmentDashboardPage);



/***/ }),

/***/ 36848:
/*!****************************************************************************!*\
  !*** ./src/app/pages/dashboard-page/equipment-dashboard-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _equipment_dashboard_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equipment-dashboard-page.component */ 70338);




const routes = [
    {
        path: '',
        component: _equipment_dashboard_page_component__WEBPACK_IMPORTED_MODULE_0__.EquipmentDashboardPage,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
        providers: []
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 58153:
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard-page/equipment-dashboard.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipmentDashboardPageModule": () => (/* binding */ EquipmentDashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _equipment_dashboard_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equipment-dashboard-page.component */ 70338);
/* harmony import */ var _equipment_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipment-dashboard-routing.module */ 36848);
/* harmony import */ var _services_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared.module */ 5710);








let EquipmentDashboardPageModule = class EquipmentDashboardPageModule {
};
EquipmentDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _equipment_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab1PageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _services_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_equipment_dashboard_page_component__WEBPACK_IMPORTED_MODULE_0__.EquipmentDashboardPage]
    })
], EquipmentDashboardPageModule);



/***/ }),

/***/ 87779:
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard-page/equipment-dashboard-page.component.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".equipment-page-vertical {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.equipment-page-horizontal {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  justify-content: center;\n}\n\n.equipment-page-qr-header {\n  max-width: 400px;\n  padding: 1rem;\n  text-align: center;\n}\n\n.booking-header {\n  margin-top: 0.5rem;\n  margin-bottom: 0;\n  display: flex;\n  justify-content: center;\n}\n\n.equipment-page-content-wrapper {\n  margin-top: 1rem;\n  margin-left: 1rem;\n  margin-right: 1rem;\n  /* justify-content: center;\n   align-items: center;\n   flex: 1 1; */\n  border: 3px solid var(--ion-color-light);\n  border-radius: 2px;\n  color: var(--ion-color-medium);\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwbWVudC1kYXNoYm9hcmQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQTs7ZUFBQTtFQUdDLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJlcXVpcG1lbnQtZGFzaGJvYXJkLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXF1aXBtZW50LXBhZ2UtdmVydGljYWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5lcXVpcG1lbnQtcGFnZS1ob3Jpem9udGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZXF1aXBtZW50LXBhZ2UtcXItaGVhZGVyIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYm9va2luZy1oZWFkZXJ7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmVxdWlwbWVudC1wYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDEgMTsgKi9cclxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 66018:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard-page/equipment-dashboard-page.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Startseite\r\n      <app-logo *ngIf=\"showMobileMenu\" class=\"toolbar-logo\"></app-logo>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Ausrüstung</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <div class=\"equipment-page-vertical\">\r\n    <div class=\"equipment-page-horizontal\">\r\n      <p class=\"equipment-page-qr-header\">\r\n        Bitte ID-Code unterhalb eingeben oder mittels \"SCAN\" button scannen. Kamera für scan benötigt.\r\n      </p>\r\n    </div>\r\n\r\n    <app-qr-control placeholder=\"QR ID or SCAN\"\r\n                    (onQrClick)=\"onScanClicked($event)\"\r\n                    (onContinueBtnClick)=\"onContinueBtnClick($event)\"\r\n                    [showContinueButton]=\"true\"\r\n    ></app-qr-control>\r\n\r\n    <div class=\"equipment-page-content-wrapper\" *ngIf=\"!this.showMobileMenu\">\r\n      <div class=\"booking-header\">\r\n        Letzte Buchungen\r\n      </div>\r\n      <app-history-list [filter]=\"{}\" [showItem]=\"true\" [clickable]=\"true\"\r\n                        (bookingClicked)=\"bookingClicked($event)\"></app-history-list>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard-page_equipment-dashboard_module_ts.js.map