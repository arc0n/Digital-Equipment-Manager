(self["webpackChunkdigital_equipment_manager_ui"] = self["webpackChunkdigital_equipment_manager_ui"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth-guard.service */ 51110);
/* harmony import */ var _auth_neg_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/neg-auth-guard.service */ 97945);





const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs-page_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs-page/tabs.module */ 69957)).then(m => m.TabsPageModule),
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 71674)).then(m => m.AuthPageModule),
        canActivate: [_auth_neg_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.NegAuthGuardService],
    },
    {
        path: 'connection-page',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_connection-page_connection-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/connection-page/connection-page.module */ 12036)).then(m => m.ConnectionPagePageModule),
    },
    {
        path: 'equipment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_equipment-io-page_equipment-io-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/equipment-io-page/equipment-io-page.module */ 39579)).then(m => m.EquipmentIoPagePageModule),
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'equipment-io-page/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_equipment-io-page_equipment-io-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/equipment-io-page/equipment-io-page.module */ 39579)).then(m => m.EquipmentIoPagePageModule),
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'employee-dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_employee-dashboard_employee-dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/employee-dashboard/employee-dashboard.module */ 64052)).then(m => m.EmployeeDashboardPageModule),
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'equipment-add-page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_equipment-add-page_equipment-add-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/equipment-add-page/equipment-add-page.module */ 48546)).then(m => m.EquipmentAddPagePageModule),
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'employee-add-page',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_employee-add-page_employee-add-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/employee-add-page/employee-add-page.module */ 31408)).then(m => m.EmployeeAddPagePageModule),
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'booking-summary',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_booking-summary_booking-summary_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/booking-summary/booking-summary.module */ 9033)).then(m => m.BookingSummaryPageModule),
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'item-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_item-list-page_item-list-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/item-list-page/item-list-page.module */ 28893)).then(m => m.ItemListPagePageModule),
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
    },
    {
        path: 'item-defect',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_item-defect_item-defect_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/item-defect/item-defect.module */ 32696)).then(m => m.ItemDefectPageModule),
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'item-update',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_item-update_item-update_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/item-update/item-update.module */ 95399)).then(m => m.ItemUpdatePageModule),
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'item-history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_history-page_history-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/history-page/history-page.module */ 76554)).then(m => m.HistoryPagePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 46420);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/common-state.service */ 83827);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authentication.service */ 7053);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);









const MAIN_PAGE_LINKS = [
    { title: 'Home', url: '/tabs/dashboard', icon: 'home', secondary: false, disabled: false },
    { title: 'Mitarbeiter anlegen', url: '/employee-add-page', icon: 'person-add', secondary: false, disabled: false },
    { title: 'Gegenstand anlegen', url: '/equipment-add-page', icon: 'duplicate', secondary: false, disabled: false },
    { title: 'Geräteliste', url: '/item-list', icon: 'briefcase', secondary: false, disabled: false },
];
const EQUIPMENT_PAGE_LINKS_DEFAULT = [
    { title: 'Zurück zu Home', url: '/tabs/dashboard', icon: 'home', secondary: false, disabled: false },
    { title: 'Gerät', url: '/equipment', icon: 'settings', secondary: true, disabled: true },
    { title: 'Mitarbeiter verknüpfen', url: '/employee-dashboard', icon: 'log-out', secondary: true, disabled: true },
    { title: 'Übersicht', url: '/booking-summary', icon: 'log-out', secondary: true, disabled: true }
];
let AppComponent = class AppComponent {
    constructor(commonStateService, authService, router) {
        this.commonStateService = commonStateService;
        this.authService = authService;
        this.router = router;
        this.sidebarRoutes = MAIN_PAGE_LINKS;
        this.urlParser = new _angular_router__WEBPACK_IMPORTED_MODULE_5__.DefaultUrlSerializer();
        this.currentActiveEquipmentRoutes = lodash__WEBPACK_IMPORTED_MODULE_4__.clone(EQUIPMENT_PAGE_LINKS_DEFAULT);
    }
    ngOnInit() {
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(event => (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.ResolveEnd))).subscribe((resolveEndEvent) => {
            var _a, _b, _c, _d;
            const index = resolveEndEvent.url.match(/^\/equipment\?.*id/) ? 1 :
                resolveEndEvent.url.match(/^\/employee-dashboard.itemId/) ? 2 :
                    resolveEndEvent.url.match(/^\/booking-summary/) ? 3
                        : 0;
            const parsedUrl = this.urlParser.parse(resolveEndEvent.state.url);
            const segments = parsedUrl.root.children.primary.segments.map(seg => seg.path);
            if ((((_a = parsedUrl.queryParams) === null || _a === void 0 ? void 0 : _a.id) || ((_b = parsedUrl.queryParams) === null || _b === void 0 ? void 0 : _b.itemId))
                !== ((_d = (_c = this.currentActiveEquipmentRoutes[1]) === null || _c === void 0 ? void 0 : _c.params) === null || _d === void 0 ? void 0 : _d.id)) {
                this.currentActiveEquipmentRoutes = lodash__WEBPACK_IMPORTED_MODULE_4__.clone(EQUIPMENT_PAGE_LINKS_DEFAULT);
                this.sidebarRoutes = lodash__WEBPACK_IMPORTED_MODULE_4__.clone(EQUIPMENT_PAGE_LINKS_DEFAULT);
            }
            if (index) { // 0 is falsy
                this.currentActiveEquipmentRoutes[index] = Object.assign(Object.assign({}, this.currentActiveEquipmentRoutes[index]), { url: segments.join(''), params: parsedUrl.queryParams, disabled: false });
                this.sidebarRoutes = this.currentActiveEquipmentRoutes;
            }
            else {
                this.sidebarRoutes = lodash__WEBPACK_IMPORTED_MODULE_4__.clone(MAIN_PAGE_LINKS);
                this.currentActiveEquipmentRoutes = lodash__WEBPACK_IMPORTED_MODULE_4__.clone(EQUIPMENT_PAGE_LINKS_DEFAULT);
            }
        });
    }
    onSplitPaneChange(event) {
        var _a;
        this.commonStateService.setSplitPaneVisible(!!((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.visible));
    }
    logoutUser() {
        this.authService.logout().subscribe(() => {
            this.router.navigate(['/login']);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__.CommonStateService },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth-guard.service */ 51110);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authentication.service */ 7053);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage-angular */ 54925);
/* harmony import */ var _services_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/shared.module */ 5710);
/* harmony import */ var _auth_neg_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/neg-auth-guard.service */ 97945);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-moment */ 53034);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularx-qrcode */ 99263);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_api_services_token_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/api-services/token.interceptor */ 62963);
















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_11__.IonicStorageModule.forRoot(),
            _services_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            ngx_moment__WEBPACK_IMPORTED_MODULE_13__.MomentModule.forRoot({
                relativeTimeThresholdOptions: {
                    'm': 59
                }
            }),
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_14__.QRCodeModule,
        ],
        providers: [
            _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService,
            _auth_neg_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.NegAuthGuardService,
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService,
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HTTP_INTERCEPTORS,
                useClass: _services_api_services_token_interceptor__WEBPACK_IMPORTED_MODULE_6__.TokenInterceptor,
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 51110:
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);





