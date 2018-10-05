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

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_prequestions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/prequestions.component */ "./src/app/components/prequestions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { CommonModule } from '@angular/common';


var routes = [
    { path: 'product-selector', component: _components_prequestions_component__WEBPACK_IMPORTED_MODULE_2__["PrequestionsComponent"] },
    { path: '', redirectTo: '/product-selector', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    \n         \n            <div class=\"col-sm-12 test\"><a href=\"#\" class=\"btn\">Leave product selector</a></div>\n        \n   \n</header>\n<div class=\"bodycontent col-sm-12\">\n\n<router-outlet></router-outlet>\n</div>\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions.service */ "./src/app/questions.service.ts");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/question */ "./src/app/models/question.ts");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/product */ "./src/app/models/product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(questionsService) {
        this.questionsService = questionsService;
        this.prequestions = [];
        this.questions = [];
        this.products = [];
        this.filterTags = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.getQuestions();
    };
    AppComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionsService.getQuestions().subscribe(function (data) {
            _this.qs = data;
            _this.title = data["appname"];
            data['prequestions'].forEach(function (prequestion) {
                var q = new _models_question__WEBPACK_IMPORTED_MODULE_2__["Question"]();
                q.question = prequestion[0];
                var keys1 = Object.keys(prequestion[1]);
                keys1.forEach(function (key) {
                    //console.log(key + ' ' + question[1][key])
                    var nv = new _models_question__WEBPACK_IMPORTED_MODULE_2__["SelectValue"]();
                    nv.name = prequestion[1][key].text;
                    nv.value = prequestion[1][key].value;
                    q.answers.push(nv);
                });
                q.sortOrder = prequestion[2];
                _this.prequestions.push(q);
            });
            data['questions'].forEach(function (question) {
                var q = new _models_question__WEBPACK_IMPORTED_MODULE_2__["Question"]();
                q.question = question[0];
                var keys2 = Object.keys(question[1]);
                keys2.forEach(function (key) {
                    //console.log(key + ' ' + question[1][key])
                    var nv = new _models_question__WEBPACK_IMPORTED_MODULE_2__["SelectValue"]();
                    nv.name = key;
                    nv.value = question[1][key];
                    q.answers.push(nv);
                });
                q.sortOrder = question[2];
                _this.questions.push(q);
            });
        }, function (err) { return console.error(err); }, function () {
            console.log("Questions Loaded");
            _this.getProducts();
        });
    };
    AppComponent.prototype.getProducts = function () {
        var _this = this;
        this.questionsService.getProducts().subscribe(function (data) {
            data["products"].forEach(function (element) {
                //var productKeys = Object.keys(element[1]);
                var p = new _models_product__WEBPACK_IMPORTED_MODULE_3__["Product"]();
                p.product = element['product'];
                p.tags = element['tags'];
                p.sortOrder = element['sortorder'];
                _this.products.push(p);
            });
        }, function (err) { return console.error(err); }, function () {
            console.log("Products Loaded");
        });
    };
    AppComponent.prototype.onChange = function (event) {
        var newVal = event.target.value;
        console.log(newVal);
        var thisId = event.target.id;
        switch (thisId) {
            case "select--0":
                if (newVal != "none") {
                    this.question0 = newVal;
                }
                else {
                    this.question0 = "";
                }
                break;
            case "select--1":
                if (newVal != "none") {
                    this.question1 = newVal;
                }
                else {
                    this.question1 = "";
                }
                break;
            case "select--2":
                if (newVal != "none") {
                    this.question2 = newVal;
                }
                else {
                    this.question2 = "";
                }
                break;
            case "select--3":
                if (newVal != "none") {
                    this.question3 = newVal;
                }
                else {
                    this.question3 = "";
                }
                break;
            case "select--4":
                if (newVal != "none") {
                    this.question4 = newVal;
                }
                else {
                    this.question4 = "";
                }
                break;
            case "select--5":
                if (newVal != "none") {
                    this.question5 = newVal;
                }
                else {
                    this.question5 = "";
                }
                break;
            case "select--6":
                if (newVal != "none") {
                    this.question6 = newVal;
                }
                else {
                    this.question6 = "";
                }
                break;
            case "select--7":
                if (newVal != "none") {
                    this.question7 = newVal;
                }
                else {
                    this.question7 = "";
                }
                break;
            case "select--8":
                if (newVal != "none") {
                    this.question8 = newVal;
                }
                else {
                    this.question8 = "";
                }
                break;
        }
        //this.filterTags.push(newVal);
        this.updateFilterTags();
    };
    AppComponent.prototype.updateFilterTags = function () {
        this.filterTags.length = 0;
        if (this.question0 != null && this.question0 != "") {
            this.filterTags.push(this.question0);
        }
        if (this.question1 != null && this.question1 != "") {
            this.filterTags.push(this.question1);
        }
        if (this.question2 != null && this.question2 != "") {
            this.filterTags.push(this.question2);
        }
        if (this.question3 != null && this.question3 != "") {
            this.filterTags.push(this.question3);
        }
        if (this.question4 != null && this.question4 != "") {
            this.filterTags.push(this.question4);
        }
        if (this.question5 != null && this.question5 != "") {
            this.filterTags.push(this.question5);
        }
        if (this.question6 != null && this.question6 != "") {
            this.filterTags.push(this.question6);
        }
        if (this.question7 != null && this.question7 != "") {
            this.filterTags.push(this.question7);
        }
        if (this.question8 != null && this.question8 != "") {
            this.filterTags.push(this.question8);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pipes_evn_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/evn-pipes */ "./src/app/pipes/evn-pipes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _components_prequestions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/prequestions.component */ "./src/app/components/prequestions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pipes_evn_pipes__WEBPACK_IMPORTED_MODULE_3__["FilterProducts"], _components_prequestions_component__WEBPACK_IMPORTED_MODULE_6__["PrequestionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/prequestions.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/prequestions.component.ts ***!
  \******************************************************/
/*! exports provided: PrequestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrequestionsComponent", function() { return PrequestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../questions.service */ "./src/app/questions.service.ts");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/question */ "./src/app/models/question.ts");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/product */ "./src/app/models/product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrequestionsComponent = /** @class */ (function () {
    function PrequestionsComponent(questionsService) {
        this.questionsService = questionsService;
        this.prequestions = [];
        this.questions = [];
        this.products = [];
        this.filterTags = [];
    }
    PrequestionsComponent.prototype.ngOnInit = function () {
        this.getQuestions();
    };
    PrequestionsComponent.prototype.trackByFn = function (index, item) {
        if (!item)
            return null;
        return item.id;
    };
    PrequestionsComponent.prototype.getQuestions = function () {
        var _this = this;
        this.questionsService.getQuestions().subscribe(function (data) {
            _this.qs = data;
            _this.title = data["appname"];
            data['prequestions'].forEach(function (prequestion) {
                var q = new _models_question__WEBPACK_IMPORTED_MODULE_2__["Question"]();
                q.question = prequestion[0];
                var keys1 = Object.keys(prequestion[1]);
                keys1.forEach(function (key) {
                    //console.log(key + ' ' + question[1][key])
                    var nv = new _models_question__WEBPACK_IMPORTED_MODULE_2__["SelectValue"]();
                    nv.name = prequestion[1][key].text;
                    nv.value = prequestion[1][key].value;
                    q.answers.push(nv);
                });
                q.sortOrder = prequestion[2];
                _this.prequestions.push(q);
            });
            data['questions'].forEach(function (question) {
                var q = new _models_question__WEBPACK_IMPORTED_MODULE_2__["Question"]();
                q.question = question[0];
                var keys2 = Object.keys(question[1]);
                keys2.forEach(function (key) {
                    //console.log(key + ' ' + question[1][key])
                    var nv = new _models_question__WEBPACK_IMPORTED_MODULE_2__["SelectValue"]();
                    nv.name = key;
                    nv.value = question[1][key];
                    q.answers.push(nv);
                });
                q.sortOrder = question[2];
                _this.questions.push(q);
            });
        }, function (err) { return console.error(err); }, function () {
            console.log("Questions Loaded");
            _this.getProducts();
        });
    };
    PrequestionsComponent.prototype.getProducts = function () {
        var _this = this;
        this.questionsService.getProducts().subscribe(function (data) {
            data["products"].forEach(function (element) {
                //var productKeys = Object.keys(element[1]);
                var p = new _models_product__WEBPACK_IMPORTED_MODULE_3__["Product"]();
                p.product = element['product'];
                p.tags = element['tags'];
                p.sortOrder = element['sortorder'];
                _this.products.push(p);
            });
        }, function (err) { return console.error(err); }, function () {
            console.log("Products Loaded");
        });
    };
    PrequestionsComponent.prototype.onChange = function (event) {
        var newVal = event.target.value;
        console.log(newVal);
        var thisId = event.target.id;
        switch (thisId) {
            case "select--0":
                if (newVal != "none") {
                    this.question0 = newVal;
                }
                else {
                    this.question0 = "";
                }
                break;
            case "select--1":
                if (newVal != "none") {
                    this.question1 = newVal;
                }
                else {
                    this.question1 = "";
                }
                break;
            case "select--2":
                if (newVal != "none") {
                    this.question2 = newVal;
                }
                else {
                    this.question2 = "";
                }
                break;
            case "select--3":
                if (newVal != "none") {
                    this.question3 = newVal;
                }
                else {
                    this.question3 = "";
                }
                break;
            case "select--4":
                if (newVal != "none") {
                    this.question4 = newVal;
                }
                else {
                    this.question4 = "";
                }
                break;
            case "select--5":
                if (newVal != "none") {
                    this.question5 = newVal;
                }
                else {
                    this.question5 = "";
                }
                break;
            case "select--6":
                if (newVal != "none") {
                    this.question6 = newVal;
                }
                else {
                    this.question6 = "";
                }
                break;
            case "select--7":
                if (newVal != "none") {
                    this.question7 = newVal;
                }
                else {
                    this.question7 = "";
                }
                break;
            case "select--8":
                if (newVal != "none") {
                    this.question8 = newVal;
                }
                else {
                    this.question8 = "";
                }
                break;
        }
        //this.filterTags.push(newVal);
        this.updateFilterTags();
    };
    PrequestionsComponent.prototype.updateFilterTags = function () {
        this.filterTags.length = 0;
        if (this.question0 != null && this.question0 != "") {
            this.filterTags.push(this.question0);
        }
        if (this.question1 != null && this.question1 != "") {
            this.filterTags.push(this.question1);
        }
        if (this.question2 != null && this.question2 != "") {
            this.filterTags.push(this.question2);
        }
        if (this.question3 != null && this.question3 != "") {
            this.filterTags.push(this.question3);
        }
        if (this.question4 != null && this.question4 != "") {
            this.filterTags.push(this.question4);
        }
        if (this.question5 != null && this.question5 != "") {
            this.filterTags.push(this.question5);
        }
        if (this.question6 != null && this.question6 != "") {
            this.filterTags.push(this.question6);
        }
        if (this.question7 != null && this.question7 != "") {
            this.filterTags.push(this.question7);
        }
        if (this.question8 != null && this.question8 != "") {
            this.filterTags.push(this.question8);
        }
    };
    PrequestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prequestions',
            template: __webpack_require__(/*! ../views/_prequestions.html */ "./src/app/views/_prequestions.html"),
        }),
        __metadata("design:paramtypes", [_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"]])
    ], PrequestionsComponent);
    return PrequestionsComponent;
}());



