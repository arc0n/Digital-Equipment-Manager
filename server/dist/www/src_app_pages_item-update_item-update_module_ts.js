(self["webpackChunkdigital_equipment_manager_ui"] = self["webpackChunkdigital_equipment_manager_ui"] || []).push([["src_app_pages_item-update_item-update_module_ts"],{

/***/ 76975:
/*!*****************************************************************!*\
  !*** ./src/app/pages/item-update/item-update-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemUpdatePageRoutingModule": () => (/* binding */ ItemUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _item_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-update.page */ 41406);




const routes = [
    {
        path: '',
        component: _item_update_page__WEBPACK_IMPORTED_MODULE_0__.ItemUpdatePage
    }
];
let ItemUpdatePageRoutingModule = class ItemUpdatePageRoutingModule {
};
ItemUpdatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemUpdatePageRoutingModule);



/***/ }),

/***/ 95399:
/*!*********************************************************!*\
  !*** ./src/app/pages/item-update/item-update.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemUpdatePageModule": () => (/* binding */ ItemUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _item_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-update-routing.module */ 76975);
/* harmony import */ var _item_update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-update.page */ 41406);







let ItemUpdatePageModule = class ItemUpdatePageModule {
};
ItemUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _item_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemUpdatePageRoutingModule
        ],
        declarations: [_item_update_page__WEBPACK_IMPORTED_MODULE_1__.ItemUpdatePage]
    })
], ItemUpdatePageModule);



/***/ }),

/***/ 41406:
/*!*******************************************************!*\
  !*** ./src/app/pages/item-update/item-update.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemUpdatePage": () => (/* binding */ ItemUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-update.page.html */ 72424);
/* harmony import */ var _item_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-update.page.scss */ 23008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common-state.service */ 83827);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var _services_api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-services/item-resource.service */ 16764);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);










let ItemUpdatePage = class ItemUpdatePage {
    constructor(router, state, actionSheetController, activeRoute, itemService, toastController) {
        this.router = router;
        this.state = state;
        this.actionSheetController = actionSheetController;
        this.activeRoute = activeRoute;
        this.itemService = itemService;
        this.toastController = toastController;
        this.subscriptions = [];
        /** @internal */
        this.showMobileMenu = true;
        /** @internal  */
        this.updateItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            itemDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            itemSerialnumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        });
    }
    ngOnInit() {
        this.subscriptions.push(this.state.getSplitPaneVisible().subscribe((isVisible) => this.showMobileMenu = !isVisible));
        this.activeRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(params => {
            return this.itemService.getItemByCode(params.itemId);
        })).subscribe((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!item || item === 'NOT_FOUND') {
                this.presentToast('Es wurde keine Gerät mit diesem Code gefunden', 'danger', 2000, "bottom");
                yield this.router.navigate(['/tabs/dashboard']);
                return;
            }
            this.item = item;
            if (this.item.status !== 'aktiv') {
                this.presentToast('Achtung - Gerät ist aktuell defekt gemeldet', 'warning', 3000, "middle");
            }
            else if (this.item.borrowed === true) {
                this.presentToast('Achtung - Gerät ist aktuell ausgeborgt!', 'warning', 3000, "middle");
            }
            this.updateItemForm.setValue({
                itemName: this.item.model_name,
                itemDescription: this.item.description,
                itemSerialnumber: this.item.serial_number
            });
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    ;
    backButtonClicked() {
        this.router.navigate(['equipment'], {
            queryParams: { id: this.item.dynamic_id }
        });
    }
    presentToast(message, color, duration, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const p = yield this.toastController.create({ message, color, duration, position });
            yield p.present();
        });
    }
    saveAndReturn() {
        this.updateItemForm.markAllAsTouched();
        if (this.updateItemForm.invalid) {
            this.presentToast('Unvollständige Eingaben', 'danger', 2000, 'middle');
            return;
        }
        const rawValues = this.updateItemForm.getRawValue();
        const item = Object.assign(Object.assign({}, this.item), { description: rawValues.itemDescription,
            serial_number: rawValues.itemSerialnumber });
        this.itemService.put(item, {}, item.dynamic_id).subscribe(result => {
            if (result) {
                this.updateItemForm.reset();
                this.presentToast('Gerät bearbeitet', 'success', 2000, 'middle');
                this.backButtonClicked();
            }
            else {
                this.presentToast('Bearbeiten Fehlgeschlagen', 'danger', 3000, 'middle');
            }
        });
    }
};
ItemUpdatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__.CommonStateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _services_api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_3__.ItemResourceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController }
];
ItemUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-item-update',
        template: _raw_loader_item_update_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_update_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemUpdatePage);



/***/ }),