let AuthGuardService = class AuthGuardService {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    canActivate() {
        return this.authenticationService.isAuthenticated().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(isLoggedIn => {
            if (!isLoggedIn)
                return this.router.parseUrl('/login');
            return true;
        }));
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AuthGuardService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], AuthGuardService);



/***/ }),

/***/ 97945:
/*!************************************************!*\
  !*** ./src/app/auth/neg-auth-guard.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NegAuthGuardService": () => (/* binding */ NegAuthGuardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authentication.service */ 7053);





let NegAuthGuardService = class NegAuthGuardService {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    canActivate() {
        return this.authenticationService.isAuthenticated().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(isLoggedIn => {
            if (isLoggedIn)
                return this.router.parseUrl('/');
            return true;
        }));
    }
};
NegAuthGuardService.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NegAuthGuardService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], NegAuthGuardService);



/***/ }),

/***/ 13561:
/*!***********************************************************!*\
  !*** ./src/app/components/app-logo/app-logo.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLogoComponent": () => (/* binding */ AppLogoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_logo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app-logo.component.html */ 94135);
/* harmony import */ var _app_logo_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-logo.component.scss */ 26413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let AppLogoComponent = class AppLogoComponent {
    constructor() { }
    ngOnInit() { }
};
AppLogoComponent.ctorParameters = () => [];
AppLogoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-logo',
        template: _raw_loader_app_logo_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_logo_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppLogoComponent);



/***/ }),

/***/ 18715:
/*!*****************************************************************************!*\
  !*** ./src/app/components/date-time-display/date-time-display.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateTimeDisplayComponent": () => (/* binding */ DateTimeDisplayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_date_time_display_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./date-time-display.component.html */ 38897);
/* harmony import */ var _date_time_display_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-time-display.component.scss */ 78330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);





let DateTimeDisplayComponent = class DateTimeDisplayComponent {
    constructor(zone, renderer) {
        this.zone = zone;
        this.renderer = renderer;
        this.zone.runOutsideAngular(() => {
            this.interval = setInterval(() => {
                var _a;
                this.renderer.setProperty((_a = this.myTimeDisplay) === null || _a === void 0 ? void 0 : _a.nativeElement, 'textContent', moment__WEBPACK_IMPORTED_MODULE_2__().format('HH:mm:ss'));
            }, 1);
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        var _a;
        (_a = this.interval) === null || _a === void 0 ? void 0 : _a.clear();
    }
};
DateTimeDisplayComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2 }
];
DateTimeDisplayComponent.propDecorators = {
    myTimeDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['timedisplay',] }]
};
DateTimeDisplayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-date-time-display',
        template: _raw_loader_date_time_display_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_date_time_display_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DateTimeDisplayComponent);



/***/ }),

/***/ 8533:
/*!*******************************************************************!*\
  !*** ./src/app/components/history-list/history-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryListComponent": () => (/* binding */ HistoryListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_history_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./history-list.component.html */ 42492);
/* harmony import */ var _history_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history-list.component.scss */ 42962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_services_booking_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/booking-resource.service */ 36145);





let HistoryListComponent = class HistoryListComponent {
    constructor(bookingsService) {
        this.bookingsService = bookingsService;
        this.bookings = [];
        this.filter = {};
        this.bookingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.fetchBookings(this.filter);
    }
    ngOnChanges(changes) {
        if (changes.filter && !changes.filter.firstChange && this.filter) {
            this.fetchBookings(this.filter);
        }
    }
    fetchBookings(filter) {
        this.bookingsService.getAllBookings(filter).subscribe((bookings) => {
            this.bookings = bookings;
        });
    }
};
HistoryListComponent.ctorParameters = () => [
    { type: _services_api_services_booking_resource_service__WEBPACK_IMPORTED_MODULE_2__.BookingResourceService }
];
HistoryListComponent.propDecorators = {
    showItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    bookingClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
HistoryListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-history-list',
        template: _raw_loader_history_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_history_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HistoryListComponent);



/***/ }),

/***/ 33501:
/*!*************************************************************!*\
  !*** ./src/app/components/item-list/item-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemListComponent": () => (/* binding */ ItemListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_item_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./item-list.component.html */ 53603);
/* harmony import */ var _item_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-list.component.scss */ 41984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api-services/item-resource.service */ 16764);
/* harmony import */ var _services_common_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common-state.service */ 83827);






let ItemListComponent = class ItemListComponent {
    constructor(itemService, state) {
        this.itemService = itemService;
        this.state = state;
        /** @internal */
        this.showMobileMenu = true;
        /** @internal */
        this.subscription = [];
        this.itemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        this.fetchBookings({});
        this.subscription.push(this.state.getSplitPaneVisible().subscribe((isVisible) => this.showMobileMenu = !isVisible));
    }
    ngOnDestroy() {
        this.subscription.forEach(s => s.unsubscribe());
    }
    ngOnChanges(changes) {
        if (changes.filter && !changes.filter.firstChange && this.filter) {
            this.fetchBookings(this.filter);
        }
    }
    fetchBookings(filter) {
        this.itemService.getList(filter).subscribe((items) => {
            this.items = items;
            this.sortItems();
        });
    }
    sortItems() {
        this.items.sort((item1, item2) => {
            return item1.status < item2.status ? -1 : (item1.status === item2.status ? 0 : 1);
        });
        this.items.sort((item1, item2) => {
            return item1.borrowed === item2.borrowed ? 0 : (item1.borrowed ? 1 : -1);
        });
    }
    emitItemClick(item) {
        this.itemClicked.emit(item);
    }
};
ItemListComponent.ctorParameters = () => [
    { type: _services_api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_2__.ItemResourceService },
    { type: _services_common_state_service__WEBPACK_IMPORTED_MODULE_3__.CommonStateService }
];
ItemListComponent.propDecorators = {
    itemClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
ItemListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-item-list',
        template: _raw_loader_item_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_item_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemListComponent);



/***/ }),

/***/ 97728:
/*!*************************************************************************!*\
  !*** ./src/app/components/qr-scan-control/qr-scan-control.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScanControlComponent": () => (/* binding */ QrScanControlComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_qr_scan_control_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./qr-scan-control.component.html */ 7716);
/* harmony import */ var _qr_scan_control_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-scan-control.component.scss */ 36762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common-state.service */ 83827);






