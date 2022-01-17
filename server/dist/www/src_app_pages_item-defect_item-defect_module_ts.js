(self["webpackChunkdigital_equipment_manager_ui"] = self["webpackChunkdigital_equipment_manager_ui"] || []).push([["src_app_pages_item-defect_item-defect_module_ts"],{

/***/ 34596:
/*!*****************************************************************!*\
  !*** ./src/app/pages/item-defect/item-defect-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDefectPageRoutingModule": () => (/* binding */ ItemDefectPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _item_defect_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-defect.page */ 80955);




const routes = [
    {
        path: '',
        component: _item_defect_page__WEBPACK_IMPORTED_MODULE_0__.ItemDefectPage
    }
];
let ItemDefectPageRoutingModule = class ItemDefectPageRoutingModule {
};
ItemDefectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemDefectPageRoutingModule);



/***/ }),

/***/ 32696:
/*!*********************************************************!*\
  !*** ./src/app/pages/item-defect/item-defect.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDefectPageModule": () => (/* binding */ ItemDefectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _item_defect_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-defect-routing.module */ 34596);
/* harmony import */ var _item_defect_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-defect.page */ 80955);







let ItemDefectPageModule = class ItemDefectPageModule {
};
ItemDefectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _item_defect_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemDefectPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_item_defect_page__WEBPACK_IMPORTED_MODULE_1__.ItemDefectPage]
    })
], ItemDefectPageModule);



/***/ }),

/***/ 80955:
/*!*******************************************************!*\
  !*** ./src/app/pages/item-defect/item-defect.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemDefectPage": () => (/* binding */ ItemDefectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_defect_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-defect.page.html */ 61808);
/* harmony import */ var _item_defect_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-defect.page.scss */ 17521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common-state.service */ 83827);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var _services_api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-services/item-resource.service */ 16764);
/* harmony import */ var _services_api_services_casuality_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api-services/casuality.service */ 81073);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);











let ItemDefectPage = class ItemDefectPage {
    constructor(router, state, actionSheetController, activeRoute, itemService, toastController, casualityService) {
        this.router = router;
        this.state = state;
        this.actionSheetController = actionSheetController;
        this.activeRoute = activeRoute;
        this.itemService = itemService;
        this.toastController = toastController;
        this.casualityService = casualityService;
        this.subscriptions = [];
        /** @internal */
        this.showMobileMenu = true;
        this.casualityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
        });
    }
    ngOnInit() {
        this.subscriptions.push(this.state.getSplitPaneVisible().subscribe((isVisible) => this.showMobileMenu = !isVisible));
        this.activeRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(params => {
            return this.itemService.getItemByCode(params.itemId);
        })).subscribe((item) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!item || item === 'NOT_FOUND') {
                this.presentToast('Es wurde keine Gerät mit diesem Code gefunden', 'danger', 2000, "bottom");
                yield this.router.navigate(['/tabs/dashboard']);
                return;
            }
            this.item = item;
            if (this.item.borrowed === true && this.item.status === 'aktiv') {
                this.presentToast('Achtung - Gerät ist aktuell ausgeborgt!', 'warning', 4000, "middle");
            }
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
    decommissionAndReturn() {
        this.postCasuality('dekommisioniert');
    }
    toggleActivateAndReturn() {
        this.postCasuality(this.item.status === 'aktiv' ? 'inaktiv' : 'aktiv');
    }
    postCasuality(status) {
        this.casualityForm.get('description').markAllAsTouched();
        const desc = this.casualityForm.get('description').value;
        if (!desc) {
            return;
        }
        this.casualityService.post({
            item_id: this.item.dynamic_id,
            status,
            description: desc,
        }, {}).subscribe(result => {
            if (result) {
                this.presentToast((status === 'aktiv' ? "Gerät aktiviert" : status === 'inaktiv' ? "Defekt gemeldet" : "Gerät dekommissioniert"), "success", 1000, 'middle');
                this.backButtonClicked();
                this.casualityForm.reset();
            }
            else {
                this.presentToast("Fehler beim anlegen des Defekts", "danger", 2000, 'middle');
            }
        });
    }
    presentToast(message, color, duration, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const p = yield this.toastController.create({ message, color, duration, position });
            yield p.present();
        });
    }
};
ItemDefectPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__.CommonStateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _services_api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_3__.ItemResourceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _services_api_services_casuality_service__WEBPACK_IMPORTED_MODULE_4__.ItemCasualityResourceService }
];
ItemDefectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-item-update',
        template: _raw_loader_item_defect_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_defect_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemDefectPage);



