(self["webpackChunkdigital_equipment_manager_ui"] = self["webpackChunkdigital_equipment_manager_ui"] || []).push([["src_app_pages_equipment-add-page_equipment-add-page_module_ts"],{

/***/ 77737:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/equipment-add-page/equipment-add-page-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipmentAddPagePageRoutingModule": () => (/* binding */ EquipmentAddPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _equipment_add_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equipment-add-page.page */ 98357);




const routes = [
    {
        path: '',
        component: _equipment_add_page_page__WEBPACK_IMPORTED_MODULE_0__.EquipmentAddPagePage
    }
];
let EquipmentAddPagePageRoutingModule = class EquipmentAddPagePageRoutingModule {
};
EquipmentAddPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EquipmentAddPagePageRoutingModule);



/***/ }),

/***/ 48546:
/*!***********************************************************************!*\
  !*** ./src/app/pages/equipment-add-page/equipment-add-page.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipmentAddPagePageModule": () => (/* binding */ EquipmentAddPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _equipment_add_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./equipment-add-page-routing.module */ 77737);
/* harmony import */ var _equipment_add_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipment-add-page.page */ 98357);







let EquipmentAddPagePageModule = class EquipmentAddPagePageModule {
};
EquipmentAddPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _equipment_add_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.EquipmentAddPagePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_equipment_add_page_page__WEBPACK_IMPORTED_MODULE_1__.EquipmentAddPagePage]
    })
], EquipmentAddPagePageModule);



/***/ }),

/***/ 98357:
/*!*********************************************************************!*\
  !*** ./src/app/pages/equipment-add-page/equipment-add-page.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EquipmentAddPagePage": () => (/* binding */ EquipmentAddPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_equipment_add_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./equipment-add-page.page.html */ 83317);
/* harmony import */ var _equipment_add_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./equipment-add-page.page.scss */ 62940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common-state.service */ 83827);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-services/item-resource.service */ 16764);
/* harmony import */ var _services_api_services_item_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api-services/item-type.service */ 68255);
/* harmony import */ var _services_api_services_item_model_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api-services/item-model.service */ 90363);











let EquipmentAddPagePage = class EquipmentAddPagePage {
    constructor(router, state, toastController, actionSheetController, activeRoute, itemService, itemTypeService, itemModelService) {
        this.router = router;
        this.state = state;
        this.toastController = toastController;
        this.actionSheetController = actionSheetController;
        this.activeRoute = activeRoute;
        this.itemService = itemService;
        this.itemTypeService = itemTypeService;
        this.itemModelService = itemModelService;
        this.subscriptions = [];
        /** @internal */
        this.showMobileMenu = true;
        /** @internal  */
        this.addItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            itemType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            itemModel: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            itemSN: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            itemDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
        });
    }
    ngOnInit() {
        this.subscriptions.push(this.state.getSplitPaneVisible().subscribe((isVisible) => this.showMobileMenu = !isVisible));
        this.subscriptions.push(this.addItemForm.get("itemType").valueChanges.subscribe((value) => {
            var _a;
            this.addItemForm.get("itemModel").patchValue(null);
            this.filteredModelArray = (_a = this.modelArray) === null || _a === void 0 ? void 0 : _a.filter((model) => {
                return (model === null || model === void 0 ? void 0 : model.item_type_id) === (value === null || value === void 0 ? void 0 : value.id);
            });
        }));
        this.itemTypeService.getList({}).subscribe((types) => {
            this.typeArray = types;
        });
        this.itemModelService.getList({}).subscribe((models) => {
            this.modelArray = models;
        });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    backButtonClicked() {
        this.router.navigate(['/']);
    }
    //* Setzt Formular auf Standard zurück */
    resetForm() {
        this.addItemForm.reset();
    }
    onSubmit() {
        if (this.addItemForm.invalid) {
            this.presentToast('Unvollständige Eingabe', 'danger');
            return;
        }
        const rawValues = this.addItemForm.getRawValue();
        const newItem = {
            borrowed: false,
            description: rawValues.itemDescription,
            item_model_id: rawValues.itemModel.id,
            item_type: rawValues.itemType.name,
            item_type_id: rawValues.itemType.id,
            model_name: rawValues.itemModel.name,
            photo: this.getPhotoLink(rawValues.itemType),
            serial_number: rawValues.itemSN,
            status: "aktiv"
        };
        this.itemService.postItem(newItem).subscribe(result => {
            if (result !== 'INVALID_REQUIEST') {
                this.presentToast('Gerät angelegt', 'success').then(() => {
                    this.router.navigate(['/tabs/dashboard']);
                });
            }
            else {
                this.presentToast('Unvollständige Eingabe', 'danger');
            }
        });
    }
    presentToast(message, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const p = yield this.toastController.create({ message, color, duration: 3000 });
            yield p.present();
        });
    }
    getPhotoLink(itemType) {
        switch (itemType.id) {
            case 1: return 'equipment_schlagstock.jpeg';
            case 2: return 'equipment_taser.jpeg';
            case 3: return 'equipment_handschellen.jpeg';
            case 4: return 'equipment_spray.jpeg';
            case 5: return 'equipment_glock.jpeg';
        }
        return "";
    }
};
EquipmentAddPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_common_state_service__WEBPACK_IMPORTED_MODULE_2__.CommonStateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ActionSheetController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _services_api_services_item_resource_service__WEBPACK_IMPORTED_MODULE_3__.ItemResourceService },
    { type: _services_api_services_item_type_service__WEBPACK_IMPORTED_MODULE_4__.ItemTypeResourceService },
    { type: _services_api_services_item_model_service__WEBPACK_IMPORTED_MODULE_5__.ItemModelResourceService }
];
EquipmentAddPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-equipment-add-page',
        template: _raw_loader_equipment_add_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_equipment_add_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EquipmentAddPagePage);