let QrScanControlComponent = class QrScanControlComponent {
    constructor(stateService) {
        this.stateService = stateService;
        /** shows or hides the continue button */
        this.showContinueButton = true;
        /** shows or hides the scan qr button */
        this.showQrButton = true;
        /** emitted when the qr button was clicked*/
        this.onQrClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        /** emitted when input value changes / user make a input */
        this.onValueInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        /** emits the input value every time the continue button was pressed */
        this.onContinueBtnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        /** @internal */
        this.qrInputForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            qrInputControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
        });
        this.subscriptions = [];
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    ngOnInit() {
        this.subscriptions.push(this.qrInputForm.get('qrInputControl').valueChanges.subscribe(value => {
            this.onValueInputChange.emit(value);
        }));
        if (this.resetControls) {
            this.resetControls.subscribe(() => {
                this.qrInputForm.reset();
            });
        }
    }
    scanBtnClicked(event) {
        this.onQrClick.emit(event);
    }
    continueButtonPressed() {
        this.onContinueBtnClick.emit(this.qrInputForm.get('qrInputControl').value);
    }
    getCustomStyles() {
        return this.customStyles;
    }
};
QrScanControlComponent.ctorParameters = () => [
    { type: _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__.CommonStateService }
];
QrScanControlComponent.propDecorators = {
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    showContinueButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    showQrButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    customStyles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    resetControls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    onQrClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    onValueInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    onContinueBtnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
QrScanControlComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-qr-control',
        template: _raw_loader_qr_scan_control_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_qr_scan_control_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QrScanControlComponent);



/***/ }),

/***/ 64949:
/*!*********************************************************!*\
  !*** ./src/app/components/qr-scan/qr-scan.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScanComponent": () => (/* binding */ QrScanComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_qr_scan_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./qr-scan.component.html */ 35606);
/* harmony import */ var _qr_scan_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-scan.component.scss */ 6693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsqr */ 40482);
/* harmony import */ var jsqr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsqr__WEBPACK_IMPORTED_MODULE_2__);






let QrScanComponent = class QrScanComponent {
    constructor(loadingCtl) {
        this.loadingCtl = loadingCtl;
        this.cancelClicked = () => {
        };
        this.qrCodeRead = () => {
        };
        this.scanActive = true;
    }
    ngOnInit() {
        var _a, _b;
        this.videoNativeElement = (_a = this.video) === null || _a === void 0 ? void 0 : _a.nativeElement;
        this.canvasNativeElement = (_b = this.canvas) === null || _b === void 0 ? void 0 : _b.nativeElement;
        this.canvasContext = this.canvasNativeElement.getContext("2d");
        this.startScan();
    }
    startScan() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtl.create();
            yield this.loading.present();
            this.videoNativeElement.srcObject = yield navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'environment'
                },
            });
            this.videoNativeElement.setAttribute('playsinline', 'true'); // to not get fullscrean on ios
            yield this.videoNativeElement.play();
            this.scanActive = true;
            requestAnimationFrame(this.scanCode.bind(this));
        });
    }
    scanCode() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.scanActive)
                return;
            if (this.videoNativeElement.readyState === this.videoNativeElement.HAVE_ENOUGH_DATA) {
                if (yield this.loading) {
                    this.loading.dismiss();
                }
                this.canvasNativeElement.height = this.videoNativeElement.videoHeight;
                this.canvasNativeElement.width = this.videoNativeElement.videoWidth;
                this.canvasContext.drawImage(this.videoNativeElement, 0, 0, this.canvasNativeElement.width, this.canvasNativeElement.height);
                const imageData = this.canvasContext.getImageData(0, 0, this.canvasNativeElement.width, this.canvasNativeElement.height);
                const code = this.processImageData(imageData);
                if (code) {
                    this.stopScan();
                    this.qrCodeRead(code.data);
                    return;
                }
            }
            requestAnimationFrame(this.scanCode.bind(this));
        });
    }
    stopScan() {
        this.scanActive = false;
        if (!!this.videoNativeElement.srcObject && "getTracks" in this.videoNativeElement.srcObject) {
            const tracks = this.videoNativeElement.srcObject.getTracks();
            tracks.forEach(track => track.stop());
        }
    }
    processImageData(imageData) {
        return jsqr__WEBPACK_IMPORTED_MODULE_2___default()(imageData.data, imageData.width, imageData.height, {});
    }
    cancelBtnClicked() {
        this.stopScan();
        this.cancelClicked();
    }
    onContinueButtonClicked(event) {
        console.log(event);
        this.stopScan();
        this.qrCodeRead(event);
        return;
    }
};
QrScanComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
QrScanComponent.propDecorators = {
    cancelClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    qrCodeRead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['video', { static: true },] }],
    canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['canvas', { static: true },] }]
};
QrScanComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-qr-scan',
        template: _raw_loader_qr_scan_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_qr_scan_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QrScanComponent);



/***/ }),

/***/ 73357:
/*!****************************************************************!*\
  !*** ./src/app/services/api-services/base-resource.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseResourceService": () => (/* binding */ BaseResourceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.service */ 71188);
/* harmony import */ var _common_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-state.service */ 83827);







const IP_KEY = 'server_ip';
const PORT_KEY = 'server_port';
let BaseResourceService = class BaseResourceService {
    constructor(http, storageSrv, stateSrv) {
        this.http = http;
        this.storageSrv = storageSrv;
        this.stateSrv = stateSrv;
        this.baseUrl = '';
        this.subscriptions = [];
        this.subscriptions.push(this.stateSrv.getServerConfigObservable().subscribe(({ ip, port }) => {
            this.baseUrl = `http://${ip}:${port}`;
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    getList(params) {
        return this.http.get(this.baseUrl + this.entityUrl, { params: params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.result), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            console.log(err);
            // TODO handle error for list
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
        }));
    }
    getByID(id, params) {
        if (!id)
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
        return this.http.get(this.baseUrl + this.entityUrl + `/${id}`, { params: params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            return this.handleError(err);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(resp => {
            return (resp === null || resp === void 0 ? void 0 : resp.result) || null;
        }));
    }
    post(entity, params) {
        if (!entity)
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
        return this.http.post(this.baseUrl + this.entityUrl, entity, { params: params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            return this.handleError(err);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(resp => {
            return (resp === null || resp === void 0 ? void 0 : resp.result) || null;
        }));
    }
    handleError(err) {
        console.log("err in service", err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(err.error);
    }
    put(entity, params, id) {
        if (!entity)
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
        const tmpId = !!id ? '/' + id : '';
        return this.http.put(this.baseUrl + this.entityUrl + tmpId, entity, { params: params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            return this.handleError(err);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(resp => {
            return resp === null || resp === void 0 ? void 0 : resp.result;
        }));
    }
};
BaseResourceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _common_state_service__WEBPACK_IMPORTED_MODULE_1__.CommonStateService }
];
BaseResourceService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], BaseResourceService);



/***/ }),

/***/ 36145:
/*!*******************************************************************!*\
  !*** ./src/app/services/api-services/booking-resource.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingResourceService": () => (/* binding */ BookingResourceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _base_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-resource.service */ 73357);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage.service */ 71188);
/* harmony import */ var _common_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-state.service */ 83827);







let BookingResourceService = class BookingResourceService extends _base_resource_service__WEBPACK_IMPORTED_MODULE_0__.BaseResourceService {
    constructor(http, storageSrv, stateSrv) {
        super(http, storageSrv, stateSrv);
        this.http = http;
        this.storageSrv = storageSrv;
        this.entityUrl = "/booking";
    }
    getAllBookings(params) {
        return this.getList(params);
    }
    getBookingsByPerson(personId, params) {
        return this.getList(Object.assign(Object.assign({}, params), { person_id: personId }));
    }
    getBookingsByItem(itemId, params) {
        return this.getList(Object.assign(Object.assign({}, params), { item_id: itemId }));
    }
    postBooking(booking) {
        return this.post(booking, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res));
    }
    putBooking(booking) {
        return this.put(booking, {});
    }
};
BookingResourceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _common_state_service__WEBPACK_IMPORTED_MODULE_2__.CommonStateService }
];
BookingResourceService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], BookingResourceService);



