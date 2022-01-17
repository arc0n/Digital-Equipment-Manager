(self["webpackChunkdigital_equipment_manager_ui"] = self["webpackChunkdigital_equipment_manager_ui"] || []).push([["src_app_pages_equipment-io-page_equipment-io-page_module_ts"],{

/***/ 41264:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/equipment-io-page/equipment-io-page-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipmentIoPagePageRoutingModule": () => (/* binding */ EquipmentIoPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _equipment_io_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equipment-io-page.component */ 8866);




const routes = [
    {
        path: '',
        component: _equipment_io_page_component__WEBPACK_IMPORTED_MODULE_0__.EquipmentIoPage
    }
];
let EquipmentIoPagePageRoutingModule = class EquipmentIoPagePageRoutingModule {
};
EquipmentIoPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EquipmentIoPagePageRoutingModule);



/***/ }),

/***/ 8866:
/*!************************************************************************!*\
  !*** ./src/app/pages/equipment-io-page/equipment-io-page.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipmentIoPage": () => (/* binding */ EquipmentIoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_equipment_io_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./equipment-io-page.component.html */ 24666);
/* harmony import */ var _equipment_io_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipment-io-page.component.scss */ 93139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common-state.service */ 83827);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var _services_api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-services/item-resource.service */ 16764);
/* harmony import */ var _services_api_services_booking_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api-services/booking-resource.service */ 36145);











let EquipmentIoPage = class EquipmentIoPage {
    constructor(router, state, actionSheetController, activeRoute, itemService, toastController, bookingService) {
        this.router = router;
        this.state = state;
        this.actionSheetController = actionSheetController;
        this.activeRoute = activeRoute;
        this.itemService = itemService;
        this.toastController = toastController;
        this.bookingService = bookingService;
        this.subscriptions = [];
        /** @internal */
        this.showMobileMenu = true;
        /** @internal */
        this.showCode = false;
    }
    ngOnInit() {
        this.subscriptions.push(this.state.getSplitPaneVisible().subscribe((isVisible) => this.showMobileMenu = !isVisible));
        this.activeRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(params => {
            return this.itemService.getItemByCode(params.id);
        })).subscribe((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!item || item === 'NOT_FOUND') {
                const toast = yield this.toastController.create({
                    position: "bottom",
                    duration: 2000,
                    message: "Es wurde keine Gerät mit diesem Code gefunden",
                    color: "danger"
                });
                yield this.router.navigate(['/tabs/dashboard']);
                toast.present();
                return;
            }
            this.item = item;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    presentActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Optionen für Gerät',
                buttons: [
                    {
                        text: this.item.status === 'aktiv' ? 'Defekt melden' : 'Defekt bearbeiten',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            this.navigateToDefect();
                        }
                    },
                    {
                        text: 'Historie anzeigen',
                        icon: 'caret-forward-circle',
                        handler: () => {
                            this.navigateToHistory();
                        }
                    }, {
                        text: 'Gerät bearbeiten',
                        icon: 'create-outline',
                        handler: () => {
                            this.navigateToUpdateItem();
                        }
                    }, {
                        text: !this.showCode ? 'QR Code anzeigen' : 'QR Code ausblenden',
                        icon: 'qr-code-outline',
                        handler: () => {
                            this.showQRCode();
                        }
                    },
                    {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                        }
                    }
                ]
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    onMenuClicked() {
        this.presentActionSheet();
    }
    navigateToBookAndReturn() {
        let obs = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([null]);
        if (this.item.borrowed) {
            obs = this.bookingService.getBookingsByItem(this.item.dynamic_id, { borrowed: true });
        }
        obs.subscribe((booking) => {
            var _a;
            let openBooking = booking[0];
            this.item.borrowed ?
                this.router.navigate(['booking-summary'], {
                    queryParams: { itemId: this.item.dynamic_id, personId: (_a = openBooking === null || openBooking === void 0 ? void 0 : openBooking.person) === null || _a === void 0 ? void 0 : _a.dynamic_id, isOpenBooking: !!this.item.borrowed }
                }) :
                this.router.navigate(['/employee-dashboard'], {
                    queryParams: { itemId: this.item.dynamic_id, isOpenBooking: !!this.item.borrowed }
                });
        });
    }
    backButtonClicked() {
        this.router.navigate(['/']);
    }
    getStatusColor(status, isBorrowed) {
        if (!status) {
            return '#3a7be0';
        }
        if (isBorrowed && status === 'aktiv') {
            return 'yellow';
        }
        if (status === 'aktiv') {
            return 'var(--ion-color-success)';
        }
        else {
            return 'var(--ion-color-danger)';
        }
    }
    navigateToUpdateItem() {
        this.router.navigate(['item-update'], {
            queryParams: { itemId: this.item.dynamic_id },
        });
    }
    navigateToDefect() {
        this.router.navigate(['item-defect'], {
            queryParams: { itemId: this.item.dynamic_id },
        });
    }
    navigateToHistory() {
        this.router.navigate(['item-history'], {
            queryParams: { itemId: this.item.dynamic_id },
        });
    }
    showQRCode() {
        this.showCode = this.showCode === false;
    }
    getItemStatus(status, borrowed) {
        if (status !== "aktiv")
            return " - ";
        if (borrowed) {
            return "ausgegeben";
        }
        else {
            return "verfügbar";
        }
    }
};
EquipmentIoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__.CommonStateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _services_api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_3__.ItemResourceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _services_api_services_booking_resource_service__WEBPACK_IMPORTED_MODULE_4__.BookingResourceService }
];
EquipmentIoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-equipment-io-page',
        template: _raw_loader_equipment_io_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_equipment_io_page_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EquipmentIoPage);