/***/ }),

/***/ 62940:
/*!***********************************************************************!*\
  !*** ./src/app/pages/equipment-add-page/equipment-add-page.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".equipment-page-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  padding-bottom: 1rem;\n}\n\n.equipment-add-form-wrapper {\n  display: flex;\n  justify-content: center;\n  height: auto;\n}\n\n.equipment-add-form {\n  margin: 2rem;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  flex: 0 1 600px;\n  border: 3px solid var(--ion-color-light);\n  border-radius: 2px;\n  color: var(--ion-color-medium);\n  height: auto;\n}\n\n.equipment-add-form-item {\n  display: flex;\n}\n\n.equipment-add-bottom-collapsed {\n  display: flex;\n  justify-content: space-between;\n}\n\n.equipment-add-bottom-toolbar {\n  justify-content: center;\n  display: flex;\n  padding-right: 2rem;\n  padding-left: 2rem;\n  margin-bottom: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVxdWlwbWVudC1hZGQtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUdBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQUYiLCJmaWxlIjoiZXF1aXBtZW50LWFkZC1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcXVpcG1lbnQtcGFnZS13cmFwcGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZXF1aXBtZW50LWFkZC1mb3JtLXdyYXBwZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5lcXVpcG1lbnQtYWRkLWZvcm17XHJcbiAgbWFyZ2luOiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMCAxIDYwMHB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5lcXVpcG1lbnQtYWRkLWZvcm0taXRlbXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZXF1aXBtZW50LWFkZC1ib3R0b20tY29sbGFwc2VkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuXHJcbi5lcXVpcG1lbnQtYWRkLWJvdHRvbS10b29sYmFyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 83317:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/equipment-add-page/equipment-add-page.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons\r\n      *ngIf=\"this.showMobileMenu\"\r\n      slot=\"start\" class=\"back-button\" (click)=\"this.router.navigate(['/tabs/settings'])\">\r\n      <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Gerät hinzufügen</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"equipment-page-wrapper\">\r\n\r\n  <!-- Formular -->\r\n  <div class=\"equipment-add-form-wrapper\">\r\n    <form class=\"equipment-add-form\" [formGroup]=\"addItemForm\">\r\n        <ion-item>\r\n          <ion-icon name=\"journal\" class=\"ion-margin\"></ion-icon>\r\n          <ion-label>Type</ion-label>\r\n          <ion-select formControlName=\"itemType\" interface=\"popover\" placeholder=\"Wähle Type\">\r\n            <ion-select-option cy-data=\"type-test\" *ngFor=\"let type of typeArray\" [value]=\"type\">{{type.name}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"car\" class=\"ion-margin\"></ion-icon>\r\n          <ion-label>Modell</ion-label>\r\n          <ion-select formControlName=\"itemModel\" cy-data=\"model-dropdown\" interface=\"popover\" placeholder=\"Wähle Modell\">\r\n            <ion-select-option *ngFor=\"let model of filteredModelArray\" [value]=\"model\" cy-data=\"model-test\">{{model.name}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item class=\"equipment-add-form-item\">\r\n          <ion-icon name=\"keypad\" class=\"ion-margin\"></ion-icon>\r\n          <ion-label>Seriennummer</ion-label>\r\n          <ion-input placeholder=\"Seriennummer\"  formControlName=\"itemSN\"></ion-input>\r\n        </ion-item>\r\n        <ion-item class=\"equipment-add-form-item\">\r\n          <ion-icon name=\"chatbox-ellipses\" class=\"ion-margin\"></ion-icon>\r\n          <ion-label>Beschreibung</ion-label>\r\n          <ion-input placeholder=\"Beschreibung\"  formControlName=\"itemDescription\"></ion-input>\r\n        </ion-item>\r\n    </form>\r\n  </div>\r\n  <div class=\"equipment-add-bottom-toolbar\" [ngClass]=\"{'ion-justify-content-between': !showMobileMenu}\">\r\n    <div *ngIf=\"!showMobileMenu\">\r\n      <ion-button class=\"max-width-100\" color=\"primary\" [fill]=\"'outline'\"\r\n                  (click)=\"backButtonClicked()\">\r\n        Zurück\r\n      </ion-button>\r\n    </div>\r\n      <ion-button class=\"max-width-100\" [fill]=\"'outline'\" color=\"danger\" (click)=\"resetForm()\">\r\n        Formular zurücksetzen\r\n      </ion-button>\r\n      <ion-button class=\"max-width-100\" color=\"primary\" (click)=\"onSubmit()\" type=\"submit\">\r\n        Anlegen\r\n      </ion-button>\r\n  </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_equipment-add-page_equipment-add-page_module_ts.js.map