/***/ }),

/***/ 81073:
/*!************************************************************!*\
  !*** ./src/app/services/api-services/casuality.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemCasualityResourceService": () => (/* binding */ ItemCasualityResourceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _base_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-resource.service */ 73357);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage.service */ 71188);
/* harmony import */ var _common_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-state.service */ 83827);






let ItemCasualityResourceService = class ItemCasualityResourceService extends _base_resource_service__WEBPACK_IMPORTED_MODULE_0__.BaseResourceService {
    constructor(http, storageSrv, stateSrv) {
        super(http, storageSrv, stateSrv);
        this.http = http;
        this.storageSrv = storageSrv;
        this.entityUrl = "/casuality";
    }
};
ItemCasualityResourceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _common_state_service__WEBPACK_IMPORTED_MODULE_2__.CommonStateService }
];
ItemCasualityResourceService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], ItemCasualityResourceService);



/***/ }),

/***/ 90363:
/*!*************************************************************!*\
  !*** ./src/app/services/api-services/item-model.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemModelResourceService": () => (/* binding */ ItemModelResourceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _base_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-resource.service */ 73357);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage.service */ 71188);
/* harmony import */ var _common_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-state.service */ 83827);






let ItemModelResourceService = class ItemModelResourceService extends _base_resource_service__WEBPACK_IMPORTED_MODULE_0__.BaseResourceService {
    constructor(http, storageSrv, stateSrv) {
        super(http, storageSrv, stateSrv);
        this.http = http;
        this.storageSrv = storageSrv;
        this.entityUrl = "/itemmodel";
    }
};
ItemModelResourceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _common_state_service__WEBPACK_IMPORTED_MODULE_2__.CommonStateService }
];
ItemModelResourceService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], ItemModelResourceService);



/***/ }),

/***/ 16764:
/*!****************************************************************!*\
  !*** ./src/app/services/api-services/item-resource.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemResourceService": () => (/* binding */ ItemResourceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _base_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-resource.service */ 73357);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage.service */ 71188);
/* harmony import */ var _common_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-state.service */ 83827);







let ItemResourceService = class ItemResourceService extends _base_resource_service__WEBPACK_IMPORTED_MODULE_0__.BaseResourceService {
    constructor(http, storageSrv, stateSrv) {
        super(http, storageSrv, stateSrv);
        this.http = http;
        this.storageSrv = storageSrv;
        this.entityUrl = '/item';
    }
    getItemByCode(code) {
        return this.getByID(code, {});
    }
    getAllItems(filter) {
        return this.getList(filter);
    }
    postItem(item) {
        return this.post(item, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
            var _a, _b;
            if ((_a = res) === null || _a === void 0 ? void 0 : _a.id) {
                return (_b = res) === null || _b === void 0 ? void 0 : _b.id;
            }
            return res;
        }));
    }
};
ItemResourceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _common_state_service__WEBPACK_IMPORTED_MODULE_2__.CommonStateService }
];
ItemResourceService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], ItemResourceService);



/***/ }),

/***/ 68255:
/*!************************************************************!*\
  !*** ./src/app/services/api-services/item-type.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemTypeResourceService": () => (/* binding */ ItemTypeResourceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _base_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-resource.service */ 73357);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage.service */ 71188);
/* harmony import */ var _common_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-state.service */ 83827);






let ItemTypeResourceService = class ItemTypeResourceService extends _base_resource_service__WEBPACK_IMPORTED_MODULE_0__.BaseResourceService {
    constructor(http, storageSrv, stateSrv) {
        super(http, storageSrv, stateSrv);
        this.http = http;
        this.storageSrv = storageSrv;
        this.entityUrl = "/itemtype";
    }
};
ItemTypeResourceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _common_state_service__WEBPACK_IMPORTED_MODULE_2__.CommonStateService }
];
ItemTypeResourceService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], ItemTypeResourceService);



/***/ }),

/***/ 28502:
/*!******************************************************************!*\
  !*** ./src/app/services/api-services/person-resource.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonResourceService": () => (/* binding */ PersonResourceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _base_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-resource.service */ 73357);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage.service */ 71188);
/* harmony import */ var _common_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-state.service */ 83827);







let PersonResourceService = class PersonResourceService extends _base_resource_service__WEBPACK_IMPORTED_MODULE_0__.BaseResourceService {
    constructor(http, storageSrv, stateSrv) {
        super(http, storageSrv, stateSrv);
        this.http = http;
        this.storageSrv = storageSrv;
        this.entityUrl = "/person";
    }
    getPersonByName(searchString) {
        return this.getList({ name: searchString });
    }
    getPersonByCode(code) {
        return this.getByID(code, {});
    }
    getAllPersons() {
        return this.getList({});
    }
    postPerson(person) {
        return this.post(person, {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
            var _a, _b;
            if ((_a = res) === null || _a === void 0 ? void 0 : _a.id) {
                return (_b = res) === null || _b === void 0 ? void 0 : _b.id;
            }
            return res;
        }));
    }
};
PersonResourceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _common_state_service__WEBPACK_IMPORTED_MODULE_2__.CommonStateService }
];
PersonResourceService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], PersonResourceService);



/***/ }),

/***/ 62963:
/*!************************************************************!*\
  !*** ./src/app/services/api-services/token.interceptor.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptor": () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 15257);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authentication.service */ 7053);






let TokenInterceptor = class TokenInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.isRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    }
    intercept(request, next) {
        return this.authService.getJwt().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(jwt => {
            if (jwt) {
                request = this.addToken(request, jwt);
            }
            // @ts-ignore
            return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse && error.status === 403) {
                    console.log("Access token was invalid");
                    return this.handle403Error(request, next);
                }
                else {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
                }
            }));
        }));
    }
    addToken(request, token) {
        return request.clone({
            setHeaders: {
                'Authorization': "" + token
            }
        });
    }
    handle403Error(request, next) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.getRefreshToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((token) => {
                this.isRefreshing = false;
                this.refreshTokenSubject.next(token);
                return next.handle(this.addToken(request, token));
            }));
        }
        else {
            return this.refreshTokenSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(token => token != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(jwt => {
                return next.handle(this.addToken(request, jwt));
            }));
        }
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService }
];
TokenInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)()
], TokenInterceptor);



/***/ }),

/***/ 7053:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 69412);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 71188);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal-compatibility */ 693);
/* harmony import */ var _common_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-state.service */ 83827);