/***/ }),

/***/ "./src/app/models/product.ts":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
        this.tags = [];
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/models/question.ts":
/*!************************************!*\
  !*** ./src/app/models/question.ts ***!
  \************************************/
/*! exports provided: Question, SelectValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectValue", function() { return SelectValue; });
var Question = /** @class */ (function () {
    function Question() {
        this.answers = [];
    }
    return Question;
}());

var SelectValue = /** @class */ (function () {
    function SelectValue() {
    }
    return SelectValue;
}());



/***/ }),

/***/ "./src/app/pipes/evn-pipes.ts":
/*!************************************!*\
  !*** ./src/app/pipes/evn-pipes.ts ***!
  \************************************/
/*! exports provided: FilterProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterProducts", function() { return FilterProducts; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/product */ "./src/app/models/product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterProducts = /** @class */ (function () {
    function FilterProducts() {
    }
    FilterProducts.prototype.transform = function (data, tags) {
        var ret = [];
        if (tags.length == 0) {
            return ret;
        }
        data.forEach(function (element) {
            var nomatch = true;
            var numMatches = 0;
            element.tags.forEach(function (element) {
                tags.forEach(function (tag) {
                    if (element == tag) {
                        numMatches++;
                    }
                });
            });
            if (numMatches == tags.length) {
                var np = new _models_product__WEBPACK_IMPORTED_MODULE_1__["Product"]();
                np.product = element.product;
                np.tags = element.tags;
                np.sortOrder = element.sortOrder;
                ret.push(np);
            }
            // let tempElement = element.tags.sort().join();
            // let tempTags = tags.sort().join();
            //  console.log(tempElement);
            //  console.log(tempTags);
            // if( tempElement.indexOf(tempTags) > -1){
            //     let np: Product = new Product();
            //     np.product = element.product;
            //     np.tags = element.tags;
            //     np.sortOrder = element.sortOrder;
            //     ret.push(np);
            // }
            // var result = element.tags.filter(function(item){ return tags.indexOf(item) > -1});
            // if(result.length > 0){
            //     let np: Product = new Product();
            //     np.product = element.product;
            //     np.tags = element.tags;
            //     np.sortOrder = element.sortOrder;
            //     ret.push(np);
            // }
        });
        //return data.filter(item => tags.some(f => f == item.tags)); //change the condition as you need
        //return data.filter(item => item.tags)
        return ret;
    };
    FilterProducts = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'filterProducts', pure: false })
    ], FilterProducts);
    return FilterProducts;
}());



