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
/* harmony import */ var _components_app_question1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/app.question1 */ "./src/app/components/app.question1.ts");
/* harmony import */ var _components_app_results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/app.results */ "./src/app/components/app.results.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { CommonModule } from '@angular/common';




var routes = [
    { path: 'product-selector', component: _components_prequestions_component__WEBPACK_IMPORTED_MODULE_2__["PrequestionsComponent"] },
    { path: '', redirectTo: '/product-selector', pathMatch: 'full' },
    { path: 'Q1', component: _components_app_question1__WEBPACK_IMPORTED_MODULE_3__["Question1"], data: { state: 'Q1' } },
    { path: 'Q2', component: _components_app_question1__WEBPACK_IMPORTED_MODULE_3__["Question2"], data: { state: 'Q2' } },
    { path: 'Q3', component: _components_app_question1__WEBPACK_IMPORTED_MODULE_3__["Question3"], data: { state: 'Q3' } },
    { path: 'Q4', component: _components_app_question1__WEBPACK_IMPORTED_MODULE_3__["Question4"], data: { state: 'Q4' } },
    { path: 'Q5', component: _components_app_question1__WEBPACK_IMPORTED_MODULE_3__["Question5"], data: { state: 'Q5' } },
    { path: 'Q6', component: _components_app_question1__WEBPACK_IMPORTED_MODULE_3__["Question6"], data: { state: 'Q6' } },
    { path: 'Results', component: _components_app_results__WEBPACK_IMPORTED_MODULE_4__["Results"], data: { state: 'Results' } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    useHash: true
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/router.animations.ts":
/*!**************************************************!*\
  !*** ./src/app/app-routing/router.animations.ts ***!
  \**************************************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ])
]);


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

module.exports = "<header>\n    \n         \n                <div class=\"col-sm-12 test\"><a href=\"../../index.html\" class=\"btn\">Leave product selector</a>\n                <div class=\"business-type-icon\" *ngIf=\"qs.headerIcon\" [innerHtml]=\"qs.headerIcon | safe: 'html'\"></div>\n                </div>\n            \n        \n        </header>\n        \n        <div class=\"bodycontent col-sm-12\" [@routerTransition]=\"getState(o)\">\n\n        <router-outlet #o=\"outlet\"></router-outlet>\n</div>\n\n\n\n\n\n"

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
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var _app_routing_router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing/router.animations */ "./src/app/app-routing/router.animations.ts");
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
        this.qs = this.questionsService;
    }
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent.prototype.getIcon = function () {
        console.log("get icon");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            animations: [_app_routing_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"]])
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
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ng2_select2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-select2 */ "./node_modules/ng2-select2/ng2-select2.js");
/* harmony import */ var ng2_select2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_select2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _pipes_evn_pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/evn-pipes */ "./src/app/pipes/evn-pipes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _components_prequestions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/prequestions.component */ "./src/app/components/prequestions.component.ts");
/* harmony import */ var _components_app_question1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/app.question1 */ "./src/app/components/app.question1.ts");
/* harmony import */ var _components_app_results__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/app.results */ "./src/app/components/app.results.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { BrowserModule } from '@angular/platform-browser';







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _pipes_evn_pipes__WEBPACK_IMPORTED_MODULE_6__["FilterProducts"], _components_prequestions_component__WEBPACK_IMPORTED_MODULE_9__["PrequestionsComponent"], _components_app_question1__WEBPACK_IMPORTED_MODULE_10__["Question1"], _components_app_question1__WEBPACK_IMPORTED_MODULE_10__["Question2"], _components_app_question1__WEBPACK_IMPORTED_MODULE_10__["Question3"], _components_app_question1__WEBPACK_IMPORTED_MODULE_10__["Question4"], _components_app_question1__WEBPACK_IMPORTED_MODULE_10__["Question5"], _components_app_question1__WEBPACK_IMPORTED_MODULE_10__["Question6"], _components_app_results__WEBPACK_IMPORTED_MODULE_11__["Results"], _pipes_evn_pipes__WEBPACK_IMPORTED_MODULE_6__["SafePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"],
                ng2_select2__WEBPACK_IMPORTED_MODULE_4__["Select2Module"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app.question1.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.question1.ts ***!
  \*********************************************/
/*! exports provided: Question1, Question2, Question3, Question4, Question5, Question6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question1", function() { return Question1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question2", function() { return Question2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question3", function() { return Question3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question4", function() { return Question4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question5", function() { return Question5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question6", function() { return Question6; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Question1 = /** @class */ (function () {
    function Question1(questionsService, router, location) {
        this.questionsService = questionsService;
        this.router = router;
        this.location = location;
        this.loaded = false;
        this.question4 = this.questionsService.question3;
    }
    Question1.prototype.ngOnInit = function () {
        if (this.questionsService.questions.length > 0) {
            console.log(this.questionsService.selectedProducts);
            console.log(this.questionsService.questions);
            this.loaded = true;
        }
        else {
            this.router.navigateByUrl('/');
        }
    };
    Question1.prototype.onClick = function (event) {
        console.log(event.currentTarget.value);
        this.questionsService.question3 = event.currentTarget.value;
        this.questionsService.updateQuestions(event);
    };
    Question1.prototype.onChange = function (event) {
        this.questionsService.updateQuestions(event);
    };
    Question1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ../views/_question1.html */ "./src/app/views/_question1.html")
        }),
        __metadata("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], Question1);
    return Question1;
}());