/***/ }),

/***/ 39579:
/*!*********************************************************************!*\
  !*** ./src/app/pages/equipment-io-page/equipment-io-page.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipmentIoPagePageModule": () => (/* binding */ EquipmentIoPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _equipment_io_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equipment-io-page-routing.module */ 41264);
/* harmony import */ var _equipment_io_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipment-io-page.component */ 8866);
/* harmony import */ var _services_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared.module */ 5710);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularx-qrcode */ 99263);









let EquipmentIoPagePageModule = class EquipmentIoPagePageModule {
};
EquipmentIoPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _equipment_io_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.EquipmentIoPagePageRoutingModule,
            _services_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_8__.QRCodeModule
        ],
        declarations: [_equipment_io_page_component__WEBPACK_IMPORTED_MODULE_1__.EquipmentIoPage]
    })
], EquipmentIoPagePageModule);



/***/ }),

/***/ 93139:
/*!**************************************************************************!*\
  !*** ./src/app/pages/equipment-io-page/equipment-io-page.component.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".equipment-page-io-vertical {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 0.5rem;\n}\n\n.h-100 {\n  height: 100%;\n}\n\n.equipment-page-io-horizontal {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.equipment-page-io-header {\n  max-width: 400px;\n  padding: 1rem;\n}\n\n.equipment-page-picture-wrapper {\n  overflow: hidden;\n  margin: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 0 1 200px;\n  max-height: 200px;\n  max-width: 200px;\n  border: 3px solid var(--ion-color-light);\n  border-radius: 2px;\n  color: var(--ion-color-medium);\n}\n\n.equipment-page-io-history {\n  margin: 1rem;\n  display: flex;\n  flex: 1 1;\n  border: 3px solid var(--ion-color-light);\n  border-radius: 2px;\n  min-width: 600px;\n  color: var(--ion-color-medium);\n}\n\n.equipment-back-button {\n  margin: 0 0 0 1rem;\n  cursor: pointer;\n}\n\n.equipment-page-info-container {\n  flex-shrink: 1;\n  justify-content: center;\n}\n\n.equipment-page-info-container-description {\n  flex-shrink: 1;\n  justify-content: center;\n  align-items: end;\n}\n\n.max-width-100 {\n  max-width: 250px;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.flex-grow {\n  flex-grow: 1;\n}\n\n.equipment-page-status-wrapper {\n  align-items: end;\n}\n\n.equipment-io-mobile-column {\n  flex-direction: column;\n  flex-grow: 0;\n  justify-content: center;\n  align-items: center;\n}\n\n.equipment-io-mobile-column .equipment-page-status-wrapper {\n  align-items: start;\n}\n\n.equipment-page-io-ordered > div:nth-child(1) {\n  order: 2;\n}\n\n.equipment-page-io-ordered > div:nth-child(2) {\n  order: 3;\n}\n\n.equipment-page-io-bottom-toolbar {\n  justify-content: center;\n  display: flex;\n  padding-right: 2rem;\n  padding-left: 2rem;\n  margin-bottom: 0.5rem;\n}\n\n.availability-dot {\n  display: inline-flex;\n  height: 15px;\n  width: 15px;\n  margin-left: 0.2rem;\n  border-radius: 50%;\n  justify-self: center;\n}\n\n.equipment-page-io-description-wrapper {\n  margin: 1rem 0.5rem 1rem 0.5rem;\n  padding: 1rem 0.5rem 0 0.5rem;\n  border: 3px solid var(--ion-color-light);\n  border-radius: 2px;\n}\n\n.equipment-page-io-text {\n  flex-grow: 1;\n  /*\n  margin: 0 0 0 0.75rem;\n  */\n}\n\n.equipment-page-io-label {\n  margin: 0 0 0.2rem 0;\n  min-width: 100px;\n  color: grey;\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwbWVudC1pby1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdFO0VBQ0Usa0JBQUE7QUFESjs7QUFNQTtFQUNFLFFBQUE7QUFIRjs7QUFNQTtFQUNFLFFBQUE7QUFIRjs7QUFNQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUhGOztBQU1BO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQTs7R0FBQTtBQURGOztBQU1BO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUhGIiwiZmlsZSI6ImVxdWlwbWVudC1pby1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVxdWlwbWVudC1wYWdlLWlvLXZlcnRpY2FsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmgtMTAwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5lcXVpcG1lbnQtcGFnZS1pby1ob3Jpem9udGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcXVpcG1lbnQtcGFnZS1pby1oZWFkZXIge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuXHJcbn1cclxuXHJcbi5lcXVpcG1lbnQtcGFnZS1waWN0dXJlLXdyYXBwZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4OiAwIDEgMjAwcHg7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbn1cclxuXHJcbi5lcXVpcG1lbnQtcGFnZS1pby1oaXN0b3J5IHtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxIDE7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWluLXdpZHRoOiA2MDBweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbn1cclxuXHJcbi5lcXVpcG1lbnQtYmFjay1idXR0b24ge1xyXG4gIG1hcmdpbjogMCAwIDAgMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5lcXVpcG1lbnQtcGFnZS1pbmZvLWNvbnRhaW5lciB7XHJcbiAgZmxleC1zaHJpbms6IDE7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcXVpcG1lbnQtcGFnZS1pbmZvLWNvbnRhaW5lci1kZXNjcmlwdGlvbiB7XHJcbiAgZmxleC1zaHJpbms6IDE7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGVuZDtcclxufVxyXG5cclxuLm1heC13aWR0aC0xMDAge1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcblxyXG4uZmxleC13cmFwIHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5mbGV4LWdyb3cge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmVxdWlwbWVudC1wYWdlLXN0YXR1cy13cmFwcGVyIHtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG59XHJcblxyXG4uZXF1aXBtZW50LWlvLW1vYmlsZS1jb2x1bW4ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5lcXVpcG1lbnQtcGFnZS1zdGF0dXMtd3JhcHBlciB7XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmVxdWlwbWVudC1wYWdlLWlvLW9yZGVyZWQgPiBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICBvcmRlcjogMjtcclxufVxyXG5cclxuLmVxdWlwbWVudC1wYWdlLWlvLW9yZGVyZWQgPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICBvcmRlcjogMztcclxufVxyXG5cclxuLmVxdWlwbWVudC1wYWdlLWlvLWJvdHRvbS10b29sYmFyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG59XHJcblxyXG4uYXZhaWxhYmlsaXR5LWRvdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAuMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lcXVpcG1lbnQtcGFnZS1pby1kZXNjcmlwdGlvbi13cmFwcGVye1xyXG4gIG1hcmdpbjogMXJlbSAuNXJlbSAxcmVtIC41cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gLjVyZW0gMCAuNXJlbTtcclxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmVxdWlwbWVudC1wYWdlLWlvLXRleHQge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvKlxyXG4gIG1hcmdpbjogMCAwIDAgMC43NXJlbTtcclxuICAqL1xyXG59XHJcblxyXG4uZXF1aXBtZW50LXBhZ2UtaW8tbGFiZWx7XHJcbiAgbWFyZ2luOjAgMCAwLjJyZW0gMDtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 24666:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/equipment-io-page/equipment-io-page.component.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons\r\n      *ngIf=\"this.showMobileMenu\"\r\n      slot=\"start\" class=\"back-button\" (click)=\"this.router.navigate(['/tabs/dashboard'])\">\r\n      <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Gerät: {{this.item?.model_name}}</ion-title>\r\n    <ion-buttons slot=\"primary\" *ngIf=\"this.showMobileMenu\">\r\n      <ion-button color=\"primary\" (click)=\"onMenuClicked()\">\r\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"equipment-page-io-vertical h-100\">\r\n\r\n    <div class=\"equipment-page-io-horizontal flex-wrap flex-grow\">\r\n\r\n      <div class=\"equipment-page-io-vertical flex-grow\">\r\n        <div class=\"equipment-page-io-horizontal equipment-page-io-ordered\"\r\n             [ngClass]=\"{ 'equipment-io-mobile-column': showMobileMenu }\">\r\n          <div class=\"equipment-page-picture-wrapper\">\r\n            <ion-img [src]=\"'assets/equipment/'+ (this.item?.photo || 'no-image.png')\"></ion-img>\r\n          </div>\r\n          <div class=\"equipment-page-io-vertical equipment-page-io-description-wrapper flex-grow\"\r\n              >\r\n\r\n            <div class=\"equipment-page-io-vertical\">\r\n              <label class=\"equipment-page-io-label\">Modell</label>\r\n              <ion-text class=\"equipment-page-io-text\"> {{this.item?.model_name || '-'}}</ion-text>\r\n            </div>\r\n            <div class=\"equipment-page-io-vertical\">\r\n              <label class=\"equipment-page-io-label\">Typ</label>\r\n              <ion-text class=\"equipment-page-io-text\">{{this.item?.item_type || '-'}}</ion-text>\r\n            </div>\r\n            <div class=\"equipment-page-io-vertical\">\r\n              <label class=\"equipment-page-io-label\">Seriennummer</label>\r\n              <ion-text class=\"equipment-page-io-text\">{{this.item?.serial_number || '-'}}</ion-text>\r\n            </div>\r\n            <div class=\"equipment-page-io-vertical\">\r\n              <label class=\"equipment-page-io-label\">Beschreibung</label>\r\n              <ion-text class=\"equipment-page-io-text\">{{this.item?.description}}</ion-text>\r\n            </div>\r\n          </div>\r\n          <div class=\"equipment-page-io-vertical equipment-page-status-wrapper\"\r\n               [ngStyle]=\"{'order': showMobileMenu ? 1:4}\">\r\n            <div style=\"padding: 1rem 1rem 0 1rem; white-space: nowrap\">Status: {{this.item?.status }}\r\n              , {{ this.getItemStatus(this.item?.status, this.item?.borrowed)}}\r\n              <span class=\"availability-dot\"\r\n                    [ngStyle]=\"{'background-color':\r\n                    getStatusColor(this.item?.status, this.item?.borrowed)}\"></span></div>\r\n            <div style=\"padding: .2rem 1rem 0 1rem; font-size: 0.75rem; color: grey\">ID: {{this.item?.dynamic_id}}</div>\r\n            <ion-button *ngIf=\"!showMobileMenu\" class=\"max-width-100 ion-padding btn-secondary\" [fill]=\"'outline'\"\r\n                        color=\"medium\" (click)=\"showQRCode()\">\r\n              QR Code {{!this.showCode ? 'anzeigen' : 'ausblenden'}}\r\n            </ion-button>\r\n            <div *ngIf=\"showCode === true\" class=\"equipment-page-qrcode ion-margin-top ion-margin-horizontal\">\r\n              <qrcode [qrdata]=\"this.item?.dynamic_id\" [width]=\"200\" [errorCorrectionLevel]=\"'M'\"></qrcode>\r\n            </div>\r\n            <ion-button *ngIf=\"!showMobileMenu\" class=\"max-width-100 ion-padding btn-secondary\" [fill]=\"'outline'\"\r\n                        color=\"medium\" (click)=\"navigateToUpdateItem()\">\r\n              Item bearbeiten\r\n            </ion-button>\r\n            <ion-button *ngIf=\"!showMobileMenu\" class=\"max-width-100 ion-padding btn-secondary\" [fill]=\"'outline'\"\r\n                        color=\"danger\" (click)=\"navigateToDefect()\">\r\n              {{this.item?.status === 'aktiv' ? 'Defekt melden' : 'Defekt bearbeiten'}}\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n        <div class=\"equipment-page-io-horizontal equipment-page-io-history\" *ngIf=\"!showMobileMenu\">\r\n          <app-history-list [filter]=\"{item_id: this.item?.dynamic_id}\"></app-history-list>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"equipment-page-io-bottom-toolbar\" [ngClass]=\"{ 'ion-justify-content-between': !showMobileMenu }\">\r\n      <div *ngIf=\"!showMobileMenu\">\r\n        <ion-button class=\"max-width-100\" color=\"primary\" [fill]=\"'outline'\"\r\n                    (click)=\"backButtonClicked()\">\r\n          Zurück\r\n        </ion-button>\r\n      </div>\r\n      <ion-button cy-data=\"equ-action\" class=\"max-width-100\" color=\"primary\"\r\n                  (click)=\"navigateToBookAndReturn()\"\r\n                  [disabled]=\" this.item?.status !== 'aktiv'\"\r\n\r\n      >\r\n        {{this.item?.borrowed ? 'Rücknahme' : 'Ausgabe'}}\r\n      </ion-button>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_equipment-io-page_equipment-io-page_module_ts.js.map