let AuthenticationService = class AuthenticationService {
    constructor(storage, platform, menu, http, stateSrv) {
        this.storage = storage;
        this.platform = platform;
        this.menu = menu;
        this.http = http;
        this.stateSrv = stateSrv;
        this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
        this.baseLink = "";
        this.platform.ready().then(() => {
            this.ifLoggedIn();
        });
        this.subscription = stateSrv.getServerConfigObservable().subscribe(config => {
            this.baseLink = `http://${config.ip}:${config.port}`;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ifLoggedIn() {
        return this.storage.get('JWT').then((response) => {
            if (response) {
                this.authState.next(true);
            }
            else {
                this.menu.enable(false, 'main-menu-id');
            }
        });
    }
    getJwt() {
        return (0,rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_3__.fromPromise)(this.storage.get('JWT'));
    }
    login(email, password) {
        return this.http.post(this.baseLink + '/login', { email, password }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((err) => {
            if (err.code === 403) {
                // do sth, login wrong
            }
            if (err.code === 404) {
                // do sth, no connection
            }
            console.log("login failed", err.code, err.message);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            if (!response) {
                return false;
            }
            else {
                this.storage.set('JWT', response.jwt);
                this.storage.set('REFRESH_TOKEN', response.refreshToken);
                // is logged in
                this.authState.next(true);
                this.menu.enable(true, 'main-menu-id');
                return true;
            }
        }));
    }
    logout() {
        this.getRefreshToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(token => {
            return this.http.post(this.baseLink + '/logout', { refreshToken: token });
        })).subscribe((res) => {
            // ignored
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(this.storage.remove('JWT').then(() => {
            this.storage.remove('REFRESH_TOKEN');
            this.authState.next(false);
            this.menu.enable(false, 'main-menu-id');
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mergeMap)(() => this.isAuthenticated()));
    }
    isAuthenticated() {
        return this.authState.asObservable();
    }
    getRefreshToken() {
        return (0,rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_3__.fromPromise)(this.storage.get('REFRESH_TOKEN'));
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _common_state_service__WEBPACK_IMPORTED_MODULE_1__.CommonStateService }
];
AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)()
], AuthenticationService);



/***/ }),

/***/ 83827:
/*!**************************************************!*\
  !*** ./src/app/services/common-state.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonStateService": () => (/* binding */ CommonStateService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 69412);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 71188);




const IP_KEY = 'server_ip';
const PORT_KEY = 'server_port';
let CommonStateService = class CommonStateService {
    constructor(storageSrv) {
        this.storageSrv = storageSrv;
        /**
         * holds the current state of visibility of the main navigation sidebar / ionic split pane
         * @private
         */
        this.splitPaneVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        /**
         * holds the current state of visibility of the main navigation sidebar / ionic split pane
         * @private
         */
        this.serverConfigChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({ ip: 'localhost', port: 3000 });
        this.getStoredConnectionData();
    }
    getStoredConnectionData() {
        var _a, _b;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(Promise.all([
            (_a = this.storageSrv) === null || _a === void 0 ? void 0 : _a.get(IP_KEY),
            (_b = this.storageSrv) === null || _b === void 0 ? void 0 : _b.get(PORT_KEY)
        ])).subscribe(([ip, port]) => {
            this.setServerConfig({ ip: ip || 'localhost', port: port || 3000 });
        });
    }
    setSplitPaneVisible(isVisible) {
        this.splitPaneVisible$.next(isVisible);
    }
    getSplitPaneVisible() {
        return this.splitPaneVisible$.asObservable();
    }
    setServerConfig(config) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield Promise.all([
                this.storageSrv.set(IP_KEY, config.ip),
                this.storageSrv.set(PORT_KEY, config.port)
            ]);
            this.serverConfigChanged$.next(config);
        });
    }
    getServerConfigObservable() {
        return this.serverConfigChanged$.asObservable();
    }
};
CommonStateService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
CommonStateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], CommonStateService);



/***/ }),

/***/ 5710:
/*!*******************************************!*\
  !*** ./src/app/services/shared.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 71188);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/storage-angular */ 54925);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ 7053);
/* harmony import */ var _components_qr_scan_qr_scan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/qr-scan/qr-scan.component */ 64949);
/* harmony import */ var _components_qr_scan_control_qr_scan_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/qr-scan-control/qr-scan-control.component */ 97728);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-services/item-resource.service */ 16764);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _api_services_person_resource_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api-services/person-resource.service */ 28502);
/* harmony import */ var _components_date_time_display_date_time_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/date-time-display/date-time-display.component */ 18715);
/* harmony import */ var _api_services_booking_resource_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api-services/booking-resource.service */ 36145);
/* harmony import */ var _components_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/history-list/history-list.component */ 8533);
/* harmony import */ var _components_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/item-list/item-list.component */ 33501);
/* harmony import */ var _api_services_item_type_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-services/item-type.service */ 68255);
/* harmony import */ var _api_services_item_model_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-services/item-model.service */ 90363);
/* harmony import */ var _components_app_logo_app_logo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/app-logo/app-logo.component */ 13561);
/* harmony import */ var _api_services_casuality_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api-services/casuality.service */ 81073);
var SharedModule_1;





















let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule_1,
            providers: [_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService,
                _authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService,
                _api_services_booking_resource_service__WEBPACK_IMPORTED_MODULE_7__.BookingResourceService,
                _api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_4__.ItemResourceService,
                _api_services_person_resource_service__WEBPACK_IMPORTED_MODULE_5__.PersonResourceService,
                _api_services_item_type_service__WEBPACK_IMPORTED_MODULE_10__.ItemTypeResourceService,
                _api_services_item_model_service__WEBPACK_IMPORTED_MODULE_11__.ItemModelResourceService,
                _api_services_casuality_service__WEBPACK_IMPORTED_MODULE_13__.ItemCasualityResourceService
            ]
        };
    }
};
SharedModule = SharedModule_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        imports: [
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_16__.IonicStorageModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule
        ],
        declarations: [
            _components_qr_scan_qr_scan_component__WEBPACK_IMPORTED_MODULE_2__.QrScanComponent,
            _components_qr_scan_control_qr_scan_control_component__WEBPACK_IMPORTED_MODULE_3__.QrScanControlComponent,
            _components_date_time_display_date_time_display_component__WEBPACK_IMPORTED_MODULE_6__.DateTimeDisplayComponent,
            _components_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_8__.HistoryListComponent,
            _components_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__.ItemListComponent,
            _components_app_logo_app_logo_component__WEBPACK_IMPORTED_MODULE_12__.AppLogoComponent
        ],
        exports: [
            _components_qr_scan_qr_scan_component__WEBPACK_IMPORTED_MODULE_2__.QrScanComponent,
            _components_qr_scan_control_qr_scan_control_component__WEBPACK_IMPORTED_MODULE_3__.QrScanControlComponent,
            _components_date_time_display_date_time_display_component__WEBPACK_IMPORTED_MODULE_6__.DateTimeDisplayComponent,
            _components_history_list_history_list_component__WEBPACK_IMPORTED_MODULE_8__.HistoryListComponent,
            _components_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_9__.ItemListComponent,
            _components_app_logo_app_logo_component__WEBPACK_IMPORTED_MODULE_12__.AppLogoComponent
        ]
    })
], SharedModule);



/***/ }),

/***/ 71188:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);