var Question2 = /** @class */ (function () {
    function Question2(questionsService, router) {
        this.questionsService = questionsService;
        this.router = router;
        this.loaded = false;
        // Disparate numbering due to array indexing in service...
        this.question5 = this.questionsService.question4;
    }
    Question2.prototype.ngOnInit = function () {
        if (this.questionsService.questions.length > 0) {
            console.log(this.questionsService.selectedProducts);
            console.log(this.questionsService.jsonQuestions);
            this.loaded = true;
        }
        else {
            this.router.navigateByUrl('/');
        }
    };
    Question2.prototype.onClick = function (event) {
        console.log(event.currentTarget.value);
        this.questionsService.question4 = event.currentTarget.value;
        this.questionsService.updateQuestions(event);
    };
    Question2.prototype.onChange = function (event) {
        this.questionsService.updateQuestions(event);
    };
    Question2 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about2',
            template: __webpack_require__(/*! ../views/_question2.html */ "./src/app/views/_question2.html")
        }),
        __metadata("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Question2);
    return Question2;
}());

var Question3 = /** @class */ (function () {
    function Question3(questionsService, router) {
        this.questionsService = questionsService;
        this.router = router;
        this.loaded = false;
        // Disparate numbering due to array indexing in service...
        this.question6 = this.questionsService.question5;
    }
    Question3.prototype.ngOnInit = function () {
        if (this.questionsService.questions.length > 0) {
            console.log(this.questionsService.selectedProducts);
            console.log(this.questionsService.jsonQuestions);
            this.loaded = true;
        }
        else {
            this.router.navigateByUrl('/');
        }
    };
    Question3.prototype.onClick = function (event) {
        console.log(event.currentTarget.value);
        this.questionsService.question5 = event.currentTarget.value;
        this.questionsService.updateQuestions(event);
    };
    Question3.prototype.onChange = function (event) {
        this.questionsService.updateQuestions(event);
    };
    Question3 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about2',
            template: __webpack_require__(/*! ../views/_question3.html */ "./src/app/views/_question3.html")
        }),
        __metadata("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Question3);
    return Question3;
}());

var Question4 = /** @class */ (function () {
    function Question4(questionsService, router) {
        this.questionsService = questionsService;
        this.router = router;
        this.loaded = false;
        // Disparate numbering due to array indexing in service...
        this.question7 = this.questionsService.question6;
    }
    Question4.prototype.ngOnInit = function () {
        if (this.questionsService.questions.length > 0) {
            console.log(this.questionsService.selectedProducts);
            console.log(this.questionsService.jsonQuestions);
            this.loaded = true;
        }
        else {
            this.router.navigateByUrl('/');
        }
    };
    Question4.prototype.onClick = function (event) {
        console.log(event.currentTarget.value);
        this.questionsService.question6 = event.currentTarget.value;
        this.questionsService.updateQuestions(event);
    };
    Question4.prototype.onChange = function (event) {
        this.questionsService.updateQuestions(event);
    };
    Question4 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about2',
            template: __webpack_require__(/*! ../views/_question4.html */ "./src/app/views/_question4.html")
        }),
        __metadata("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Question4);
    return Question4;
}());

var Question5 = /** @class */ (function () {
    function Question5(questionsService, router) {
        this.questionsService = questionsService;
        this.router = router;
        this.loaded = false;
        // Disparate numbering due to array indexing in service...
        this.question8 = this.questionsService.question7;
    }
    Question5.prototype.ngOnInit = function () {
        if (this.questionsService.questions.length > 0) {
            console.log(this.questionsService.selectedProducts);
            console.log(this.questionsService.jsonQuestions);
            this.loaded = true;
        }
        else {
            this.router.navigateByUrl('/');
        }
    };
    Question5.prototype.onClick = function (event) {
        console.log(event.currentTarget.value);
        this.questionsService.question7 = event.currentTarget.value;
        this.questionsService.updateQuestions(event);
    };
    Question5.prototype.onChange = function (event) {
        this.questionsService.updateQuestions(event);
    };
    Question5 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about2',
            template: __webpack_require__(/*! ../views/_question5.html */ "./src/app/views/_question5.html")
        }),
        __metadata("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Question5);
    return Question5;
}());

var Question6 = /** @class */ (function () {
    function Question6(questionsService, router) {
        this.questionsService = questionsService;
        this.router = router;
        this.loaded = false;
        // Disparate numbering due to array indexing in service...
        this.question9 = this.questionsService.question8;
    }
    Question6.prototype.ngOnInit = function () {
        if (this.questionsService.questions.length > 0) {
            console.log(this.questionsService.selectedProducts);
            console.log(this.questionsService.jsonQuestions);
            this.loaded = true;
        }
        else {
            this.router.navigateByUrl('/');
        }
    };
    Question6.prototype.onClick = function (event) {
        console.log(event.currentTarget.value);
        this.questionsService.question8 = event.currentTarget.value;
        this.questionsService.updateQuestions(event);
    };
    Question6.prototype.onChange = function (event) {
        this.questionsService.updateQuestions(event);
    };
    Question6 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about2',
            template: __webpack_require__(/*! ../views/_question6.html */ "./src/app/views/_question6.html")
        }),
        __metadata("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Question6);
    return Question6;
}());



/***/ }),