/***/ 23008:
/*!*********************************************************!*\
  !*** ./src/app/pages/item-update/item-update.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".item-update-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 1rem;\n  height: 100%;\n}\n\n.item-update-flex-main {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  min-width: 400px;\n}\n\n.item-update-flex-item-forms-card {\n  display: flex;\n  border: solid #f6f7f9 1px;\n  border-radius: 6px;\n  padding: 10px;\n  flex-direction: column;\n}\n\n.item-update-flex-item-form {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n\n.item-update-flex-item-form-info {\n  width: 140px;\n  min-width: 140px;\n}\n\n.item-update-flex-item-form-field {\n  display: flex;\n  flex: 1 1 400px;\n  border: solid grey 1px;\n  border-radius: 6px;\n}\n\n.item-update-textarea {\n  border: solid #f6f7f9 2px;\n  border-radius: 6px;\n}\n\n.page-io-bottom-toolbar {\n  justify-content: center;\n  display: flex;\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n\n.item-update-value-label {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tdXBkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRiIsImZpbGUiOiJpdGVtLXVwZGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS11cGRhdGUtd3JhcHBlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5pdGVtLXVwZGF0ZS1mbGV4LW1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLml0ZW0tdXBkYXRlLWZsZXgtaXRlbS1mb3Jtcy1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogc29saWQgI2Y2ZjdmOSAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLml0ZW0tdXBkYXRlLWZsZXgtaXRlbS1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uaXRlbS11cGRhdGUtZmxleC1pdGVtLWZvcm0taW5mbyB7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIG1pbi13aWR0aDogMTQwcHg7XHJcbn1cclxuXHJcbi5pdGVtLXVwZGF0ZS1mbGV4LWl0ZW0tZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxIDEgNDAwcHg7XHJcbiAgYm9yZGVyOiBzb2xpZCBncmV5IDFweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5pdGVtLXVwZGF0ZS10ZXh0YXJlYSB7XHJcbiAgYm9yZGVyOiBzb2xpZCAjZjZmN2Y5IDJweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbi5wYWdlLWlvLWJvdHRvbS10b29sYmFyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcbi5pdGVtLXVwZGF0ZS12YWx1ZS1sYWJlbHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 72424:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-update/item-update.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons\r\n      *ngIf=\"this.showMobileMenu\"\r\n      slot=\"start\" class=\"back-button\" (click)=\"backButtonClicked()\">\r\n      <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Equipment bearbeiten: {{this.item?.model_name}} / {{this.item?.status}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"item-update-wrapper\">\r\n    <!-- Form -->\r\n    <form class=\"item-update-flex-main\" [formGroup]=\"updateItemForm\">\r\n      <div class=\"item-update-flex-item-form item-update-value-label\">\r\n        <label class=\"item-update-flex-item-form-info\">\r\n          Type:\r\n        </label>\r\n        <div class=\"item-update-flex-item-form-info\">\r\n          <ion-text>{{this.item?.item_type}}</ion-text>\r\n        </div>\r\n      </div>\r\n      <div class=\"item-update-flex-item-form item-update-value-label\">\r\n        <label class=\"item-update-flex-item-form-info\">\r\n          Name:\r\n        </label>\r\n        <div class=\"item-update-flex-item-form-info\">\r\n          <ion-text>{{this.item?.model_name}}</ion-text>\r\n        </div>\r\n      </div>\r\n      <div class=\"item-update-flex-item-form\">\r\n        <label class=\"item-update-flex-item-form-info\">\r\n          Beschreibung:\r\n        </label>\r\n        <div class=\"item-update-flex-item-form-field\">\r\n          <ion-input value=\"{{this.item?.description}}\" formControlName=\"itemDescription\"></ion-input>\r\n        </div>\r\n      </div>\r\n      <div class=\"item-update-flex-item-form\">\r\n        <label class=\"item-update-flex-item-form-info\">\r\n          Seriennummer:\r\n        </label>\r\n        <div class=\"item-update-flex-item-form-field\">\r\n          <ion-input value=\"{{this.item?.serial_number}}\" formControlName=\"itemSerialnumber\"></ion-input>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n  <div class=\"page-io-bottom-toolbar\" [ngClass]=\"{ 'ion-justify-content-between': !showMobileMenu }\">\r\n    <div *ngIf=\"!showMobileMenu\">\r\n      <ion-button class=\"max-width-100\" color=\"primary\" [fill]=\"'outline'\"\r\n                  (click)=\"backButtonClicked()\">\r\n        Zurück\r\n      </ion-button>\r\n    </div>\r\n    <ion-button class=\"max-width-100\" color=\"primary\"\r\n                (click)=\"saveAndReturn()\">\r\n      Speichern\r\n    </ion-button>\r\n\r\n\r\n  </div></div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_item-update_item-update_module_ts.js.map