let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
        this._storage = null;
        this.init();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let readyFn;
            this.readyPromise = new Promise((res) => {
                readyFn = res;
            });
            this._storage = yield this.storage.create();
            readyFn();
        });
    }
    set(key, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.readyPromise;
            yield this._storage.set(key, value);
        });
    }
    get(key) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.readyPromise;
            return yield this._storage.get(key);
        });
    }
    remove(key) {
        return this.storage.remove(key);
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage }
];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], StorageService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		86030,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 26431,
	"./af.js": 26431,
	"./ar": 81286,
	"./ar-dz": 1616,
	"./ar-dz.js": 1616,
	"./ar-kw": 9759,
	"./ar-kw.js": 9759,
	"./ar-ly": 43160,
	"./ar-ly.js": 43160,
	"./ar-ma": 62551,
	"./ar-ma.js": 62551,
	"./ar-sa": 79989,
	"./ar-sa.js": 79989,
	"./ar-tn": 6962,
	"./ar-tn.js": 6962,
	"./ar.js": 81286,
	"./az": 15887,
	"./az.js": 15887,
	"./be": 14572,
	"./be.js": 14572,
	"./bg": 3276,
	"./bg.js": 3276,
	"./bm": 93344,
	"./bm.js": 93344,
	"./bn": 58985,
	"./bn-bd": 83990,
	"./bn-bd.js": 83990,
	"./bn.js": 58985,
	"./bo": 94391,
	"./bo.js": 94391,
	"./br": 46728,
	"./br.js": 46728,
	"./bs": 5536,
	"./bs.js": 5536,
	"./ca": 41043,
	"./ca.js": 41043,
	"./cs": 70420,
	"./cs.js": 70420,
	"./cv": 33513,
	"./cv.js": 33513,
	"./cy": 6771,
	"./cy.js": 6771,
	"./da": 47978,
	"./da.js": 47978,
	"./de": 46061,
	"./de-at": 25204,
	"./de-at.js": 25204,
	"./de-ch": 2653,
	"./de-ch.js": 2653,
	"./de.js": 46061,
	"./dv": 85,
	"./dv.js": 85,
	"./el": 8579,
	"./el.js": 8579,
	"./en-au": 25724,
	"./en-au.js": 25724,
	"./en-ca": 10525,
	"./en-ca.js": 10525,
	"./en-gb": 52847,
	"./en-gb.js": 52847,
	"./en-ie": 67216,
	"./en-ie.js": 67216,
	"./en-il": 39305,
	"./en-il.js": 39305,
	"./en-in": 73364,
	"./en-in.js": 73364,
	"./en-nz": 79130,
	"./en-nz.js": 79130,
	"./en-sg": 11161,
	"./en-sg.js": 11161,
	"./eo": 50802,
	"./eo.js": 50802,
	"./es": 40328,
	"./es-do": 45551,
	"./es-do.js": 45551,
	"./es-mx": 75615,
	"./es-mx.js": 75615,
	"./es-us": 64790,
	"./es-us.js": 64790,
	"./es.js": 40328,
	"./et": 96389,
	"./et.js": 96389,
	"./eu": 52961,
	"./eu.js": 52961,
	"./fa": 26151,
	"./fa.js": 26151,
	"./fi": 7997,
	"./fi.js": 7997,
	"./fil": 58898,
	"./fil.js": 58898,
	"./fo": 37779,
	"./fo.js": 37779,
	"./fr": 28174,
	"./fr-ca": 3287,
	"./fr-ca.js": 3287,
	"./fr-ch": 38867,
	"./fr-ch.js": 38867,
	"./fr.js": 28174,
	"./fy": 50452,
	"./fy.js": 50452,
	"./ga": 45014,
	"./ga.js": 45014,
	"./gd": 74127,
	"./gd.js": 74127,
	"./gl": 72124,
	"./gl.js": 72124,
	"./gom-deva": 6444,
	"./gom-deva.js": 6444,
	"./gom-latn": 37953,
	"./gom-latn.js": 37953,
	"./gu": 76604,
	"./gu.js": 76604,
	"./he": 1222,
	"./he.js": 1222,
	"./hi": 74235,
	"./hi.js": 74235,
	"./hr": 622,
	"./hr.js": 622,
	"./hu": 37735,
	"./hu.js": 37735,
	"./hy-am": 90402,
	"./hy-am.js": 90402,
	"./id": 59187,
	"./id.js": 59187,
	"./is": 30536,
	"./is.js": 30536,
	"./it": 35007,
	"./it-ch": 94667,
	"./it-ch.js": 94667,
	"./it.js": 35007,
	"./ja": 62093,
	"./ja.js": 62093,
	"./jv": 80059,
	"./jv.js": 80059,
	"./ka": 66870,
	"./ka.js": 66870,
	"./kk": 80880,
	"./kk.js": 80880,
	"./km": 1083,
	"./km.js": 1083,
	"./kn": 68785,
	"./kn.js": 68785,
	"./ko": 21721,
	"./ko.js": 21721,
	"./ku": 37851,
	"./ku.js": 37851,
	"./ky": 1727,
	"./ky.js": 1727,
	"./lb": 40346,
	"./lb.js": 40346,
	"./lo": 93002,
	"./lo.js": 93002,
	"./lt": 64035,
	"./lt.js": 64035,
	"./lv": 56927,
	"./lv.js": 56927,
	"./me": 5634,
	"./me.js": 5634,
	"./mi": 94173,
	"./mi.js": 94173,
	"./mk": 86320,
	"./mk.js": 86320,
	"./ml": 11705,
	"./ml.js": 11705,
	"./mn": 31062,
	"./mn.js": 31062,
	"./mr": 92805,
	"./mr.js": 92805,
	"./ms": 11341,
	"./ms-my": 59900,
	"./ms-my.js": 59900,
	"./ms.js": 11341,
	"./mt": 37734,
	"./mt.js": 37734,
	"./my": 19034,
	"./my.js": 19034,
	"./nb": 9324,
	"./nb.js": 9324,
	"./ne": 46495,
	"./ne.js": 46495,
	"./nl": 70673,
	"./nl-be": 76272,
	"./nl-be.js": 76272,
	"./nl.js": 70673,
	"./nn": 72486,
	"./nn.js": 72486,
	"./oc-lnc": 46219,
	"./oc-lnc.js": 46219,
	"./pa-in": 2829,
	"./pa-in.js": 2829,
	"./pl": 78444,
	"./pl.js": 78444,
	"./pt": 53170,
	"./pt-br": 66117,
	"./pt-br.js": 66117,
	"./pt.js": 53170,
	"./ro": 96587,
	"./ro.js": 96587,
	"./ru": 39264,
	"./ru.js": 39264,
	"./sd": 42135,
	"./sd.js": 42135,
	"./se": 95366,
	"./se.js": 95366,
	"./si": 93379,
	"./si.js": 93379,
	"./sk": 46143,
	"./sk.js": 46143,
	"./sl": 196,
	"./sl.js": 196,
	"./sq": 21082,
	"./sq.js": 21082,
	"./sr": 91621,
	"./sr-cyrl": 98963,
	"./sr-cyrl.js": 98963,
	"./sr.js": 91621,
	"./ss": 41404,
	"./ss.js": 41404,
	"./sv": 55685,
	"./sv.js": 55685,
	"./sw": 3872,
	"./sw.js": 3872,
	"./ta": 54106,
	"./ta.js": 54106,
	"./te": 39204,
	"./te.js": 39204,
	"./tet": 83692,
	"./tet.js": 83692,
	"./tg": 86361,
	"./tg.js": 86361,
	"./th": 31735,
	"./th.js": 31735,
	"./tk": 1568,
	"./tk.js": 1568,
	"./tl-ph": 96129,
	"./tl-ph.js": 96129,
	"./tlh": 13759,
	"./tlh.js": 13759,
	"./tr": 81644,
	"./tr.js": 81644,
	"./tzl": 90875,
	"./tzl.js": 90875,
	"./tzm": 16878,
	"./tzm-latn": 11041,
	"./tzm-latn.js": 11041,
	"./tzm.js": 16878,
	"./ug-cn": 74357,
	"./ug-cn.js": 74357,
	"./uk": 74810,
	"./uk.js": 74810,
	"./ur": 86794,
	"./ur.js": 86794,
	"./uz": 28966,
	"./uz-latn": 77959,
	"./uz-latn.js": 77959,
	"./uz.js": 28966,
	"./vi": 35386,
	"./vi.js": 35386,
	"./x-pseudo": 23156,
	"./x-pseudo.js": 23156,
	"./yo": 68028,
	"./yo.js": 68028,
	"./zh-cn": 9330,
	"./zh-cn.js": 9330,
	"./zh-hk": 89380,
	"./zh-hk.js": 89380,
	"./zh-mo": 60874,
	"./zh-mo.js": 60874,
	"./zh-tw": 96508,
	"./zh-tw.js": 96508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 46420:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.secondary-link {\n  margin-left: 1rem;\n  font-size: smaller;\n}\n\n.flex-grow {\n  flex-grow: 1;\n}\n\n.flex-column {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.datetime-wrapper {\n  margin-left: 1rem;\n}\n\n.main-date {\n  margin-top: -15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBU0E7RUFDRSxZQUFBO0FBTkY7O0FBUUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBTEY7O0FBT0E7RUFDRSxpQkFBQTtBQUpGOztBQU1BO0VBQ0UsaUJBQUE7QUFIRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcclxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgbWluLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcblxyXG4gIGNvbG9yOiAjNzU3NTc1O1xyXG5cclxuICBtaW4taGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjNjE2ZTdlO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjNzM4NDlhO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5pb24tbm90ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG59XHJcblxyXG5pb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5LWxpbmt7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi5mbGV4LWdyb3d7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcbi5mbGV4LWNvbHVtbiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uZGF0ZXRpbWUtd3JhcHBlcntcclxuICBtYXJnaW4tbGVmdDoxcmVtXHJcbn1cclxuLm1haW4tZGF0ZXtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 26413:
/*!*************************************************************!*\
  !*** ./src/app/components/app-logo/app-logo.component.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".flex-logo {\n  display: flex;\n  justify-content: start;\n  margin-top: -20px;\n  max-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6ImFwcC1sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtbG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 78330:
/*!*******************************************************************************!*\
  !*** ./src/app/components/date-time-display/date-time-display.component.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  margin: 0;\n  padding: 0;\n}\n\nspan {\n  font-size: 3rem;\n  padding-left: 5px;\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtdGltZS1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJkYXRlLXRpbWUtZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 42962:
/*!*********************************************************************!*\
  !*** ./src/app/components/history-list/history-list.component.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host {\n  width: 100%;\n}\n\nion-list {\n  width: 100%;\n}\n\nion-item {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7QUFFRiIsImZpbGUiOiJoaXN0b3J5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 41984:
/*!***************************************************************!*\
  !*** ./src/app/components/item-list/item-list.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".grid {\n  display: grid;\n  grid-template-columns: [type] 37% [model] 17% [status] 16% [borrowed] 30%;\n  flex-grow: 1;\n}\n\n.margin-spacing {\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5RUFDRTtFQUlGLFlBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7QUFIRiIsImZpbGUiOiJpdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6XHJcbiAgICBbdHlwZV0gMzclXHJcbiAgICBbbW9kZWxdIDE3JVxyXG4gICAgW3N0YXR1c10gMTYlXHJcbiAgICBbYm9ycm93ZWRdIDMwJTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5tYXJnaW4tc3BhY2luZyB7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 36762:
/*!***************************************************************************!*\
  !*** ./src/app/components/qr-scan-control/qr-scan-control.component.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".qr-scan-wrapper {\n  display: block;\n}\n\n.qr-scan-horizontal {\n  margin: 0.5rem 0.25rem 0 0.25rem;\n  display: flex;\n  justify-content: center;\n}\n\n.qr-control {\n  flex-basis: 100px;\n  max-width: 300px;\n  border: 2px solid var(--ion-color-light);\n  border-radius: 2px;\n  box-sizing: border-box;\n}\n\n.qr-control-button {\n  --border-radius: 0;\n  margin: 0;\n  height: 41px;\n}\n\n.qr-control-next-button {\n  width: 100%;\n  max-width: 307px;\n}\n\n.qr-control-next-button-small {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLXNjYW4tY29udHJvbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7QUFFRiIsImZpbGUiOiJxci1zY2FuLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXItc2Nhbi13cmFwcGVye1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5xci1zY2FuLWhvcml6b250YWx7XHJcbiAgbWFyZ2luOiAuNXJlbSAuMjVyZW0gMCAuMjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnFyLWNvbnRyb2x7XHJcbiAgZmxleC1iYXNpczogMTAwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5xci1jb250cm9sLWJ1dHRvbntcclxuICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgbWFyZ2luOjA7XHJcbiAgaGVpZ2h0OiA0MXB4O1xyXG59XHJcblxyXG5cclxuLnFyLWNvbnRyb2wtbmV4dC1idXR0b257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzMDdweDtcclxufVxyXG5cclxuLnFyLWNvbnRyb2wtbmV4dC1idXR0b24tc21hbGx7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 6693:
/*!***********************************************************!*\
  !*** ./src/app/components/qr-scan/qr-scan.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".qr-scanner-header {\n  margin: 2rem 1rem 2rem 1rem;\n}\n\n.qr-scanner-horizontal {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 1rem 0 1rem;\n  align-items: end;\n}\n\n.qr-scanner-wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.qr-scanner-video-element-container {\n  margin: 1rem 2rem;\n  min-height: 306px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLXNjYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InFyLXNjYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXItc2Nhbm5lci1oZWFkZXJ7XHJcbiAgbWFyZ2luOiAycmVtIDFyZW0gMnJlbSAxcmVtO1xyXG59XHJcblxyXG4ucXItc2Nhbm5lci1ob3Jpem9udGFse1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbjogMCAxcmVtIDAgMXJlbTtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG59XHJcblxyXG4ucXItc2Nhbm5lci13cmFwcGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5xci1zY2FubmVyLXZpZGVvLWVsZW1lbnQtY29udGFpbmVye1xyXG4gIG1hcmdpbjogMXJlbSAycmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDMwNnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-split-pane contentId=\"main-content\" (ionSplitPaneVisible)=\"onSplitPaneChange($event)\">\r\n    <ion-menu contentId=\"main-content\" menuId=\"main-menu-id\" type=\"overlay\">\r\n      <ion-content>\r\n        <div class=\"flex-column\">\r\n          <app-logo></app-logo>\r\n          <div class=\"datetime-wrapper\">\r\n            <app-date-time-display></app-date-time-display>\r\n            <ion-note class=\"main-date\"> {{mydate | amLocal | amDateFormat: 'dddd, DD.MM.YYYY'}}</ion-note>\r\n          </div>\r\n\r\n\r\n            <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let link of sidebarRoutes; let i = index\">\r\n              <ion-item\r\n                [ngClass]=\"{\r\n               'secondary-link': link.secondary\r\n              }\"\r\n                routerDirection=\"root\"\r\n                [routerLink]=\"[link.url]\"\r\n                [queryParams]=\"link.params || {}\"\r\n                lines=\"none\"\r\n                detail=\"false\"\r\n                routerLinkActive=\"selected\"\r\n                [disabled]=\"link.disabled\">\r\n                <ion-icon slot=\"start\" [ios]=\"link.icon + '-outline'\" [md]=\"link.icon + '-sharp'\"></ion-icon>\r\n                <ion-label>{{ link.title }}</ion-label>\r\n\r\n              </ion-item>\r\n            </ion-menu-toggle>\r\n\r\n          <div class=\"flex-grow flex-column ion-justify-content-end\">\r\n            <ion-item button class=\"ion-justify-content-between ion-color-medium\" (click)=\"logoutUser()\">\r\n              <ion-label>Logout</ion-label>\r\n              <ion-icon name=\"log-out\"></ion-icon>\r\n            </ion-item>\r\n          </div>\r\n\r\n        </div>\r\n      </ion-content>\r\n\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n");

/***/ }),