/***/ "./src/app/components/app.results.ts":
/*!*******************************************!*\
  !*** ./src/app/components/app.results.ts ***!
  \*******************************************/
/*! exports provided: Results */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Results", function() { return Results; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/questions.service */ "./src/app/services/questions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Results = /** @class */ (function () {
    function Results(questionsService, router) {
        this.questionsService = questionsService;
        this.router = router;
        this.loaded = false;
        this.results = [];
    }
    Results.prototype.ngOnInit = function () {
        var self = this;
        this.selected = this.questionsService.headerIcon;
        this.products = this.questionsService.products;
        this.selected = this.questionsService.headerIconText;
        // Create a class name for for the main image
        if (this.selected != undefined && this.selected != "") {
            this.selectedClass = this.selected.toLowerCase();
            this.selectedClass = this.selectedClass.replace(/\s/g, "-").replace(/\//g, "-");
            this.main_image = this.questionsService.headerResultImage;
        }
        this.results = this.questionsService.fullAnswers;
        if (this.questionsService.questions.length > 0) {
            //console.log(this.questionsService.selectedProducts);
            //console.log(this.questionsService.jsonQuestions);
            this.loaded = true;
        }
        else {
            this.router.navigateByUrl('/');
        }
    };
    Results.prototype.startOver = function (event) {
        this.questionsService.resetQuestions();
        this.questionsService.resetPreQuestions();
        this.router.navigateByUrl('/');
    };
    Results.prototype.onClick = function (event) {
        console.log(event.currentTarget.value);
        this.questionsService.question8 = event.currentTarget.value;
        this.questionsService.updateQuestions(event);
    };
    Results.prototype.onChange = function (event) {
        this.questionsService.updateQuestions(event);
    };
    Results = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about2',
            template: __webpack_require__(/*! ../views/_results.html */ "./src/app/views/_results.html")
        }),
        __metadata("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Results);
    return Results;
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
/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/questions.service */ "./src/app/services/questions.service.ts");
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
        // Questions 1-3
        this.prequestions = [];
        // Questions 4-9
        this.questions = [];
        // Products array
        this.products = [];
        this.answeredQuestions = [];
        this.loaded = false;
        this.qs = this.questionsService;
    }
    PrequestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.questionsService.preQuestions.length > 0) {
            this.questionsService.preQuestions.length = 0;
            this.loadPrequestions();
        }
        else {
            this.questionsService.questionsObservable.subscribe(function (res) {
                _this.jsonQuestions = res;
                if (!_this.questionsService.jsonQuestions) {
                    _this.questionsService.jsonQuestions = res;
                    _this.questionsService.jsonQuestions.options = {
                        multiple: false,
                        placeholder: 'Select One',
                        minimumResultsForSearch: Infinity,
                        templateResult: _this.questionsService.templateResult,
                        templateSelection: _this.questionsService.templateSelection
                    };
                }
                _this.loadPrequestions();
            });
        }
    };
    PrequestionsComponent.prototype.loadPrequestions = function () {
        // Not really using the title, but it's there if needed...
        // this.title = this.questionsService.jsonQuestions.appname;
        var _this = this;
        // Loadin
        if (this.questionsService.preQuestions.length == 0) {
            var questionIndex = 0;
            this.questionsService.jsonQuestions.prequestions.forEach(function (prequestion) {
                var questionForSelect2 = new _models_question__WEBPACK_IMPORTED_MODULE_2__["Select2Question"]();
                questionForSelect2.question = prequestion[0];
                questionForSelect2.sortOrder = prequestion[2];
                var rows2 = prequestion[1];
                rows2.forEach(function (element) {
                    var option = {
                        'id': element.value,
                        'text': element.text,
                        additional: {
                            question: questionIndex,
                            icon: element.icon,
                            image: element.image
                        }
                    };
                    questionForSelect2.answers.push(option);
                });
                _this.questionsService.preQuestions.push(questionForSelect2);
                questionIndex++;
                _this.answeredQuestions.push("");
            });
        }
        this.prequestions = this.questionsService.preQuestions;
        this.getProducts();
        if (this.questionsService.question0) {
            this.answeredQuestions[0] = this.questionsService.question0;
        }
        if (this.questionsService.question1) {
            this.answeredQuestions[1] = this.questionsService.question1;
        }
        if (this.questionsService.question2) {
            this.answeredQuestions[2] = this.questionsService.question2;
        }
    };
    PrequestionsComponent.prototype.loadQuestions = function () {
        var _this = this;
        this.questionsService.questions.length = 0;
        //if(this.questionsService.questions.length == 0){
        var questionIndex = 3;
        this.questionsService.jsonQuestions.questions.forEach(function (question) {
            var questionForSelect2 = new _models_question__WEBPACK_IMPORTED_MODULE_2__["Select2Question"]();
            questionForSelect2.question = question[0];
            questionForSelect2.sortOrder = question[2];
            questionForSelect2.excludeValues = question[3];
            //questionForSelect2.class = question[4];
            var rows2 = question[1];
            rows2.forEach(function (element) {
                var option = {
                    'id': element.value,
                    'text': element.text,
                    'answer': element.answer,
                    additional: {
                        question: questionIndex,
                        icon: element.icon
                    }
                };
                questionForSelect2.answers.push(option);
            });
            if (questionForSelect2.excludeValues.questionExclude.indexOf(_this.questionsService.question0) == -1) {
                _this.questionsService.questions.push(questionForSelect2);
                _this.answeredQuestions.push("");
            }
            questionIndex++;
        });
        // }
        this.questions = this.questionsService.questions;
    };
    PrequestionsComponent.prototype.getProducts = function () {
        var _this = this;
        if (this.questionsService.products.length == 0) {
            this.questionsService.productsObservable.subscribe(function (data) {
                data.products.forEach(function (element) {
                    //var productKeys = Object.keys(element[1]);
                    var p = new _models_product__WEBPACK_IMPORTED_MODULE_3__["Product"]();
                    p.product = element['product'];
                    p.tags = element['tags'];
                    p.sortOrder = element['sortorder'];
                    p.class = element['class'];
                    p.bullets = element['callout-bullets'];
                    p.image = element['callout-image'];
                    _this.products.push(p);
                });
            }, function (err) { return console.error(err); }, function () {
                console.log("Products Loaded");
                _this.questionsService.products = _this.products;
            });
        }
        this.loaded = true;
    };
    PrequestionsComponent.prototype.onChange = function (event) {
        // If the current question is question 1 (US/Canada) load or reload the questions array
        // so that the "ECOMMERCE" question is excluded for "CANADA" or included for US
        if (event.data[0].additional["question"] == 0) {
            // Reset questions just in case they've already answered any
            this.questionsService.resetQuestions();
            this.questionsService.updateQuestions(event);
            //reload the actual questions array to include/exclude any based on the answers in presquestions (1-3)
            this.loadQuestions();
        }
        else {
            this.questionsService.updateQuestions(event);
        }
    };
    PrequestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'prequestions',
            template: __webpack_require__(/*! ../views/_prequestions.html */ "./src/app/views/_prequestions.html"),
        }),
        __metadata("design:paramtypes", [_services_questions_service__WEBPACK_IMPORTED_MODULE_1__["QuestionsService"]])
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
        this.bullets = [];
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/models/question.ts":
/*!************************************!*\
  !*** ./src/app/models/question.ts ***!
  \************************************/
