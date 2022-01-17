(self["webpackChunkdigital_equipment_manager_ui"] = self["webpackChunkdigital_equipment_manager_ui"] || []).push([["src_app_pages_connection-page_connection-page_module_ts"],{

/***/ 90748:
/*!*************************************************************************!*\
  !*** ./src/app/pages/connection-page/connection-page-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionPagePageRoutingModule": () => (/* binding */ ConnectionPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _connection_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection-page.page */ 98113);




const routes = [
    {
        path: '',
        component: _connection_page_page__WEBPACK_IMPORTED_MODULE_0__.ConnectionPagePage
    }
];
let ConnectionPagePageRoutingModule = class ConnectionPagePageRoutingModule {
};
ConnectionPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConnectionPagePageRoutingModule);



/***/ }),

/***/ 12036:
/*!*****************************************************************!*\
  !*** ./src/app/pages/connection-page/connection-page.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionPagePageModule": () => (/* binding */ ConnectionPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _connection_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection-page-routing.module */ 90748);
/* harmony import */ var _connection_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection-page.page */ 98113);







let ConnectionPagePageModule = class ConnectionPagePageModule {
};
ConnectionPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _connection_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConnectionPagePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_connection_page_page__WEBPACK_IMPORTED_MODULE_1__.ConnectionPagePage]
    })
], ConnectionPagePageModule);



/***/ }),

/***/ 98113:
/*!***************************************************************!*\
  !*** ./src/app/pages/connection-page/connection-page.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionPagePage": () => (/* binding */ ConnectionPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_connection_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./connection-page.page.html */ 88613);
/* harmony import */ var _connection_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection-page.page.scss */ 6637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common-state.service */ 83827);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 54395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);











let ConnectionPagePage = class ConnectionPagePage {
    constructor(router, state, toastController, http) {
        this.router = router;
        this.state = state;
        this.toastController = toastController;
        this.http = http;
        this.subscriptions = [];
        /** @internal */
        this.showMobileMenu = true;
        /** @internal */
        this.connectionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            serverIpAddr: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            serverPort: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        });
        /** @internal */
        this.isConnected = false;
        /** @internal */
        this.testSuccessful = null;
        /** @internal */
        this.disableButtons = false;
        /** @internal */
        this.isLoading = false;
    }
    ngOnInit() {
        this.subscriptions.push(this.state.getSplitPaneVisible().subscribe((isVisible) => this.showMobileMenu = !isVisible));
        this.state.getServerConfigObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(serverUrl => {
            this.triggerConnectionTest(serverUrl.ip, serverUrl.port);
            this.connectionForm.patchValue({ 'serverIpAddr': serverUrl.ip, 'serverPort': serverUrl.port }, { emitEvent: false });
        });
        this.subscriptions.push(this.connectionForm.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(1000))
            .subscribe((rawVal) => {
            this.triggerConnectionTest(rawVal.serverIpAddr, rawVal.serverPort);
        }));
    }
    ;
    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
    triggerConnectionTest(ip, port) {
        this.http.get(this.getServerString(ip, port) + '/ping').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
        })).subscribe(res => {
            if (res) {
                this.testSuccessful = true;
                this.state.setServerConfig({ ip, port });
            }
            else {
                this.testSuccessful = false;
            }
        });
    }
    getServerString(serverIpAddr, serverPort) {
        return `http://${serverIpAddr}:${serverPort}`;
    }
};
ConnectionPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__.CommonStateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient }
];
ConnectionPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-connection-page',
        template: _raw_loader_connection_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_connection_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConnectionPagePage);



/***/ }),

/***/ 6637:
/*!*****************************************************************!*\
  !*** ./src/app/pages/connection-page/connection-page.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.connection-page-form {\n  margin-top: 1rem;\n}\n\n.connect-wrapper {\n  margin: 0.5rem;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24tcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGIiwiZmlsZSI6ImNvbm5lY3Rpb24tcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13cmFwcGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb25uZWN0aW9uLXBhZ2UtZm9ybXtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uY29ubmVjdC13cmFwcGVye1xyXG4gIG1hcmdpbjogLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 88613:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/connection-page/connection-page.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons\r\n      *ngIf=\"this.showMobileMenu\"\r\n      slot=\"start\" class=\"back-button\" (click)=\"this.router.navigate(['/tabs/settings'])\">\r\n      <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Verbindungseinstellungen</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div class=\"content-wrapper\">\r\n  <form class=\"connection-page-form\" [formGroup]=\"connectionForm\">\r\n    <ion-item>\r\n      <ion-label>Server IP-Adresse: </ion-label>\r\n      <ion-input formControlName=\"serverIpAddr\" placeholder=\"xxx.xxx.xxx.xxx\"></ion-input>\r\n    </ion-item>\r\n    <ion-item type=\"number\">\r\n      <ion-label>Server Port: </ion-label>\r\n      <ion-input formControlName=\"serverPort\" placeholder=\"1234\"></ion-input>\r\n    </ion-item>\r\n  </form>\r\n  <div class=\"connect-wrapper\">\r\n    <ion-item button [disabled]=\"disableButtons ||this.testSuccessful == null\" (click)=\"this.triggerConnectionTest(this.connectionForm.get('serverIpAddr').value,this.connectionForm.get('serverPort').value)\">\r\n      <ion-label>\r\n        {{ this.testSuccessful == null ? 'teste verbindung...' : this.testSuccessful ? 'Server verbunden' : 'Keine Verbindung zum Server'}}\r\n      </ion-label>\r\n      <ion-icon [color]=\"this.testSuccessful === null ? 'medium' : this.testSuccessful ? 'primary' : 'danger'\" slot=\"end\"\r\n                [name]=\"this.testSuccessful === null ? 'wifi-outline' : this.testSuccessful ? 'checkmark-outline' : 'refresh-outline'\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <ion-item *ngIf=\"!showMobileMenu\">\r\n    <ion-button (click)=\"this.router.navigate(['/'])\">Zurück</ion-button>\r\n  </ion-item>\r\n</div>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_connection-page_connection-page_module_ts.js.map