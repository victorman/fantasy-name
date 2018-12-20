(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <app-name-generator></app-name-generator>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'fantasy-name';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _name_generator_name_generator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./name-generator/name-generator.component */ "./src/app/name-generator/name-generator.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _name_generator_name_generator_component__WEBPACK_IMPORTED_MODULE_4__["NameGeneratorComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <h1 class=\"navbar-brand\">Fantasy Name Generator</h1>\r\n    </div>\r\n  </div>\r\n\r\n</nav>\r\n<!--\r\n<div class=\"input-group mb-3\">\r\n  <div class=\"input-group-prepend\">\r\n    <div class=\"input-group-text\">\r\n      <input type=\"checkbox\" aria-label=\"Checkbox for following text input\">\r\n    </div>\r\n  </div>\r\n  <input type=\"text\" class=\"form-control\" aria-label=\"Text input with checkbox\">\r\n</div>\r\n<div class=\"input-group mb-3\">\r\n  <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n  <div class=\"input-group-append\">\r\n    <span class=\"input-group-text\" id=\"basic-addon2\">@example.com</span>\r\n  </div>\r\n</div>\r\n/-->\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/name-generator/name-generator.component.css":
/*!*************************************************************!*\
  !*** ./src/app/name-generator/name-generator.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hbWUtZ2VuZXJhdG9yL25hbWUtZ2VuZXJhdG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/name-generator/name-generator.component.html":
/*!**************************************************************!*\
  !*** ./src/app/name-generator/name-generator.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <form class=\"form-inline\">\r\n    <div class=\"input-group px-2\">\r\n      <div class=\"input-group-prepend\">\r\n        <div class=\"input-group-text\">\r\n          <input class=\"form-inline\" type=\"checkbox\" [(ngModel)]=\"useMaleFirstNames\" name=\"maleFirstName\">\r\n        </div>\r\n      </div>\r\n      <span class=\"input-group-text\">Male First</span>\r\n    </div>\r\n    <div class=\"input-group px-2\">\r\n      <div class=\"input-group-prepend\">\r\n        <div class=\"input-group-text\">\r\n          <input class=\"form-inline\" type=\"checkbox\" [(ngModel)]=\"useMaleLastNames\" name=\"maleLastName\">\r\n        </div>\r\n      </div>\r\n      <span class=\"input-group-text\">Male Last</span>\r\n    </div>\r\n    <div class=\"input-group px-2\">\r\n      <div class=\"input-group-prepend\">\r\n        <div class=\"input-group-text\">\r\n          <input class=\"form-inline\" type=\"checkbox\" [(ngModel)]=\"useFemaleFirstNames\" name=\"femaleFirstName\">\r\n        </div>\r\n      </div>\r\n      <span class=\"input-group-text\">Female First</span>\r\n    </div>\r\n    <div class=\"input-group px-2\">\r\n      <div class=\"input-group-prepend\">\r\n        <div class=\"input-group-text\">\r\n          <input class=\"form-inline\" type=\"checkbox\" [(ngModel)]=\"useFemaleLastNames\" name=\"femaleLastName\">\r\n        </div>\r\n      </div>\r\n      <span class=\"input-group-text\">Female Last</span>\r\n    </div>\r\n    <div class=\"input-group px-2\">\r\n      <div class=\"input-group-prepend\">\r\n        <div class=\"input-group-text\">\r\n          <input class=\"form-inline\" type=\"checkbox\" [(ngModel)]=\"useNeutralLastNames\" name=\"neutralLastName\">\r\n        </div>\r\n      </div>\r\n      <span class=\"input-group-text\">Neutral Last</span>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <input type=\"text\" class=\"form-control\" readonly [value]=\"getName()\">\r\n  </div>\r\n  <div class=\"col-sm-2\">\r\n    <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClick()\">Next Name</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/name-generator/name-generator.component.ts":
/*!************************************************************!*\
  !*** ./src/app/name-generator/name-generator.component.ts ***!
  \************************************************************/
/*! exports provided: NameGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameGeneratorComponent", function() { return NameGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_names_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/names.model */ "./src/app/shared/names.model.ts");