/*! exports provided: Question, SelectValue, Select2Question, Result, FullAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectValue", function() { return SelectValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select2Question", function() { return Select2Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullAnswer", function() { return FullAnswer; });
var Question = /** @class */ (function () {
    function Question() {
        this.answers = [];
        this.excludeValue = [];
    }
    return Question;
}());

var SelectValue = /** @class */ (function () {
    function SelectValue() {
    }
    return SelectValue;
}());

var Select2Question = /** @class */ (function () {
    function Select2Question() {
        this.answers = [];
        this.excludeValues = [];
    }
    return Select2Question;
}());

var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());

var FullAnswer = /** @class */ (function () {
    function FullAnswer() {
    }
    return FullAnswer;
}());



/***/ }),

/***/ "./src/app/pipes/evn-pipes.ts":
/*!************************************!*\
  !*** ./src/app/pipes/evn-pipes.ts ***!
  \************************************/
/*! exports provided: FilterProducts, SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterProducts", function() { return FilterProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/product */ "./src/app/models/product.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
                np.class = element.class;
                np.sortOrder = element.sortOrder;
                np.bullets = element.bullets;
                np.image = element.image;
                ret.push(np);
            }
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

var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            //case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/questions.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/questions.service.ts ***!
  \***********************************************/