/***/ }),

/***/ 17521:
/*!*********************************************************!*\
  !*** ./src/app/pages/item-defect/item-defect.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".item-defect-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  padding-bottom: 1rem;\n}\n\n.item-update-flex-main {\n  display: flex;\n  flex-direction: column;\n}\n\n.item-update-flex-item-infos {\n  display: flex;\n  flex-direction: column;\n}\n\n.item-update-textarea {\n  border: solid #f6f7f9 2px;\n  border-radius: 6px;\n}\n\n.item-textarea {\n  border: solid #f6f7f9 1px;\n  border-radius: 6px;\n}\n\n.page-io-bottom-toolbar {\n  justify-content: center;\n  display: flex;\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tZGVmZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6Iml0ZW0tZGVmZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWRlZmVjdC13cmFwcGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uaXRlbS11cGRhdGUtZmxleC1tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5pdGVtLXVwZGF0ZS1mbGV4LWl0ZW0taW5mb3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLml0ZW0tdXBkYXRlLXRleHRhcmVhIHtcclxuICBib3JkZXI6IHNvbGlkICNmNmY3ZjkgMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLml0ZW0tdGV4dGFyZWEge1xyXG4gIGJvcmRlcjogc29saWQgI2Y2ZjdmOSAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4ucGFnZS1pby1ib3R0b20tdG9vbGJhciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 61808:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-defect/item-defect.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons\r\n      *ngIf=\"this.showMobileMenu\"\r\n      slot=\"start\" class=\"back-button\" (click)=\"backButtonClicked()\">\r\n      <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Equipment: {{this.item?.model_name}} / {{this.item?.status}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"item-defect-wrapper\">\r\n\r\n  <div class=\"item-defect-flex-main ion-margin ion-padding\">\r\n    <div class=\"item-defect-flex-item-infos\">\r\n      <p>Item Name: {{this.item?.model_name}}</p>\r\n      <p>Item Beschreibung: {{this.item?.description}}</p>\r\n    </div>\r\n    <form [formGroup]=\"this.casualityForm\" class=\"item-defect-textarea\">\r\n      <ion-item>\r\n        <ion-input\r\n                   formControlName=\"description\"\r\n                   placeholder=\"{{'Begründung'}}\"\r\n        ></ion-input>\r\n      </ion-item>\r\n\r\n    </form>\r\n\r\n  </div>\r\n  <div class=\"page-io-bottom-toolbar\" [ngClass]=\"{ 'ion-justify-content-between': !showMobileMenu }\">\r\n    <div *ngIf=\"!showMobileMenu\">\r\n      <ion-button class=\"max-width-100\" color=\"primary\" [fill]=\"'outline'\"\r\n                  (click)=\"backButtonClicked()\">\r\n        Zurück\r\n      </ion-button>\r\n    </div>\r\n    <ion-button class=\"max-width-100\" color=\"danger\" [fill]=\"'outline'\"\r\n                [disabled]=\"this.item?.status === 'dekommisioniert'\"\r\n                (click)=\"decommissionAndReturn()\">\r\n      Dekommissionieren\r\n    </ion-button>\r\n    <ion-button class=\"max-width-100\" [color]=\"this.item?.status === 'aktiv' ? 'danger' : 'success'\"\r\n                [disabled]=\"this.item?.status === 'dekommisioniert'\"\r\n                (click)=\"toggleActivateAndReturn()\">\r\n      {{this.item?.status === 'aktiv' ? 'Defekt melden' : 'aktivieren'}}\r\n    </ion-button>\r\n  </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_item-defect_item-defect_module_ts.js.map