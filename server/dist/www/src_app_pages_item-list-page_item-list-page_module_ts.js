(self["webpackChunkdigital_equipment_manager_ui"] = self["webpackChunkdigital_equipment_manager_ui"] || []).push([["src_app_pages_item-list-page_item-list-page_module_ts"],{

/***/ 65700:
/*!***********************************************************************!*\
  !*** ./src/app/pages/item-list-page/item-list-page-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemListPagePageRoutingModule": () => (/* binding */ ItemListPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _item_list_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-list-page.page */ 25462);




const routes = [
    {
        path: '',
        component: _item_list_page_page__WEBPACK_IMPORTED_MODULE_0__.ItemListPagePage
    }
];
let ItemListPagePageRoutingModule = class ItemListPagePageRoutingModule {
};
ItemListPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemListPagePageRoutingModule);



/***/ }),

/***/ 28893:
/*!***************************************************************!*\
  !*** ./src/app/pages/item-list-page/item-list-page.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemListPagePageModule": () => (/* binding */ ItemListPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _item_list_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-list-page-routing.module */ 65700);
/* harmony import */ var _item_list_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-list-page.page */ 25462);
/* harmony import */ var _services_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shared.module */ 5710);








let ItemListPagePageModule = class ItemListPagePageModule {
};
ItemListPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _item_list_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemListPagePageRoutingModule,
            _services_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_item_list_page_page__WEBPACK_IMPORTED_MODULE_1__.ItemListPagePage]
    })
], ItemListPagePageModule);



/***/ }),

/***/ 25462:
/*!*************************************************************!*\
  !*** ./src/app/pages/item-list-page/item-list-page.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemListPagePage": () => (/* binding */ ItemListPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_list_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-list-page.page.html */ 88921);
/* harmony import */ var _item_list_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-list-page.page.scss */ 53324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common-state.service */ 83827);






let ItemListPagePage = class ItemListPagePage {
    constructor(router, state) {
        this.router = router;
        this.state = state;
        this.subscriptions = [];
        /** @internal */
        this.showMobileMenu = false;
    }
    ngOnInit() {
        this.subscriptions.push(this.state.getSplitPaneVisible().subscribe((isVisible) => this.showMobileMenu = !isVisible));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    itemClicked(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.router.navigate(['equipment'], { queryParams: { id: event.dynamic_id }, replaceUrl: true });
        });
    }
};
ItemListPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__.CommonStateService }
];
ItemListPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-item-list-page',
        template: _raw_loader_item_list_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_list_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemListPagePage);



/***/ }),

/***/ 53324:
/*!***************************************************************!*\
  !*** ./src/app/pages/item-list-page/item-list-page.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLWxpc3QtcGFnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 88921:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/item-list-page/item-list-page.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons\r\n      *ngIf=\"this.showMobileMenu\"\r\n      slot=\"start\" class=\"back-button\" (click)=\"this.router.navigate(['/tabs/settings'])\">\r\n      <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Geräteliste</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<app-item-list (itemClicked)=\"itemClicked($event)\"></app-item-list>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_item-list-page_item-list-page_module_ts.js.map