/*! exports provided: QuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsService", function() { return QuestionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/question */ "./src/app/models/question.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
        this.questionsObservable = this.http.get("./assets/data/evn-questions.json"); // Observable to use to load all the questions
        this.productsObservable = this.http.get("./assets/data/evn-product-tags.json"); // Observable to use to load all the products
        // Arrays for storage.
        this.preQuestions = []; // First three questions
        this.questions = []; // The rest of the questions
        this.products = []; // The products and associated tags for filtering
        this.selectedProducts = []; // Array for the tags selected by the answers of questions 4+
        this.fullAnswers = [];
        // Functions for select2 select boxes
        // function for result template
        this.templateResult = function (state) {
            if (!state.id) {
                return state.text;
            }
            var image = '<span class="image"></span>';
            if (state.additional.icon) {
                image = '<span class="image"><img src="./assets/images/Icons/' + state.additional.icon + '"</span>';
            }
            return jQuery('<span class="select-option-span">' + image + ' ' + state.text + '</span>');
        };
        // function for selection template
        this.templateSelection = function (state) {
            if (!state.id) {
                return state.text;
            }
            var image = '<span class="image"></span>';
            if (state.additional.icon) {
                image = '<span class="image"><img src="./assets/images/Icons/' + state.additional.icon + '"</span>';
            }
            return jQuery('<span class="select-option-span">' + image + ' ' + state.text + '</span>');
        };
    }
    // Functions for manipulating the answers
    QuestionsService.prototype.updateQuestions = function (event) {
        var newVal = event.value == undefined ? event.currentTarget.value : event.value;
        // console.log(newVal);
        var thisId = event.data == undefined ? Number(event.currentTarget.dataset.questionId) : event.data[0].additional["question"];
        switch (thisId) {
            case 0:
                this.question0 = newVal;
                var answer = this.preQuestions[0].answers.filter(function (answr) { return answr.id == newVal; });
                break;
            case 1:
                this.question1 = newVal;
                var answer = this.preQuestions[1].answers.filter(function (answr) { return answr.id == newVal; });
                this.headerIconImage = event.data[0].additional["icon"] != undefined && event.data[0].additional["icon"] != "" ? event.data[0].additional["icon"] : "";
                this.headerIconText = event.data[0].text != undefined && event.data[0].text != "" ? event.data[0].text : "";
                this.headerResultImage = event.data[0].additional["image"] != undefined && event.data[0].additional["image"] != "" ? event.data[0].additional["image"] : "";
                this.headerIcon = "<img src='./assets/images/Icons/" + event.data[0].additional["icon"] + "'/><p>" + event.data[0].text + "</p>";
                break;
            case 2:
                var answer = this.preQuestions[2].answers.filter(function (answr) { return answr.id == newVal; });
                this.question2 = newVal;
                break;
            case 3:
                this.question3 = newVal;
                var answer = this.questions[0].answers.filter(function (answr) { return answr.id == newVal; });
                var fullAns = new _models_question__WEBPACK_IMPORTED_MODULE_1__["FullAnswer"]();
                fullAns.questionNum = "Q1";
                fullAns.textAnswer = answer[0].answer;
                fullAns.text = answer[0].text;
                var idx = this.getFullAnswerExist(fullAns.questionNum);
                if (idx != -1) {
                    // console.log( this.fullAnswers[idx].textAnswer);
                    this.fullAnswers[idx].textAnswer = answer[0].answer;
                    this.fullAnswers[idx].text = answer[0].text;
                }
                else {
                    this.fullAnswers.push(fullAns);
                }
                break;
            case 4:
                this.question4 = newVal;
                var answer = this.questions[1].answers.filter(function (answr) { return answr.id == newVal; });
                var fullAns = new _models_question__WEBPACK_IMPORTED_MODULE_1__["FullAnswer"]();
                fullAns.questionNum = "Q2";
                fullAns.textAnswer = answer[0].answer;
                fullAns.text = answer[0].text;
                var idx = this.getFullAnswerExist(fullAns.questionNum);
                if (idx != -1) {
                    this.fullAnswers[idx].textAnswer = answer[0].answer;
                    this.fullAnswers[idx].text = answer[0].text;
                }
                else {
                    this.fullAnswers.push(fullAns);
                }
                break;
            case 5:
                this.question5 = newVal;
                var answer = this.questions[2].answers.filter(function (answr) { return answr.id == newVal; });
                var fullAns = new _models_question__WEBPACK_IMPORTED_MODULE_1__["FullAnswer"]();
                fullAns.questionNum = "Q3";
                fullAns.textAnswer = answer[0].answer;
                fullAns.text = answer[0].text;
                var idx = this.getFullAnswerExist(fullAns.questionNum);
                if (idx != -1) {
                    this.fullAnswers[idx].textAnswer = answer[0].answer;
                    this.fullAnswers[idx].text = answer[0].text;
                }
                else {
                    this.fullAnswers.push(fullAns);
                }
                break;
            case 6:
                var answer = this.questions[3].answers.filter(function (answr) { return answr.id == newVal; });
                var fullAns = new _models_question__WEBPACK_IMPORTED_MODULE_1__["FullAnswer"]();
                fullAns.questionNum = "Q4";
                fullAns.textAnswer = answer[0].answer == undefined ? answer[0].text : answer[0].answer;
                fullAns.text = answer[0].text;
                var idx = this.getFullAnswerExist(fullAns.questionNum);
                if (idx != -1) {
                    this.fullAnswers[idx].textAnswer = fullAns.textAnswer;
                    this.fullAnswers[idx].text = answer[0].text;
                }
                else {
                    this.fullAnswers.push(fullAns);
                }
                break;
            case 7:
                this.question7 = newVal;
                var answer = this.questions[4].answers.filter(function (answr) { return answr.id == newVal; });
                var fullAns = new _models_question__WEBPACK_IMPORTED_MODULE_1__["FullAnswer"]();
                fullAns.questionNum = "Q5";
                fullAns.textAnswer = answer[0].answer == undefined ? answer[0].text : answer[0].answer;
                fullAns.text = answer[0].text;
                var idx = this.getFullAnswerExist(fullAns.questionNum);
                if (idx != -1) {
                    this.fullAnswers[idx].textAnswer = fullAns.textAnswer;
                    this.fullAnswers[idx].text = answer[0].text;
                }
                else {
                    this.fullAnswers.push(fullAns);
                }
                break;
            case 8:
                this.question8 = newVal;
                var answer = this.questions[5].answers.filter(function (answr) { return answr.id == newVal; });
                var fullAns = new _models_question__WEBPACK_IMPORTED_MODULE_1__["FullAnswer"]();
                fullAns.questionNum = "Q6";
                fullAns.textAnswer = answer[0].answer == undefined ? answer[0].text : answer[0].answer;
                fullAns.text = answer[0].text;
                var idx = this.getFullAnswerExist(fullAns.questionNum);
                if (idx != -1) {
                    this.fullAnswers[idx].textAnswer = fullAns.textAnswer;
                    this.fullAnswers[idx].text = answer[0].text;
                }
                else {
                    this.fullAnswers.push(fullAns);
                }
                break;
        }
        this.updateFilterTags();
    };
    QuestionsService.prototype.updateFilterTags = function () {
        this.selectedProducts.length = 0;
        if (this.question0 != null && this.question0 != "" && this.question0 != "none") {
            this.selectedProducts.push(this.question0);
        }
        if (this.question1 != null && this.question1 != "" && this.question1 != "none") {
        }
        if (this.question2 != null && this.question2 != "" && this.question2 != "none") {
        }
        if (this.question3 != null && this.question3 != "" && this.question3 != "none") {
            this.selectedProducts.push(this.question3);
        }
        if (this.question4 != null && this.question4 != "" && this.question4 != "none") {
            this.selectedProducts.push(this.question4);
        }
        if (this.question5 != null && this.question5 != "" && this.question5 != "none") {
            this.selectedProducts.push(this.question5);
        }
        if (this.question6 != null && this.question6 != "" && this.question6 != "none") {
            this.selectedProducts.push(this.question6);
        }
        if (this.question7 != null && this.question7 != "" && this.question7 != "none") {
            this.selectedProducts.push(this.question7);
        }
        if (this.question8 != null && this.question8 != "" && this.question8 != "none") {
            this.selectedProducts.push(this.question8);
        }
        //console.log(this.selectedProducts);
    };
    // Reset all pertinent arrays and the main questions if question #1 (US/CANADA) is answered.
    QuestionsService.prototype.resetQuestions = function () {
        this.selectedProducts.length = 0;
        this.fullAnswers.length = 0;
        //this.question0 = "";
        //this.question1 = "";
        //this.question2 = "";
        this.question3 = "";
        this.question4 = "";
        this.question5 = "";
        this.question6 = "";
        this.question7 = "";
        this.question8 = "";
    };
    QuestionsService.prototype.resetPreQuestions = function () {
        //this.selectedProducts.length = 0;
        //this.fullAnswers.length = 0;
        this.question0 = "";
        this.question1 = "";
        this.question2 = "";
        this.headerIcon = "";
    };
    QuestionsService.prototype.getFullAnswerExist = function (qnum) {
        var ret = this.fullAnswers.findIndex(function (x) { return x.questionNum == qnum; });
        // console.log('test' + ret);
        return ret;
    };
    QuestionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"questions-body col-sm-12\">\n       \n      <h1>Welcome</h1>\n      <p>Answer a few questions to identify the best solution for your customer's business.</p>\n      <div class=\"prequestions-line\">\n        <div class=\"col-sm-4\"><div class=\"circles question1\" [ngClass]=\"{'answered':qs.question0}\"><fa *ngIf=\"qs.question0\" name=\"check-circle\"></fa></div></div>\n        <div class=\"col-sm-4\"><div class=\"circles question2\" [ngClass]=\"{'answered':qs.question1}\"><fa *ngIf=\"qs.question1\" name=\"check-circle\"></fa></div></div>\n        <div class=\"col-sm-4\"><div class=\"circles question3\" [ngClass]=\"{'answered':qs.question2}\"><fa *ngIf=\"qs.question2\" name=\"check-circle\"></fa></div></div>\n      </div>\n    \n\n      <div *ngIf=\"loaded\" class=\"row questions2\">\n         <div *ngFor=\"let prequestion of prequestions; let i = index;\" class=\"col-sm-12 col-md-4\">\n           <div class=\"label-wrapper\"> <label>{{prequestion.question}}:</label></div>\n            <select2 [data]=\"prequestion.answers\" [width]=\"240\" [cssImport]=true (valueChanged)=\"onChange($event)\" [options]=\"qs.jsonQuestions.options\" [value]=\"answeredQuestions[i]\"></select2>\n          </div>\n         </div>\n    \n     \n      <div class=\"col-sm-12 continue-button-wrapper\">\n        <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/Q1']\" [disabled]=\"(!qs.question0 || !qs.question1 || !qs.question2)\"><p>Next <i class=\"far fa-chevron-circle-right\"></i></p></button>\n      </div>\n      \n      </div>"