/***/ 94135:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/app-logo/app-logo.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"flex-logo\">\r\n  <img src=\"../assets/images/DEM.png\" alt=\"Digital Equipment Manager Logo\" />\r\n</div>\r\n");

/***/ }),

/***/ 38897:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/date-time-display/date-time-display.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\r\n  <span #timedisplay></span>\r\n</p>\r\n");

/***/ }),

/***/ 42492:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/history-list/history-list.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list>\r\n\r\n  <ion-list-header>\r\n    <ion-label *ngIf=\"this.showItem\"> Equipment Typ</ion-label>\r\n    <ion-label *ngIf=\"this.showItem\">Modell</ion-label>\r\n    <ion-label>Vorname</ion-label>\r\n    <ion-label>Nachname</ion-label>\r\n    <ion-label>Datum Ausgabe</ion-label>\r\n    <ion-label>Datum Rückgabe</ion-label>\r\n  </ion-list-header>\r\n\r\n  <ion-item *ngFor=\"let booking of bookings\" (click)=\"this.bookingClicked.emit(booking)\"\r\n   [ngStyle]=\"{\r\n   'cursor': this.clickable? 'pointer' : ''\r\n   }\"\r\n  >\r\n      <ion-label *ngIf=\"showItem\"> {{ booking.item.item_type }}</ion-label>\r\n      <ion-label *ngIf=\"showItem\"> {{ booking.item.model_name }}</ion-label>\r\n      <ion-label> {{ booking.person?.firstname }}</ion-label>\r\n      <ion-label> {{ booking.person?.lastname }}</ion-label>\r\n      <ion-label> {{ (booking.datetime_out | date ) || '-' }}</ion-label>\r\n      <ion-label> {{ (booking.datetime_in | date ) || '-' }}</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n");