var NameGeneratorComponent = /** @class */ (function () {
    function NameGeneratorComponent() {
        this.firstNames = [];
        this.lastNames = [];
        this.useMaleFirstNames = true;
        this.useMaleLastNames = true;
        this.useFemaleFirstNames = false;
        this.useFemaleLastNames = false;
        this.useNeutralLastNames = true;
    }
    NameGeneratorComponent.prototype.ngOnInit = function () {
        this.onClick();
    };
    NameGeneratorComponent.prototype.onClick = function () {
        this.firstNames = [];
        this.lastNames = [];
        if (this.useMaleFirstNames) {
            this.firstNames = this.firstNames.concat(_shared_names_model__WEBPACK_IMPORTED_MODULE_2__["Names"].maleFirstNames);
        }
        if (this.useFemaleFirstNames) {
            this.firstNames = this.firstNames.concat(_shared_names_model__WEBPACK_IMPORTED_MODULE_2__["Names"].femaleFirstNames);
        }
        if (this.useMaleLastNames) {
            this.lastNames = this.lastNames.concat(_shared_names_model__WEBPACK_IMPORTED_MODULE_2__["Names"].maleLastNames);
        }
        if (this.useFemaleLastNames) {
            this.lastNames = this.lastNames.concat(_shared_names_model__WEBPACK_IMPORTED_MODULE_2__["Names"].femaleLastNames);
        }
        if (this.useNeutralLastNames) {
            this.lastNames = this.lastNames.concat(_shared_names_model__WEBPACK_IMPORTED_MODULE_2__["Names"].neutralLastNames);
        }
        var nfirst = Math.floor(Math.random() * this.firstNames.length);
        var nlast = Math.floor(Math.random() * this.lastNames.length);
        // console.log(this.firstNames.length);
        // console.log(n);
        this.firstValue = this.firstNames[nfirst];
        this.lastValue = this.lastNames[nlast];
    };
    NameGeneratorComponent.prototype.getFirstName = function () {
        return this.firstValue;
    };
    NameGeneratorComponent.prototype.getLastName = function () {
        return this.lastValue;
    };
    NameGeneratorComponent.prototype.getName = function () {
        return this.getFirstName() + ' ' + this.getLastName();
    };
    NameGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-name-generator',
            template: __webpack_require__(/*! ./name-generator.component.html */ "./src/app/name-generator/name-generator.component.html"),
            styles: [__webpack_require__(/*! ./name-generator.component.css */ "./src/app/name-generator/name-generator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NameGeneratorComponent);
    return NameGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/shared/names.model.ts":
/*!***************************************!*\
  !*** ./src/app/shared/names.model.ts ***!
  \***************************************/
/*! exports provided: Names */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Names", function() { return Names; });
var Names = /** @class */ (function () {
    function Names() {
    }
    Names.maleFirstNames = [
        'Alfred',
        'Ned',
        'Conan',
        'Merlin',
        'Edwin',
        'Drizzt',
        'Drax'
    ];
    Names.maleLastNames = [
        'Din-Maker',
        'Hammer-Din',
        'The Anvil',
        'Strongjaw',
        'Stout-drought'
    ];
    Names.femaleFirstNames = [
        'Ursila',
        'Yvonne',
        'Aurora',
        'Jezabelle',
        'Ingred'
    ];
    Names.femaleLastNames = [
        'The Seductress',
        'The Eternal Beauty',
        'The Enchantress',
        'Duchess of Pain',
    ];
    Names.neutralLastNames = [
        'The Terrible',
        'Dark-Blade',
        'Plague-Tongue',
        'The Savage',
        'The Destroyer',
        'Man-Slayer'
    ];
    return Names;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vfrandsen\Code\angular\fantasy-name\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map