/***/ }),

/***/ "./src/app/views/_question1.html":
/*!***************************************!*\
  !*** ./src/app/views/_question1.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"questions-body col-sm-12\">\n       \n   <div *ngIf=\"loaded\" class=\"questions-wrapper\">\n       <div class=\"questions-counter\">Question 1 of {{ questionsService.questions.length }}</div>\n    <p>{{ questionsService.questions[0].question }}</p>\n       <div class=\"row buttons-wrapper\">\n        <div class=\"col-sm-2\"></div>\n          <!-- <select2 [data]=\"questionsService.questions[0].answers\" [width]=\"240\" [cssImport]=true (valueChanged)=\"onChange($event)\" [options]=\"options\" [value]=\"question4\"><option></option></select2> -->\n       <div class=\"col-sm-4\"  *ngFor=\" let button of questionsService.questions[0].answers\">\n          <button type=\"button\" class=\"btn btn-primary\" data-question-id=\"3\" [ngClass]=\"{'selected':questionsService.question3 == button.id}\" [value]=\"button.id\" (click)=\"onClick($event)\" >{{ button.text }}</button>\n        </div>\n        <div class=\"col-sm-2\"></div>\n        </div>\n\n    <div class=\"col-sm-12 continue-button-wrapper\">\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/Q2']\" [disabled]=\"(!questionsService.question3)\"><p>Next <i class=\"far fa-chevron-circle-right\"></i></p></button>\n    </div>\n</div>\n    </div>"

/***/ }),