/***/ }),

/***/ 53603:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/item-list/item-list.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list>\r\n  <div class=\"grid margin-spacing\">\r\n    <ion-label>Item Typ</ion-label>\r\n    <ion-label class=\"ion-text-end\">Model</ion-label>\r\n    <ion-label class=\"ion-text-end\">Status</ion-label>\r\n    <ion-label class=\"ion-text-end\">Verfügbar</ion-label>\r\n  </div>\r\n  <ion-item *ngFor=\"let item of items\" [ngClass]=\"{borrowedItem: item.borrowed}\" (click)=\"emitItemClick(item)\" class=\"clickable\">\r\n    <div class=\"grid\">\r\n      <ion-label> {{ item.item_type || '-' }}</ion-label>\r\n      <ion-label class=\"ion-text-end\"> {{ item.model_name || '-' }}</ion-label>\r\n      <ion-label [ngStyle]=\"{'color':item.status == 'inaktiv' ? 'red' : '#4CAF50'}\" class=\"ion-text-end\"> {{ item.status || '-' }}</ion-label>\r\n      <ion-label [ngStyle]=\"{'color':item.borrowed === true ? '#FBC02D' : '#4CAF50'}\" class=\"ion-text-end\"> {{ !!item.borrowed ? 'Nein' : 'Ja'  }}</ion-label>\r\n    </div>\r\n  </ion-item>\r\n</ion-list>\r\n");

/***/ }),

/***/ 7716:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/qr-scan-control/qr-scan-control.component.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"qr-scan-wrapper\"   [style]=\"getCustomStyles()\">\r\n    <div class=\"qr-scan-horizontal\">\r\n      <form [formGroup]=\"qrInputForm\">\r\n        <ion-input\r\n          class=\"qr-control\"\r\n          [placeholder]=\"placeholder\"\r\n          formControlName=\"qrInputControl\"\r\n        ></ion-input>\r\n      </form>\r\n\r\n      <ion-button\r\n        *ngIf=\"this.showQrButton\"\r\n        class=\"qr-control-button\" color=\"primary\"\r\n\r\n        (click)=\"scanBtnClicked($event)\">\r\n        <ion-icon name=\"qr-code-sharp\"></ion-icon>\r\n        <span style=\"padding-left: .5rem\">Scan</span>\r\n      </ion-button>\r\n    </div>\r\n\r\n  <div class=\"qr-scan-horizontal\">\r\n    <ion-button\r\n      class=\"qr-control-next-button\"\r\n      [ngClass]=\"{'qr-control-next-button-small': this.stateService.getSplitPaneVisible() |async\r\n      }\"\r\n      *ngIf=\"showContinueButton\"\r\n      (click)=\"continueButtonPressed()\">Weiter</ion-button>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ 35606:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/qr-scan/qr-scan.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"qr-scanner-wrapper\">\r\n  <ion-item class=\"qr-scanner-header\">\r\n    Bitte Scannen Sie Ihren Qr Code or tippen Sie diesen alternative in das untenstehende Feld\r\n  </ion-item>\r\n  <div class=\"qr-scanner-video-element-container\">\r\n    <video #video [hidden]=\"!scanActive\" width=\"100%\"></video>\r\n    <canvas style=\"border: 1px solid green\" #canvas hidden></canvas>\r\n  </div>\r\n\r\n  <div class=\"qr-scanner-horizontal\">\r\n    <app-qr-control [showQrButton]=\"false\"\r\n                    (onContinueBtnClick)=\"onContinueButtonClicked($event)\"\r\n                    [customStyles]=\"{\r\n                    'flex-direction': 'row',\r\n                    'display': 'flex'    }\"\r\n    >\r\n    </app-qr-control>\r\n\r\n    <ion-button (click)=\"cancelBtnClicked()\" color=\"light\">cancel</ion-button>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map