/***/ }),

/***/ "./src/app/questions.service.ts":
/*!**************************************!*\
  !*** ./src/app/questions.service.ts ***!
  \**************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
// headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
var QuestionsService = /** @class */ (function () {
    function QuestionsService(http) {
        this.http = http;
    }
    QuestionsService.prototype.getQuestions = function () {
        return this.http.get("./assets/data/evn-questions.json");
    };
    QuestionsService.prototype.getProducts = function () {
        return this.http.get("./assets/data/evn-product-tags.json");
    };
    QuestionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuestionsService);
    return QuestionsService;
}());



/***/ }),

/***/ "./src/app/views/_prequestions.html":
/*!******************************************!*\
  !*** ./src/app/views/_prequestions.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"questions-body col-sm-12\">\n       \n      <h1>Welcome</h1>\n      <p>Answer a few questions to identify the best solution for your customer's business.</p>\n      <div *ngIf=\"qs\">\n      <div *ngFor=\"let prequestion of prequestions; let i = index;\">\n          <!-- Key: {{prequestions[key][key]}} -->\n          <label>{{prequestion.question}}:</label>\n          <select (change)=\"onChange($event)\" id=\"select--{{i}}\">\n            <option value=\"\">Select One</option>\n            <option *ngFor=\"let answer of prequestion.answers\" [value]=\"answer.value\">{{answer.name}}</option>\n         </select>\n         </div>\n           <!-- <hr/>\n           <div *ngFor=\"let question of questions; let g=index;\">\n             \n              <label>{{question.question}}:</label>\n              <select (change)=\"onChange($event)\" id=\"select--{{g+4}}\">\n                <option value=\"\">Select One</option>\n                <option *ngFor=\"let answer of question.answers\" [value]=\"answer.value\">{{answer.name}}</option>\n             </select>\n      \n      </div> -->\n      </div>\n      <br/>\n      <hr/>\n      <div *ngIf=\"products\">\n          <div *ngFor=\"let product of products | filterProducts: filterTags\">\n            {{ product.product }}\n            </div>\n      </div>\n\n      </div>"

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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rwilliams/sites/Elavon Product selector/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map