/***/ "./src/app/views/_question2.html":
/*!***************************************!*\
  !*** ./src/app/views/_question2.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"questions-body col-sm-12\">\n       \n        <div *ngIf=\"loaded\" class=\"questions-wrapper\">\n            <div class=\"questions-counter\">Question 2 of {{ questionsService.questions.length }}</div>\n         <p>{{ questionsService.questions[1].question }}</p>\n            <div class=\"row buttons-wrapper\">\n             <div class=\"col-sm-2\"></div>\n               <!-- <select2 [data]=\"questionsService.questions[0].answers\" [width]=\"240\" [cssImport]=true (valueChanged)=\"onChange($event)\" [options]=\"options\" [value]=\"question4\"><option></option></select2> -->\n            <div class=\"col-sm-4\"  *ngFor=\" let button of questionsService.questions[1].answers\">\n               <button type=\"button\" class=\"btn btn-primary\" data-question-id=\"4\" [ngClass]=\"{'selected':questionsService.question4 == button.id}\" [value]=\"button.id\" (click)=\"onClick($event)\" >{{ button.text }}</button>\n             </div>\n             <div class=\"col-sm-2\"></div>\n             </div>\n     \n         <div class=\"col-sm-12 continue-button-wrapper\">\n           <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/Q3']\" [disabled]=\"(!questionsService.question4)\"><p>Next <i class=\"far fa-chevron-circle-right\"></i></p></button>\n         </div>\n     </div>\n         </div>"

/***/ }),

/***/ "./src/app/views/_question3.html":
/*!***************************************!*\
  !*** ./src/app/views/_question3.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"questions-body col-sm-12\">\n       \n        <div *ngIf=\"loaded\" class=\"questions-wrapper\">\n            <div class=\"questions-counter\">Question 3 of {{ questionsService.questions.length }}</div>\n         <p>{{ questionsService.questions[2].question }}</p>\n            <div class=\"row buttons-wrapper\">\n             <div class=\"col-sm-2\"></div>\n               <!-- <select2 [data]=\"questionsService.questions[0].answers\" [width]=\"240\" [cssImport]=true (valueChanged)=\"onChange($event)\" [options]=\"options\" [value]=\"question4\"><option></option></select2> -->\n            <div class=\"col-sm-4\"  *ngFor=\" let button of questionsService.questions[2].answers\">\n               <button type=\"button\" class=\"btn btn-primary\" data-question-id=\"5\" [ngClass]=\"{'selected':questionsService.question5 == button.id}\" [value]=\"button.id\" (click)=\"onClick($event)\" >{{ button.text }}</button>\n             </div>\n             <div class=\"col-sm-2\"></div>\n             </div>\n     \n         <div class=\"col-sm-12 continue-button-wrapper\">\n           <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/Q4']\" [disabled]=\"(!questionsService.question5)\"><p>Next <i class=\"far fa-chevron-circle-right\"></i></p></button>\n         </div>\n     </div>\n         </div>"

/***/ }),

/***/ "./src/app/views/_question4.html":
/*!***************************************!*\
  !*** ./src/app/views/_question4.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"questions-body col-sm-12\">\n       \n        <div *ngIf=\"loaded\" class=\"questions-wrapper\">\n            <div class=\"questions-counter\">Question 4 of {{ questionsService.questions.length }}</div>\n         <p>{{ questionsService.questions[3].question }}</p>\n            <div *ngIf=\"questionsService.questions.length==6\" class=\"row buttons-wrapper\">\n             <div class=\"col-sm-2\"></div>\n               <!-- <select2 [data]=\"questionsService.questions[0].answers\" [width]=\"240\" [cssImport]=true (valueChanged)=\"onChange($event)\" [options]=\"options\" [value]=\"question4\"><option></option></select2> -->\n            <div class=\"col-sm-4\"  *ngFor=\" let button of questionsService.questions[3].answers\">\n               <button type=\"button\" class=\"btn btn-primary\" data-question-id=\"6\" [ngClass]=\"{'selected':questionsService.question6 == button.id}\" [value]=\"button.id\" (click)=\"onClick($event)\" >{{ button.text }}</button>\n             </div>\n             <div class=\"col-sm-2\"></div>\n             </div>\n             <div class=\"row\" *ngIf=\"questionsService.questions.length==5\">\n             \n              <div class=\"col-sm-12 buttons-wrapper\" *ngFor=\" let button of questionsService.questions[3].answers\">\n              <button type=\"button\" class=\"btn btn-primary\" data-question-id=\"6\" [ngClass]=\"{'selected':questionsService.question6 == button.id}\" [value]=\"button.id\" (click)=\"onClick($event)\" >{{ button.text }}, {{ button.answer }}</button>\n            </div>\n          \n          </div>\n     \n         <div class=\"col-sm-12 continue-button-wrapper\">\n           <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/Q5']\" [disabled]=\"(!questionsService.question6)\"><p>Next <i class=\"far fa-chevron-circle-right\"></i></p></button>\n         </div>\n     </div>\n         </div>"

/***/ }),

/***/ "./src/app/views/_question5.html":
/*!***************************************!*\
  !*** ./src/app/views/_question5.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"questions-body col-sm-12\">\n       \n        <div *ngIf=\"loaded\" class=\"questions-wrapper\">\n            <div class=\"questions-counter\">Question 5 of {{ questionsService.questions.length }}</div>\n         <p>{{ questionsService.questions[4].question }}</p>\n            <div class=\"row buttons-wrapper\" *ngFor=\" let button of questionsService.questions[4].answers\">\n            \n               <!-- <select2 [data]=\"questionsService.questions[0].answers\" [width]=\"240\" [cssImport]=true (valueChanged)=\"onChange($event)\" [options]=\"options\" [value]=\"question4\"><option></option></select2> -->\n            <div class=\"col-sm-12\">\n               <button type=\"button\" class=\"btn btn-primary\" data-question-id=\"7\" [ngClass]=\"{'selected':questionsService.question7 == button.id}\" [value]=\"button.id\" (click)=\"onClick($event)\" >{{ button.text }}, {{ button.answer }}</button>\n             </div>\n             \n             </div>\n     \n         <div class=\"col-sm-12 continue-button-wrapper\">\n           <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"this.questionsService.questions.length==6\" [routerLink]=\"['/Q6']\" [disabled]=\"(!questionsService.question7)\"><p>Next <i class=\"far fa-chevron-circle-right\"></i></p></button>\n           <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"this.questionsService.questions.length==5\" [routerLink]=\"['/Results']\" [disabled]=\"(!questionsService.question7)\"><p>Next <i class=\"far fa-chevron-circle-right\"></i></p></button>\n         </div>\n     </div>\n         </div>"

/***/ }),

/***/ "./src/app/views/_question6.html":
/*!***************************************!*\
  !*** ./src/app/views/_question6.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"questions-body col-sm-12\">\n       \n        <div *ngIf=\"loaded\" class=\"questions-wrapper\">\n            <div class=\"questions-counter\">Question 6 of {{ questionsService.questions.length }}</div>\n         <p>{{ questionsService.questions[5].question }}</p>\n            <div class=\"row buttons-wrapper\" *ngFor=\" let button of questionsService.questions[5].answers\">\n            \n               <!-- <select2 [data]=\"questionsService.questions[0].answers\" [width]=\"240\" [cssImport]=true (valueChanged)=\"onChange($event)\" [options]=\"options\" [value]=\"question4\"><option></option></select2> -->\n            <div class=\"col-sm-12\"  >\n               <button type=\"button\" class=\"btn btn-primary\" data-question-id=\"8\" [ngClass]=\"{'selected':questionsService.question8 == button.id}\" [value]=\"button.id\" (click)=\"onClick($event)\" >{{ button.text }}, {{ button.answer }}</button>\n             </div>\n             \n             </div>\n     \n         <div class=\"col-sm-12 continue-button-wrapper\">\n           <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/Results']\" [disabled]=\"(!questionsService.question8)\"><p>Next <i class=\"far fa-chevron-circle-right\"></i></p></button>\n         </div>\n     </div>\n         </div>"

/***/ }),

/***/ "./src/app/views/_results.html":
/*!*************************************!*\
  !*** ./src/app/views/_results.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"loaded\" class=\"main-results-image {{ selectedClass }}\" [ngStyle]=\"{'background-image':'url(../../../restaurant/results/'+main_image+')','background-repeat':'no-repeat','background-size':'cover','background-position':'center'}\">\n    <h2>{{ selected }}</h2>\n</div>\n<div class=\"results-body col-sm-12\">\n       \n        <div *ngIf=\"loaded\">\n         \n\n         \n            <div class=\"results-title\"><p>Your Results</p></div>\n            <div class=\"row results-wrapper\">\n                <div *ngIf=\"results\" class=\"row d-flex answer-row\">\n                  <div *ngFor=\"let answer of results\" class=\"answer\">\n                    <p class=\"answer-num\">{{ answer.questionNum }}</p><p class=\"answer-answer\"><span class=\"bold-blue\">{{ answer.text }}</span>, {{ answer.textAnswer }}</p>\n                    </div>\n              </div>\n              <div class=\"col-sm-12 continue-button-wrapper\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"startOver($event)\"><p>Start Over <i class=\"far fa-chevron-circle-right\"></i></p></button>\n              </div>\n        \n              <div class=\"col-sm-12 results-title\"><p>Recommended Solution(s)</p></div>\n              <div *ngIf=\"products\" class=\"col-sm-12 product-rows row\">\n                <div *ngFor=\"let product of products | filterProducts: questionsService.selectedProducts\" class=\"product row\">\n                  <div class=\"product-image col-sm-4 {{ product.class }}\" [ngStyle]=\"{'background-image':'url(../../../images/solutions/'+product.image+')','background-repeat':'no-repeat','background-size':'contain','background-position':'center'}\">\n                    <!-- <img src=\"../../images/solutions/{{ product.image }}\"> -->\n                  </div>\n                  <div class=\"product-callout col-sm-8\">\n                    <h2>{{ product.product }}</h2>\n                    <ul *ngIf=\"product.bullets.length > 0\">\n                      <li *ngFor=\"let bullet of product.bullets\">{{ bullet }}</li>\n                    </ul>\n                  </div>\n                  \n                  </div>\n                  <div class=\"col-sm-12 continue-button-wrapper\">\n                      <a class=\"btn btn-primary\" href=\"../solutions.html\"><p>View all restaurant solutions <i class=\"far fa-chevron-circle-right\"></i></p></a>\n                    </div>\n             </div>\n           \n\n     </div>\n         </div>\n        </div>\n"

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

module.exports = __webpack_require__(/*! /Users/rwilliams/sites/Elavon Product selector/product-selector-angular-source/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map