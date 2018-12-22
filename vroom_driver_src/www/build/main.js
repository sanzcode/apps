webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__myride_myride__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chats_chats__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listride_listride__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wallet_wallet__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__more_more__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__myride_myride__["a" /* MyridePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__chats_chats__["a" /* ChatsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__listride_listride__["a" /* ListridePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__wallet_wallet__["a" /* WalletPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__more_more__["a" /* MorePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="My Ride" tabIcon="md-car" tabsHideOnSubPages="true"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Chats" tabIcon="md-chatboxes" tabsHideOnSubPages="true"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Requests" tabIcon="md-person-add" tabsHideOnSubPages="true"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="Wallet" tabIcon="md-card" tabsHideOnSubPages="true"></ion-tab>\n\n    <ion-tab [root]="tab5Root" tabTitle="More" tabIcon="md-person" tabsHideOnSubPages="true"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmpopupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmpopupPage = /** @class */ (function () {
    function ConfirmpopupPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    ConfirmpopupPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ConfirmpopupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmpopup',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\confirmpopup\confirmpopup.html"*/'<ion-content>\n\n    <ion-icon name="md-close" class="close-icon text-white" (click)="dismiss()"></ion-icon>\n\n    <ion-card>\n\n        <h6 class="text-theme">Accept Ride Request?</h6>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>Manuel García</h2>\n\n                <p>Honda Cvic | White</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <p><small>Pickup Location</small>\n\n                    <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n\n                <p>\n\n                    <small>Drop Location</small>\n\n                    <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n\n            </div>\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <div class="ride-detail no-before">\n\n                <p><small>Date</small>\n\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n\n                    22<sup>nd</sup> Feb, 2018 </p>\n\n                <p>\n\n                    <small>Time</small>\n\n                    <ion-icon name="md-time" class="icon-location"></ion-icon>\n\n                    Between 12:10pm to 12:30pm</p>\n\n            </div>\n\n        </ion-card-content>\n\n\n\n        <ion-card-content>\n\n            <div class="seats">\n\n                <ion-row>\n\n                    <ion-col col-4 class="rate">\n\n                        <small>Est Fare</small> $ 120\n\n                    </ion-col>\n\n                    <ion-col col-5 class="rate">\n\n                        <small>Seat Request</small> 2 Seats\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row style="margin-top: 14px;">\n\n                    <ion-col col-4>\n\n                        <button class="btn bg-white text-theme rounded" style="width: 100%;"><ion-icon name="md-calendar" class="icon-location"></ion-icon></button>\n\n                    </ion-col>\n\n                    <ion-col col-8>\n\n                        <button class="btn bg-theme text-white rounded" style="width: 100%;font-size: .95rem;">ACCEPT REQUEST</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\confirmpopup\confirmpopup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], ConfirmpopupPage);
    return ConfirmpopupPage;
}());

//# sourceMappingURL=confirmpopup.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__verification_verification__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.verification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__verification_verification__["a" /* VerificationPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\signup\signup.html"*/'<ion-header class="transparent">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white">CREAR CUENTA</span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content class="bg-background-img">\n\n    <div class="logo">\n\n        <img src="assets/imgs/logo.png" alt="logo">\n\n    </div>\n\n\n\n    <div class="bg-white login">\n\n        <div class="">\n\n            <ion-row>\n\n                <ion-col class="name-fild">\n\n                    <ion-list class="form" style="margin-bottom: 0">\n\n                        <ion-item>\n\n                            <ion-label>Nombre</ion-label>\n\n                            <ion-input type="text" text-right></ion-input>\n\n                        </ion-item>\n\n                        <ion-item>\n\n                            <ion-label>Apellidos</ion-label>\n\n                            <ion-input type="text" text-right></ion-input>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-list class="form">\n\n                <ion-item>\n\n                    <ion-label>Contraseña</ion-label>\n\n                    <ion-input type="password" text-right></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label>Repita la contraseña</ion-label>\n\n                    <ion-input type="password" text-right></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label>Email</ion-label>\n\n                    <ion-input type="text" text-right></ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n            <button ion-button full class="bg-theme text-white btn rounded" (click)="verification()">Crear una cuenta</button>\n\n            <p text-center>¿Tiene ya una cuenta? <strong class="text-theme" (click)="login()">Iniciar sesión</strong></p>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_code__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerificationPage = /** @class */ (function () {
    function VerificationPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    VerificationPage.prototype.code = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__code_code__["a" /* CodePage */]);
        modal.present();
    };
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\verification\verification.html"*/'<ion-header class="transparent">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white">verification</span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-background-img">\n\n    <div class="logo">\n\n        <img src="assets/imgs/logo.png" alt="logo">\n\n    </div>\n\n    <div class="bg-white login">\n\n        <div class="">\n\n            <p padding text-center>Enter confirmation code<br>sent to you on your SMS!</p>\n\n            <br>\n\n            <ion-list class="form" text-center>\n\n                <ion-item>\n\n                    <ion-input type="text" value="33456" text-right></ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n            <button ion-button full class="bg-theme text-white btn rounded" (click)="code()">Next</button>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\verification\verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CodePage = /** @class */ (function () {
    function CodePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */];
    }
    CodePage.prototype.rootpage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    CodePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-code',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\code\code.html"*/'<ion-content padding>\n\n    <h1 text-right>\n\n        <ion-icon class="text-white" name="md-close" (click)="dismiss()"></ion-icon>\n\n    </h1>\n\n    <ion-card>\n\n        <img src="assets/imgs/menu-bg.png" />\n\n        <ion-card-content>\n\n            <div padding-top padding-right padding-left>\n\n                <ion-card-title class="text-theme">\n\n                    Do you have any referral code?\n\n                </ion-card-title>\n\n                <h5 padding-top>\n\n                    Add referral code and get <br> 100% cashback on first ride.\n\n                </h5>\n\n                <ion-list class="form">\n\n                    <ion-item class="bg-light">\n\n                        <ion-input type="text" placeholder="Add 6 digit referral code" class="text-light"></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n                <p><strong class="text-dark">I Dont\'have </strong><strong class="text-theme" style="float: right;" (click)="rootpage()">Continue</strong></p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\code\code.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], CodePage);
    return CodePage;
}());

//# sourceMappingURL=code.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__raterider_raterider__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatting_chatting__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ridetoday_ridetoday__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyridePage = /** @class */ (function () {
    function MyridePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.ride = "today";
    }
    MyridePage.prototype.raterider = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__raterider_raterider__["a" /* RateriderPage */]);
    };
    MyridePage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chatting_chatting__["a" /* ChattingPage */]);
    };
    MyridePage.prototype.ridetoday = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ridetoday_ridetoday__["a" /* RidetodayPage */]);
    };
    MyridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myride',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\myride\myride.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">MIS VIAJES\n\n            <ion-icon name="md-locate" class="text-white" style="margin-left: auto;float: right;"></ion-icon>\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n    <div padding-left padding-right>\n\n        <ion-segment [(ngModel)]="ride">\n\n            <ion-segment-button value="past">\n\n                Pasados\n\n            </ion-segment-button>\n\n            <ion-segment-button value="today">\n\n                Hoy\n\n            </ion-segment-button>\n\n            <ion-segment-button value="coming">\n\n                Próximos\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <div [ngSwitch]="ride">\n\n        <ion-list *ngSwitchCase="\'past\'">\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/man1.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>Manuel García\n\n                        </h2>\n\n                        <p>Fiat Punto | Azul</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme"> 2,20 €\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span>Calle Donoso Cortés, 12. Madrid</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span>Calle de Severo Ochoa, 4. Tres Cantos</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>Hoy: 07:15</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>2 Plazas</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-4 text-right style="max-width: 100px;">\n\n                            <button class="btn bg-yellow rounded full text-white" (click)="raterider()" style="width: 100%;">Votar</button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>\n\n\n\n            <!-- repilica -->\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/man2.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>Javier López\n\n                        </h2>\n\n                        <p>Seat León | Rojo</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme"> 3,40 €\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span><span class="time">7:30</span>Calle de Severo Ochoa, 4. Tres Cantos</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span><span class="time">8:10</span>Calle Princesa, 32. Madrid</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>Hoy: 12:15</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>2 Plazas</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-4 class="detail-text" text-right style="max-width: 100px;">\n\n                            <div text-left>Rated\n\n                                <div style="margin-top: 5px;">\n\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                                    <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                                </div>\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>Manuel García\n\n                        </h2>\n\n                        <p>Honda Cvic | White</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme">$ 120\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>Hoy: 12:15</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>3 Plazas</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-4 class="detail-text" text-right style="max-width: 100px;">\n\n                            <div text-left>Cancled Ride\n\n                            </div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-list>\n\n\n\n        <ion-list *ngSwitchCase="\'today\'">\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>Manuel García\n\n                        </h2>\n\n                        <p>Honda Cvic | White</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme">$ 120\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>Today: 12:15</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>2 Seats</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-5>\n\n                            <button class="btn bg-theme rounded full text-white" (click)="ridetoday()">Pick up</button>\n\n                            <button class="btn bg-yellow rounded full text-white"><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>\n\n\n\n            <!-- repilica -->\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>Manuel García\n\n                        </h2>\n\n                        <p>Honda Cvic | White</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme">$ 120\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>Today: 12:15</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>2 Seats</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-5>\n\n                            <button class="btn bg-theme rounded full text-white" (click)="ridetoday()">Pick up</button>\n\n                            <button class="btn bg-yellow rounded full text-white"><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>Manuel García\n\n                        </h2>\n\n                        <p>Honda Cvic | White</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme">$ 120\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>Today: 12:15</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>2 Seats</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-5>\n\n                            <button class="btn bg-theme rounded full text-white" (click)="ridetoday()">Pick up</button>\n\n                            <button class="btn bg-yellow rounded full text-white"><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>Manuel García\n\n\n\n                        </h2>\n\n                        <p>Honda Cvic | White</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme">$ 120\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                        <p>2 Seats</p>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>Today: 12:15</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>2 Seats</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-5>\n\n                            <button class="btn bg-theme rounded full text-white" (click)="chatting()">Pick up</button>\n\n                            <button class="btn bg-yellow rounded full text-white"><ion-icon name="ios-call" class="text-white"></ion-icon></button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'coming\'">\n\n            <p class="text-light">25<sup>th</sup> Feb 2017 | Sunday<span float-right>2 Passangers</span></p>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>Manuel García\n\n                        </h2>\n\n                        <p>Honda Cvic | White</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme">$ 120\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>Today: 12:15</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>2 Seats</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-5>\n\n                            <button class="btn bg-white rounded full text-theme" (click)="chatting()">Message</button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>\n\n\n\n            <!-- repilica -->\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>Manuel García\n\n                        </h2>\n\n                        <p>Honda Cvic | White</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme">$ 120\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>Today: 12:15</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>2 Seats</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-5>\n\n                            <button class="btn bg-white rounded full text-theme" (click)="chatting()">Message</button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <p class="text-light">25<sup>th</sup> Feb 2017 | Sunday<span float-right>2 Passangers</span></p>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <div class="name">\n\n                        <h2>Manuel García\n\n                        </h2>\n\n                        <p>Honda Cvic | White</p>\n\n                    </div>\n\n                    <div class="more">\n\n                        <h2 class="text-theme">$ 120\n\n                            <ion-icon name="md-more"></ion-icon>\n\n                        </h2>\n\n                    </div>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="ride-detail">\n\n                        <p>\n\n                            <span class="icon-location bg-theme"></span><span class="time">12:00 am</span>Washington sq.park New York</p>\n\n                        <p>\n\n                            <span class="icon-location bg-yellow"></span><span class="time">12:50 am</span>Harison, east sq.park New York</p>\n\n                    </div>\n\n                    <ion-row>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>Today: 12:15</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col class="detail-text">\n\n                            <div text-left>\n\n                                <h2>2 Seats</h2>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col col-5>\n\n                            <button class="btn bg-white rounded full text-theme" (click)="chatting()">Message</button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\myride\myride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MyridePage);
    return MyridePage;
}());

//# sourceMappingURL=myride.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateriderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RateriderPage = /** @class */ (function () {
    function RateriderPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RateriderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-raterider',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\raterider\raterider.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>RATE DRIVER</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card class="slip">\n\n        <div text-center>\n\n            <h4 class="text-dark">We hope you had a grate ride!</h4>\n\n            <p class="text-light">22nd Feb 2018, 12:20 pm</p>\n\n            <h1 class="text-theme">$ 120</h1>\n\n            <h4 class="text-dark">Payment has been donevia<br>your Vroom Wallet</h4>\n\n        </div>\n\n    </ion-card>\n\n    <ion-card class="rate">\n\n        <div text-center>\n\n            <p>So how was your experience with...</p>\n\n            <div class="driver">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <h2>Manuel García\n\n                        <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                    </h2>\n\n                    <p>Honda Civic | White</p>\n\n                </ion-item>\n\n                <p class="icons">\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                </p>\n\n                <div class="form">\n\n                    <ion-list no-lines>\n\n                        <ion-item>\n\n                            <ion-textarea type="text" value="Leave a feedback"></ion-textarea>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </div>\n\n                <p padding-top><button class="btn text-white bg-theme rounded" style="width: 100%;">SUBMIT RATING</button></p>\n\n            </div>\n\n        </div>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\raterider\raterider.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], RateriderPage);
    return RateriderPage;
}());

//# sourceMappingURL=raterider.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RidetodayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting_chatting__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RidetodayPage = /** @class */ (function () {
    function RidetodayPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RidetodayPage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatting_chatting__["a" /* ChattingPage */]);
    };
    RidetodayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ridetoday',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\ridetoday\ridetoday.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>RIDE TODAY\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <img src="assets/imgs/mapbg.jpg" class="map">\n\n    <img src="assets/imgs/man1.png" class="user u1">\n\n    <img src="assets/imgs/man2.png" class="user u2">\n\n    <img src="assets/imgs/man3.png" class="user u3">\n\n    <span class="dot bg-theme pickup"></span>\n\n    <span class="dot bg-yellow drop"></span>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\ridetoday\ridetoday.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], RidetodayPage);
    return RidetodayPage;
}());

//# sourceMappingURL=ridetoday.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting_chatting__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChatsPage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatting_chatting__["a" /* ChattingPage */]);
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\chats\chats.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">CHATS\n\n            <ion-icon name="md-search" class="text-white" style="margin-left: auto;float: right;"></ion-icon>\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-item (click)="chatting()">\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/face-1.jpg">\n\n            <ion-badge color="danger">9+</ion-badge>\n\n        </ion-avatar>\n\n        <h2 class="text-theme">Buzz Lightyear\n\n        </h2>\n\n        <p>Washington sq Park?</p>\n\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n\n    </ion-item>\n\n    <!-- repeat -->\n\n    <ion-item (click)="chatting()">\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man1.png">\n\n        </ion-avatar>\n\n        <h2>Buzz Lightyear\n\n        </h2>\n\n        <p>Washington sq Park?</p>\n\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man2.png">\n\n        </ion-avatar>\n\n        <h2>Buzz Lightyear</h2>\n\n        <p>Washington sq Park?</p>\n\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n\n    </ion-item>\n\n    <ion-item (click)="chatting()">\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man3.png">\n\n        </ion-avatar>\n\n        <h2>Buzz Lightyear\n\n        </h2>\n\n        <p>Washington sq Park?</p>\n\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man4.png">\n\n        </ion-avatar>\n\n        <h2>Buzz Lightyear</h2>\n\n        <p>Washington sq Park?</p>\n\n        <ion-note item-end>Ride on<span class="time">1:12 pm</span></ion-note>\n\n    </ion-item>\n\n    <p text-center class="text-light"><small>Chat will be dessapear after completed the ride or<br>in case of cancelation of ride.</small></p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\chats\chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__riderprofile_riderprofile__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListridePage = /** @class */ (function () {
    function ListridePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ListridePage.prototype.riderprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__riderprofile_riderprofile__["a" /* RiderprofilePage */]);
    };
    ListridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listride',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\listride\listride.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>FIND A RIDE\n\n            <span style="margin-left: auto;float: right;"><ion-icon name="md-car" class="text-white"></ion-icon>&nbsp;&nbsp;Edit Ride</span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>Manuel García\n\n                </h2>\n\n                <p>Honda Cvic | White</p>\n\n            </div>\n\n            <div class="more">\n\n                <h2 class="text-light">\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star"></ion-icon>\n\n                </h2>\n\n                <p class="text-light">(34 Reviews)</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <p>\n\n                    <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n\n                <p>\n\n                    <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n\n            </div>\n\n            <ion-row class="center-align">\n\n                <ion-col col-3 class="detail-text text-theme">\n\n                    25<sup>th</sup> Feb, 12:12pm\n\n                </ion-col>\n\n                <ion-col col-3 class="detail-text text-theme" text-center>\n\n                    2 Seats\n\n                </ion-col>\n\n                <ion-col col-2 class="detail-text" style="color: #f00;" text-center>\n\n                    Reject\n\n                </ion-col>\n\n                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n\n                    <button class="btn bg-theme rounded full text-white" (click)="riderprofile()">Accept</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/man2.png">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>Manuel García\n\n                </h2>\n\n                <p>Honda Cvic | White</p>\n\n            </div>\n\n            <div class="more">\n\n                <h2 class="text-light">\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star"></ion-icon>\n\n                </h2>\n\n                <p class="text-light">(34 Reviews)</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <p>\n\n                    <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n\n                <p>\n\n                    <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n\n            </div>\n\n            <ion-row class="center-align">\n\n                <ion-col col-3 class="detail-text text-theme">\n\n                    25<sup>th</sup> Feb, 12:12pm\n\n                </ion-col>\n\n                <ion-col col-3 class="detail-text text-theme" text-center>\n\n                    2 Seats\n\n                </ion-col>\n\n                <ion-col col-2 class="detail-text" style="color: #f00;" text-center>\n\n                    Reject\n\n                </ion-col>\n\n                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n\n                    <button class="btn bg-theme rounded full text-white" (click)="riderprofile()">Accept</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/man1.png">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>Manuel García\n\n                </h2>\n\n                <p>Honda Cvic | White</p>\n\n            </div>\n\n            <div class="more">\n\n                <h2 class="text-light">\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star" class="text-yellow"></ion-icon>\n\n                    <ion-icon name="star"></ion-icon>\n\n                </h2>\n\n                <p class="text-light">(34 Reviews)</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <p>\n\n                    <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n\n                <p>\n\n                    <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n\n            </div>\n\n            <ion-row class="center-align">\n\n                <ion-col col-3 class="detail-text text-theme">\n\n                    25<sup>th</sup> Feb, 12:12pm\n\n                </ion-col>\n\n                <ion-col col-3 class="detail-text text-theme" text-center>\n\n                    2 Seats\n\n                </ion-col>\n\n                <ion-col col-2 class="detail-text" style="color: #f00;" text-center>\n\n                    Reject\n\n                </ion-col>\n\n                <ion-col center text-center col-4 text-right style="margin-left: auto;">\n\n                    <button class="btn bg-theme rounded full text-white" (click)="riderprofile()">Accept</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\listride\listride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ListridePage);
    return ListridePage;
}());

//# sourceMappingURL=listride.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmpopup_confirmpopup__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatting_chatting__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RiderprofilePage = /** @class */ (function () {
    function RiderprofilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.rideprofile = "about";
    }
    RiderprofilePage.prototype.confirmpopup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirmpopup_confirmpopup__["a" /* ConfirmpopupPage */]);
    };
    RiderprofilePage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chatting_chatting__["a" /* ChattingPage */]);
    };
    RiderprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-riderprofile',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\riderprofile\riderprofile.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>PASSANGER PROFILE</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-item style="position: relative;z-index: 2;">\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man3.png">\n\n        </ion-avatar>\n\n        <div class="name">\n\n            <h2>Manuel García\n\n            </h2>\n\n            <p>Honda Civic | White</p>\n\n        </div>\n\n        <div class="more">\n\n            <h2>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n            </h2>\n\n            <p>(53 Reviews)</p>\n\n        </div>\n\n    </ion-item>\n\n    <div class="tabs bg-white">\n\n        <ion-segment [(ngModel)]="rideprofile">\n\n            <ion-segment-button value="about">\n\n                About\n\n            </ion-segment-button>\n\n            <ion-segment-button value="reviews">\n\n                Reviews\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n    <div [ngSwitch]="rideprofile">\n\n        <ion-list *ngSwitchCase="\'about\'">\n\n            <div class="bg-white about address">\n\n                <p class="text-theme heading">Address<span float-right>Edit</span></p>\n\n                <div class="ride-detail">\n\n                    <p><small>Home</small>\n\n                        <span class="icon-location bg-theme"></span>140 central Building near hdfc bank Washington sq.park New York</p>\n\n                    <p>\n\n                        <small>Office</small>\n\n                        <span class="icon-location bg-yellow"></span>Harison, central Building near hdfc bank east sq.park New York</p>\n\n                </div>\n\n            </div>\n\n            <div class="bg-white about info">\n\n                <p class="text-theme heading">Personal Info</p>\n\n                <ion-list no-lines class="form-list">\n\n                    <ion-item>\n\n                        <ion-label floating>Enail Address</ion-label>\n\n                        <ion-input type="text" value="david-johnson@gmail.com" readonly></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label floating>Profession</ion-label>\n\n                        <ion-input type="text" value="Senior Architech at Apx Designs" readonly></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'reviews\'">\n\n            <div class="bg-white" padding style="margin-bottom: 4px;">\n\n                <div class="rating-box">\n\n                    <p>\n\n                        <span class="text-1">5<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 100%"></span></span>\n\n                        <span class="text-2">100</span>\n\n                    </p>\n\n                    <p>\n\n                        <span class="text-1">4<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 90%"></span></span>\n\n                        <span class="text-2">90</span></p>\n\n                    <p>\n\n                        <span class="text-1">3<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 70%"></span></span>\n\n                        <span class="text-2">60</span>\n\n                    </p>\n\n                    <p>\n\n                        <span class="text-1">2<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 50%"></span></span>\n\n                        <span class="text-2">40</span>\n\n                    </p>\n\n                    <p>\n\n                        <span class="text-1">1<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 20%"></span></span>\n\n                        <span class="text-2">20</span>\n\n                    </p>\n\n                </div>\n\n            </div>\n\n            <ion-card class="review">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <h2>Buzz Lightyear</h2>\n\n                    <p>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                    </p>\n\n                    <ion-note item-end>15 April 2017</ion-note>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="detail">\n\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card class="review">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <h2>Buzz Lightyear</h2>\n\n                    <p>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                    </p>\n\n                    <ion-note item-end>15 April 2017</ion-note>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="detail">\n\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-list>\n\n    </div>\n\n    <ion-row class="fix-btn">\n\n        <ion-col>\n\n            <button class="btn rounded text-theme bg-white full" (click)="chatting()">MESSAGE</button>\n\n        </ion-col>\n\n        <ion-col>\n\n            <button class="btn rounded text-white bg-theme full" (click)="confirmpopup()">REQUEST RIDE</button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <div class="space">&nbsp;</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\riderprofile\riderprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], RiderprofilePage);
    return RiderprofilePage;
}());

//# sourceMappingURL=riderprofile.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalletPage = /** @class */ (function () {
    function WalletPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\wallet\wallet.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">MY WALLET</ion-title>\n\n    </ion-navbar>\n\n    <div text-center padding>\n\n        <p><small class="text-white">Total Balance</small></p>\n\n        <h1 class="text-white">$ 120</h1>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button class="btn text-white bg-yellow rounded">ADD MONEY</button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button class="btn text-theme bg-white rounded">SEND TO BANK</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>Paid for Ride\n\n                    <small>19 Feb, 05:15 pm</small>\n\n                </h2>\n\n                <p>Washing sq. Park to East Network</p>\n\n            </div>\n\n            <div class="more" text-right>\n\n                <h2 class="text-theme">+$120\n\n                </h2>\n\n                <p class="text-dark">To Johnson</p>\n\n            </div>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/man3.png">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>Paid for Ride\n\n                    <small>19 Feb, 05:15 pm</small>\n\n                </h2>\n\n                <p>Washing sq. Park to East Network</p>\n\n            </div>\n\n            <div class="more" text-right>\n\n                <h2 class="text-theme">+$120\n\n                </h2>\n\n                <p class="text-dark">To Johnson</p>\n\n            </div>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/man1.png">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>Paid for Ride\n\n                    <small>19 Feb, 05:15 pm</small>\n\n                </h2>\n\n                <p>Washing sq. Park to East Network</p>\n\n            </div>\n\n            <div class="more" text-right>\n\n                <h2 class="text-theme">+$120\n\n                </h2>\n\n                <p class="text-dark">To Johnson</p>\n\n            </div>\n\n        </ion-item>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/man2.png">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>Paid for Ride\n\n                    <small>19 Feb, 05:15 pm</small>\n\n                </h2>\n\n                <p>Washing sq. Park to East Network</p>\n\n            </div>\n\n            <div class="more" text-right>\n\n                <h2 class="text-theme">+$120\n\n                </h2>\n\n                <p class="text-dark">To Johnson</p>\n\n            </div>\n\n        </ion-item>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\wallet\wallet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reviews_reviews__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__terms_terms__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__earn_earn__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ratevroom_ratevroom__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__help_help__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__upload_upload__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MorePage = /** @class */ (function () {
    function MorePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MorePage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    MorePage.prototype.reviews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reviews_reviews__["a" /* ReviewsPage */]);
    };
    MorePage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notification_notification__["a" /* NotificationPage */]);
    };
    MorePage.prototype.terms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__terms_terms__["a" /* TermsPage */]);
    };
    MorePage.prototype.earn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__earn_earn__["a" /* EarnPage */]);
    };
    MorePage.prototype.ratevroom = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__ratevroom_ratevroom__["a" /* RatevroomPage */]);
    };
    MorePage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__help_help__["a" /* HelpPage */]);
    };
    MorePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
    };
    MorePage.prototype.upload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__upload_upload__["a" /* UploadPage */]);
    };
    MorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\more\more.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title class="text-center">MORE</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/face-1.jpg">\n\n        </ion-avatar>\n\n        <div class="name">\n\n            <h2>Manuel García\n\n            </h2>\n\n            <p (click)="profile()">View Profile</p>\n\n        </div>\n\n        <div class="more">\n\n            <h2>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n            </h2>\n\n            <p>(53 Reviews)</p>\n\n        </div>\n\n    </ion-item>\n\n\n\n    <ion-list no-lines>\n\n        <button ion-item (click)="reviews()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n            </ion-avatar>\n\n            My Reviews\n\n        </button>\n\n        <button ion-item (click)="notification()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-notifications"></ion-icon>\n\n            </ion-avatar>\n\n            Notification\n\n        </button>\n\n        <button ion-item (click)="terms()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-paper"></ion-icon>\n\n            </ion-avatar>\n\n            Term and Condition\n\n        </button>\n\n        <button ion-item (click)="earn()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-share"></ion-icon>\n\n            </ion-avatar>\n\n            Refer and Earn\n\n        </button>\n\n        <button ion-item (click)="ratevroom()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-thumbs-up"></ion-icon>\n\n            </ion-avatar>\n\n            Rate Vroom\n\n        </button>\n\n        <button ion-item (click)="help()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-alert"></ion-icon>\n\n            </ion-avatar>\n\n            Help\n\n        </button>\n\n        <button ion-item (click)="upload()">\n\n            <ion-avatar item-start>\n\n                <ion-icon name="md-paper"></ion-icon>   \n\n            </ion-avatar>\n\n            Verifiy My Id\n\n        </button>\n\n    </ion-list>\n\n    <ion-list no-lines>\n\n        <button ion-item (click)="login()" text-center><h2 class="text-theme"><strong>Log out</strong></h2></button>\n\n\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\more\more.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MorePage);
    return MorePage;
}());

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.myprofile = "about";
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\profile\profile.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>MY PROFILE</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-item style="position: relative;z-index: 2;">\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man3.png">\n\n        </ion-avatar>\n\n        <div class="name">\n\n            <h2>Manuel García\n\n            </h2>\n\n            <p>Edit Profile</p>\n\n        </div>\n\n        <div class="more">\n\n            <h2>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n            </h2>\n\n            <p>(53 Reviews)</p>\n\n        </div>\n\n    </ion-item>\n\n    <div class="tabs bg-white">\n\n        <ion-segment [(ngModel)]="myprofile">\n\n            <ion-segment-button value="about">\n\n                About\n\n            </ion-segment-button>\n\n            <ion-segment-button value="reviews">\n\n                Reviews\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n    <div [ngSwitch]="myprofile">\n\n        <ion-list *ngSwitchCase="\'about\'">\n\n            <div class="bg-white about address">\n\n                <p class="text-theme heading">Address<span float-right>Edit</span></p>\n\n                <div class="ride-detail">\n\n                    <p><small>Home</small>\n\n                        <span class="icon-location bg-theme"></span>140 central Building near hdfc bank Washington sq.park New York</p>\n\n                    <p>\n\n                        <small>Office</small>\n\n                        <span class="icon-location bg-yellow"></span>Harison, central Building near hdfc bank east sq.park New York</p>\n\n                </div>\n\n            </div>\n\n            <div class="bg-white about info">\n\n                <p class="text-theme heading">Personal Info<span float-right>Edit</span></p>\n\n                <ion-list no-lines class="form-list">\n\n                    <ion-item>\n\n                        <ion-label floating>User Name</ion-label>\n\n                        <ion-input type="text" value="Johan Bitoda" readonly></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n            <div class="bg-white about info">\n\n                <p class="text-theme heading">Verification<span float-right>Save</span></p>\n\n                <ion-list no-lines class="form-list">\n\n                    <ion-item>\n\n\n\n                        <ion-label floating>Phone Verification</ion-label>\n\n                        <ion-input type="text" value="+91 964 148 6000" readonly></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-icon name="ios-checkmark-circle" class="text-theme check"></ion-icon>\n\n                        <ion-label floating>Email Verification</ion-label>\n\n                        <ion-input type="text" value="johanbittoda@email.com" readonly></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-icon name="ios-checkmark-circle" class="text-theme check"></ion-icon>\n\n                        <ion-label floating>Goverment ID Verification</ion-label>\n\n                        <ion-input type="text" value="Senior Architechat Alex Designs." readonly></ion-input>\n\n\n\n                    </ion-item>\n\n                </ion-list>\n\n            </div>\n\n            <div class="bg-white about info">\n\n                <p class="text-theme heading">Car Info<span float-right>Save</span></p>\n\n                <ion-list no-lines class="form-list">\n\n                    <ion-row>\n\n                        <ion-col col-6>\n\n                            <ion-item>\n\n                                <ion-label floating>Car Brand</ion-label>\n\n                                <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                                    <ion-option selected value="Honda">Honda</ion-option>\n\n                                    <ion-option value="Audi">Audi</ion-option>\n\n                                    <ion-option value="BMW">BMW</ion-option>\n\n                                </ion-select>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-6>\n\n                            <ion-item>\n\n                                <ion-label floating>Car Model</ion-label>\n\n                                <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                                    <ion-option selected value="Civik">Civik</ion-option>\n\n                                    <ion-option value="Luxary">Luxary</ion-option>\n\n                                </ion-select>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-6>\n\n                            <ion-item>\n\n                                <ion-label floating>Seat for Passanger</ion-label>\n\n                                <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                                    <ion-option value="1">1 Seat</ion-option>\n\n                                    <ion-option value="2">2 Seats</ion-option>\n\n                                    <ion-option selected value="2">3 Seat</ion-option>\n\n                                </ion-select>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-6>\n\n                            <ion-item>\n\n                                <ion-label floating>Air Conditioner availibility</ion-label>\n\n                                <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                                    <ion-option selected value="yes">AC Availible</ion-option>\n\n                                    <ion-option value="no">Not Availible</ion-option>\n\n                                </ion-select>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-6>\n\n                            <ion-item>\n\n                                <ion-label floating>Car Number</ion-label>\n\n                                <ion-input type="text" value="D3 34 45D" readonly></ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-6>\n\n                            <ion-item>\n\n                                <ion-label floating>Car Color</ion-label>\n\n                                <ion-input type="text" value="White" readonly></ion-input>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-list>\n\n            </div>\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'reviews\'">\n\n            <div class="bg-white" padding style="margin-bottom: 4px;">\n\n                <div class="rating-box">\n\n                    <p>\n\n                        <span class="text-1">5<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 100%"></span></span>\n\n                        <span class="text-2">100</span>\n\n                    </p>\n\n                    <p>\n\n                        <span class="text-1">4<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 90%"></span></span>\n\n                        <span class="text-2">90</span></p>\n\n                    <p>\n\n                        <span class="text-1">3<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 70%"></span></span>\n\n                        <span class="text-2">60</span>\n\n                    </p>\n\n                    <p>\n\n                        <span class="text-1">2<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 50%"></span></span>\n\n                        <span class="text-2">40</span>\n\n                    </p>\n\n                    <p>\n\n                        <span class="text-1">1<ion-icon name="md-star"></ion-icon></span>\n\n                        <span class="rate-bar"><span class="bg-theme" style="width: 20%"></span></span>\n\n                        <span class="text-2">20</span>\n\n                    </p>\n\n                </div>\n\n            </div>\n\n            <ion-card class="review">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <h2>Buzz Lightyear</h2>\n\n                    <p>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                    </p>\n\n                    <ion-note item-end>15 April 2017</ion-note>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="detail">\n\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card class="review">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <h2>Buzz Lightyear</h2>\n\n                    <p>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                        <ion-icon name="ios-star"></ion-icon>\n\n                    </p>\n\n                    <ion-note item-end>15 April 2017</ion-note>\n\n                </ion-item>\n\n                <ion-card-content>\n\n                    <div class="detail">\n\n                        <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n\n                    </div>\n\n                </ion-card-content>\n\n            </ion-card>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewsPage = /** @class */ (function () {
    function ReviewsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reviews',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\reviews\reviews.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>MY REVIEWS</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n            <h2>Buzz Lightyear</h2>\n\n            <p>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n            </p>\n\n            <ion-note item-end>15 April 2017</ion-note>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="detail">\n\n                <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/man1.png">\n\n            </ion-avatar>\n\n            <h2>Buzz Lightyear</h2>\n\n            <p>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n            </p>\n\n            <ion-note item-end>15 April 2017</ion-note>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="detail">\n\n                <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/man2.png">\n\n            </ion-avatar>\n\n            <h2>Buzz Lightyear</h2>\n\n            <p>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star" class="text-yellow"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n                <ion-icon name="ios-star"></ion-icon>\n\n            </p>\n\n            <ion-note item-end>15 April 2017</ion-note>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="detail">\n\n                <p>Badges are small components that typically communicate a numerical value to the user. They are typically used within an item.</p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\reviews\reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\notification\notification.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>NOTIFICATION</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man1.png">\n\n        </ion-avatar>\n\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n\n        </h2>\n\n        <ion-note item-end>22 Feb 2018</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man2.png">\n\n        </ion-avatar>\n\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n\n        </h2>\n\n        <ion-note item-end>22 Feb 2018</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man3.png">\n\n        </ion-avatar>\n\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n\n        </h2>\n\n        <ion-note item-end>22 Feb 2018</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man4.png">\n\n        </ion-avatar>\n\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n\n        </h2>\n\n        <ion-note item-end>22 Feb 2018</ion-note>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-avatar item-start>\n\n            <img src="assets/imgs/man5.png">\n\n        </ion-avatar>\n\n        <h2><span class="text-theme">Buzz Lightyear</span>&nbsp; Approved your request for ride\n\n        </h2>\n\n        <ion-note item-end>22 Feb 2018</ion-note>\n\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\notification\notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\terms\terms.html"*/'<ion-header class="transparent">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white">TEARMS & CONDITIONS</span></ion-title>\n\n    </ion-navbar>\n\n    <div class="logo">\n\n        <img src="assets/imgs/logo.png" alt="logo">\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-background-img">\n\n    <div class="bg-white">\n\n        <h4 class="text-theme">Terms Of Vroom</h4>\n\n        <p class="text-dark">Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed.</p>\n\n        <p class="text-dark">Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed.</p>\n\n        <p class="text-dark">Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed. Menu is a side-menu navigation that can be dragged out or toggled to show. The content of a menu will be hidden when the menu is closed.</p>\n\n\n\n    </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\terms\terms.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EarnPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EarnPage = /** @class */ (function () {
    function EarnPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EarnPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-earn',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\earn\earn.html"*/'<ion-header class="transparent">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white"></span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img src="assets/imgs/menu-bg2.jpg">\n\n    <div padding-left padding-right>\n\n        <ion-card class="bg-theme">\n\n            <ion-card-content text-center>\n\n                <p class="text-white">Your Referral Code</p>\n\n                <h6 class="text-white">532461</h6>\n\n            </ion-card-content>\n\n        </ion-card>\n\n        <div padding-left padding-right padding-top padding>\n\n            <br>\n\n            <h4 class="text-theme">Refer and earn</h4>\n\n            <p class="text-drack">Share the referral code with your friends and family members and get 30% off on cab fare</p>\n\n        </div>\n\n        <ion-row>\n\n            <ion-col col-3 text-center padding>\n\n                <img src="assets/imgs/fb.png">\n\n            </ion-col>\n\n            <ion-col col-3 text-center padding padding>\n\n                <img src="assets/imgs/wpp.png">\n\n            </ion-col>\n\n            <ion-col col-3 text-center padding>\n\n                <img src="assets/imgs/tw.png">\n\n            </ion-col>\n\n            <ion-col col-3 text-center padding>\n\n                <img src="assets/imgs/more.png">\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\earn\earn.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], EarnPage);
    return EarnPage;
}());

//# sourceMappingURL=earn.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatevroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatevroomPage = /** @class */ (function () {
    function RatevroomPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RatevroomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ratevroom',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\ratevroom\ratevroom.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>RATE VROOM</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <ion-card class="slip">\n\n        <div text-center>\n\n            <h4 class="text-dark">We hope you had a grate ride!</h4>\n\n            <p class="text-light">22nd Feb 2018, 12:20 pm</p>\n\n            <h1 class="text-theme">$ 120</h1>\n\n            <h4 class="text-dark">Payment has been donevia<br>your Vroom Wallet</h4>\n\n        </div>\n\n    </ion-card>\n\n    <ion-card class="rate">\n\n        <div text-center>\n\n            <p>So how was your experience with...</p>\n\n            <div class="driver">\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/face-1.jpg">\n\n                    </ion-avatar>\n\n                    <h2>Manuel García\n\n                        <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                    </h2>\n\n                    <p>Honda Civic | White</p>\n\n                </ion-item>\n\n                <p class="icons">\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                    <ion-icon name="ios-star"></ion-icon>\n\n                </p>\n\n                <div class="form">\n\n                    <ion-list no-lines>\n\n                        <ion-item>\n\n                            <ion-textarea type="text" value="Leave a feedback"></ion-textarea>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </div>\n\n                <p padding-top><button class="btn text-white bg-theme rounded" style="width: 100%;">SUBMIT RATING</button></p>\n\n            </div>\n\n        </div>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\ratevroom\ratevroom.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], RatevroomPage);
    return RatevroomPage;
}());

//# sourceMappingURL=ratevroom.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\help\help.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>HELP</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <p class="text-light" padding>choose your issue</p>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1><strong>Trips and fare</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            <small>Any issue regarding your trip and fare</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1><strong>Payment</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            <small>problim while paying fare or related issue</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1><strong>App Usability</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            <small>Any issue while using our App</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <h1><strong>Account</strong>\n\n                <ion-icon name="ios-arrow-down-outline" class="text-light"></ion-icon>\n\n            </h1>\n\n        </ion-card-header>\n\n        <ion-card-content class="text-light">\n\n            <small>your account info can\'t change details or change Password .</small>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadPage = /** @class */ (function () {
    function UploadPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\upload\upload.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>VERIFIY MY ID\n\n            <!--           <ion-icon name="md-search" class="text-white" style="margin-left: auto;float: right;"></ion-icon>-->\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding-right padding-left>\n\n    <p text-center padding-top margin-top>Upload good quality photo of your</p>\n\n    <h2 text-center>Licence</h2>\n\n\n\n    <ion-row>\n\n        <ion-col col-4 text-center>\n\n            <img src="assets/imgs/v2.png">\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n            <img src="assets/imgs/v3.png">\n\n        </ion-col>\n\n        <ion-col col-4 text-center>\n\n            <img src="assets/imgs/v4.png">\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <div text-center class="verifiy">\n\n        <img src="assets/imgs/v1.png">\n\n    </div>\n\n    <p padding-top class="btn-box"><button class="btn text-white bg-theme rounded" style="width: 80%;">UPLOAD NOW</button></p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\upload\upload.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FindridePage = /** @class */ (function () {
    function FindridePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.ride = "oneway";
    }
    FindridePage.prototype.tabs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    FindridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-findride',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\findride\findride.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white">EDIT RIDE INFO</span></ion-title>\n\n    </ion-navbar>\n\n    <div padding-left padding-right>\n\n        <ion-segment [(ngModel)]="ride">\n\n            <ion-segment-button value="oneway">\n\n                One Way\n\n            </ion-segment-button>\n\n            <ion-segment-button value="Return">\n\n                Return\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-background-img" padding>\n\n    <div [ngSwitch]="ride">\n\n        <ion-list *ngSwitchCase="\'oneway\'">\n\n            <ion-card class="search search-1">\n\n                <span class="dot bg-theme"></span>\n\n                <ion-card-content>\n\n                    <ion-searchbar (ionInput)="getItems($event)" placeholder="Set Starting Location (Home)"></ion-searchbar>\n\n                    <ion-searchbar class="nobdr" (ionInput)="getItems($event)" placeholder="Starting time"></ion-searchbar>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card class="search search-2">\n\n                <span class="dot bg-yellow"></span>\n\n                <ion-card-content>\n\n                    <ion-searchbar (ionInput)="getItems($event)" placeholder="Set End Location (Office)"></ion-searchbar>\n\n                    <ion-searchbar class="nobdr" (ionInput)="getItems($event)" placeholder="Reaching time"></ion-searchbar>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <p class="text-theme">Select usually travel days</p>\n\n            <br>\n\n            <div class="days text-black">\n\n                <ion-row>\n\n                    <ion-col col-6>\n\n                        <ion-item>\n\n                            <ion-label style="color:black">Monday</ion-label>\n\n                            <ion-checkbox checked="true"></ion-checkbox>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <ion-item>\n\n                            <ion-label style="color:black">Tuesday</ion-label>\n\n                            <ion-checkbox checked="true"></ion-checkbox>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <ion-item>\n\n                            <ion-label style="color:black">Wednesday</ion-label>\n\n                            <ion-checkbox checked="true"></ion-checkbox>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <ion-item>\n\n                            <ion-label style="color:black">Thursday</ion-label>\n\n                            <ion-checkbox checked="true"></ion-checkbox>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <ion-item>\n\n                            <ion-label style="color:black">Friday</ion-label>\n\n                            <ion-checkbox checked="true"></ion-checkbox>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <ion-item>\n\n                            <ion-label style="color:black">Saturday</ion-label>\n\n                            <ion-checkbox checked="true"></ion-checkbox>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <ion-item>\n\n                            <ion-label style="color:black">Sunday</ion-label>\n\n                            <ion-checkbox checked="true"></ion-checkbox>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n            <br>\n\n            <p class="text-theme">Set Min. Fare ($)</p>\n\n            <div class="rate">\n\n                <ion-row>\n\n                    <ion-col col-6>\n\n                        <div class="seats-tag">\n\n                            <ion-icon name="remove-circle"></ion-icon>\n\n                            <strong>60 $</strong>\n\n                            <ion-icon name="add-circle"></ion-icon>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <button (click)="tabs()" small class="btn rounded bg-theme text-white" style="width: 100%">Update Info</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'Return\'">\n\n\n\n            <ion-card class="search search-1">\n\n                <span class="dot bg-yellow"></span>\n\n                <ion-card-content>\n\n                    <ion-searchbar (ionInput)="getItems($event)" placeholder="Set Starting Location (Office)"></ion-searchbar>\n\n                    <ion-searchbar class="nobdr" (ionInput)="getItems($event)" placeholder="Starting time"></ion-searchbar>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card class="search search-2">\n\n                <span class="dot bg-theme"></span>\n\n                <ion-card-content>\n\n                    <ion-searchbar (ionInput)="getItems($event)" placeholder="Set End Location (Home)"></ion-searchbar>\n\n                    <ion-searchbar class="nobdr" (ionInput)="getItems($event)" placeholder="Reaching time"></ion-searchbar>\n\n                </ion-card-content>\n\n            </ion-card>\n\n            <p class="text-theme">Select usually travel days</p>\n\n            <br>\n\n            <div class="days text-white">\n\n                <ion-row>\n\n                    <ion-col col-6>\n\n                        <ion-item>\n\n                            <ion-label style="color:black">Monday</ion-label>\n\n                            <ion-checkbox checked="true"></ion-checkbox>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <ion-item>\n\n                            <ion-label style="color:black">Tuesday</ion-label>\n\n                            <ion-checkbox checked="true"></ion-checkbox>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <ion-item>\n\n                            <ion-label style="color:black">Wednesday</ion-label>\n\n                            <ion-checkbox checked="true"></ion-checkbox>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <ion-item>\n\n                            <ion-label style="color:black">Thursday</ion-label>\n\n                            <ion-checkbox checked="true"></ion-checkbox>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <ion-item>\n\n                            <ion-label style="color:black">Friday</ion-label>\n\n                            <ion-checkbox checked="true"></ion-checkbox>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <ion-item>\n\n                            <ion-label style="color:black">Saturday</ion-label>\n\n                            <ion-checkbox checked="true"></ion-checkbox>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <ion-item>\n\n                            <ion-label style="color:black">Sunday</ion-label>\n\n                            <ion-checkbox checked="true"></ion-checkbox>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n            <br>\n\n            <p class="text-theme">Set Min. Fare (€)</p>\n\n            <div class="rate">\n\n                <ion-row>\n\n                    <ion-col col-6>\n\n                        <div class="seats-tag">\n\n                            <ion-icon name="remove-circle"></ion-icon>\n\n                            <strong>60 $</strong>\n\n                            <ion-icon name="add-circle"></ion-icon>\n\n                        </div>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <button (click)="tabs()" class="btn rounded bg-theme text-white" style="width: 100%" small>Update Info</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\findride\findride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FindridePage);
    return FindridePage;
}());

//# sourceMappingURL=findride.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_myride_myride__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_findride_findride__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_wallet_wallet__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_more_more__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_password_password__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_verification_verification__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_code_code__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_listride_listride__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_riderprofile_riderprofile__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_confirmride_confirmride__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_confirmpopup_confirmpopup__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_raterider_raterider__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chatting_chatting__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_reviews_reviews__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_earn_earn__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_help_help__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_ridetoday_ridetoday__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_upload_upload__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_splash_screen__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_myride_myride__["a" /* MyridePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_findride_findride__["a" /* FindridePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_code_code__["a" /* CodePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_listride_listride__["a" /* ListridePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_riderprofile_riderprofile__["a" /* RiderprofilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_confirmride_confirmride__["a" /* ConfirmridePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_confirmpopup_confirmpopup__["a" /* ConfirmpopupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_raterider_raterider__["a" /* RateriderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_earn_earn__["a" /* EarnPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__["a" /* RatevroomPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__["a" /* RatevroomPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_ridetoday_ridetoday__["a" /* RidetodayPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_upload_upload__["a" /* UploadPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_myride_myride__["a" /* MyridePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_findride_findride__["a" /* FindridePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_more_more__["a" /* MorePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_code_code__["a" /* CodePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_listride_listride__["a" /* ListridePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_riderprofile_riderprofile__["a" /* RiderprofilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_confirmride_confirmride__["a" /* ConfirmridePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_confirmpopup_confirmpopup__["a" /* ConfirmpopupPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_raterider_raterider__["a" /* RateriderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_earn_earn__["a" /* EarnPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__["a" /* RatevroomPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_ratevroom_ratevroom__["a" /* RatevroomPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_ridetoday_ridetoday__["a" /* RidetodayPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_upload_upload__["a" /* UploadPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';
//import { AboutPage } from '../pages/about/about';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { SignupPage } from '../signup/signup';
//import { PasswordPage } from '../password/password';
var PasswordPage = /** @class */ (function () {
    function PasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\password\password.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>password</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <p (click)="signup()">signup</p>\n\n    <p (click)="password()">forgot password</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\password\password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPage = /** @class */ (function () {
    function FilterPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.structure = { lower: 33, upper: 60 };
    }
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\filter\filter.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>FILTER</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-light">\n\n    <p class="text-light" padding>Shorting By</p>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-list radio-group>\n\n                <ion-item>\n\n                    <ion-label>Rating</ion-label>\n\n                    <ion-radio checked="true" value="Rating"></ion-radio>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label>Price</ion-label>\n\n                    <ion-radio value="Price"></ion-radio>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-card-header>\n\n    </ion-card>\n\n    <p class="text-light" padding>Price Range</p>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-item>\n\n                <ion-range dualKnobs="true" [(ngModel)]="structure" color="success">\n\n                    <span range-left class="left-text">$ 40</span>\n\n                    <span range-right class="right-text">$ 70</span>\n\n                </ion-range>\n\n            </ion-item>\n\n        </ion-card-header>\n\n    </ion-card>\n\n    <p class="text-light" padding>Availiblity</p>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            <ion-list>\n\n                <ion-item>\n\n                    <ion-label>Seat Available</ion-label>\n\n                    <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                        <ion-option selected value="1">1 Seat</ion-option>\n\n                        <ion-option value="2">2 Seats</ion-option>\n\n                        <ion-option value="3">3 Seats</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <ion-item class="check-item">\n\n                    <ion-checkbox></ion-checkbox>\n\n                    <ion-label>Air Conditioner</ion-label>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-card-header>\n\n    </ion-card>\n\n    <ion-row class="fix-btn">\n\n        <ion-col>\n\n            <button class="btn rounded text-theme bg-white full">RESET</button>\n\n        </ion-col>\n\n        <ion-col>\n\n            <button class="btn rounded text-white bg-theme full">APPLY</button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <div class="space">&nbsp;</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\filter\filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmpopup_confirmpopup__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmridePage = /** @class */ (function () {
    function ConfirmridePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    ConfirmridePage.prototype.confirmpopup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__confirmpopup_confirmpopup__["a" /* ConfirmpopupPage */]);
        modal.present();
    };
    ConfirmridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmride',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\confirmride\confirmride.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-title>CONFIRM RIDE REQUEST</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bh-light">\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n            <div class="name">\n\n                <h2>Manuel García\n\n                    <ion-icon name="ios-checkmark-circle" class="text-theme"></ion-icon>\n\n                </h2>\n\n                <p>Honda Cvic | White</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-card-content>\n\n            <div class="ride-detail">\n\n                <h6 class="text-theme">Location</h6>\n\n                <p><small>Pickup Location<ion-icon name="md-create"></ion-icon></small>\n\n                    <span class="icon-location bg-theme"></span>Washington sq.park New York</p>\n\n                <p>\n\n                    <small>Drop Location<ion-icon name="md-create"></ion-icon></small>\n\n                    <span class="icon-location bg-yellow"></span>Harison, east sq.park New York</p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <div class="ride-detail no-before">\n\n                <h6 class="text-theme">Date & Time</h6>\n\n                <p><small>Date<ion-icon name="md-create"></ion-icon></small>\n\n                    <ion-icon name="md-calendar" class="icon-location"></ion-icon>\n\n                    22<sup>nd</sup> Feb, 2018 </p>\n\n                <p>\n\n                    <small>Time</small>\n\n                    <ion-icon name="md-time" class="icon-location"></ion-icon>\n\n                    Between 12:10pm to 12:30pm</p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <div class="seats">\n\n                <h6 class="text-theme">Fare & Seat Conformation</h6>\n\n                <ion-row>\n\n                    <ion-col col-4 class="rate">\n\n                        <small>Est Fare</small> $ 120\n\n                    </ion-col>\n\n                    <ion-col col-8>\n\n                        <div class="seats-tag">\n\n                            <ion-icon name="remove-circle"></ion-icon>\n\n                            <strong>2 Seats</strong>\n\n                            <ion-icon name="add-circle"></ion-icon>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <button class="btn bg-theme text-white rounded" (click)="confirmpopup()" style="width: 100%;margin-top: 16px;">CONFIRM REQUEST</button>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\confirmride\confirmride.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], ConfirmridePage);
    return ConfirmridePage;
}());

//# sourceMappingURL=confirmride.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChattingPage = /** @class */ (function () {
    function ChattingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatting',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\chatting\chatting.html"*/'<ion-header class="bg-theme">\n\n    <ion-navbar>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/imgs/face-1.jpg">\n\n            </ion-avatar>\n\n            <h2><span class="text-white">Manuel García</span>\n\n                <ion-icon name="md-more" end-item item-end class="text-white"></ion-icon>\n\n            </h2>\n\n        </ion-item>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="chat-bg">\n\n    <div class="cb">\n\n        <div class=" chat chat-right bg-white text-dark" text-right padding float-right>\n\n            <p>Hey David !!</p>\n\n            <p>Good time to talk?</p>\n\n            <p><small>12:33 pm</small></p>\n\n        </div>\n\n    </div>\n\n    <div class="cb">\n\n        <div class="chat chat-left bg-theme text-white" text-left padding float-left>\n\n            <p>Hey mate !!</p>\n\n            <p>Yes, tell me your query bro!</p>\n\n            <p><small>12:33 pm</small></p>\n\n        </div>\n\n    </div>\n\n    <div class="fixed-bottom">\n\n        <ion-list inset>\n\n            <ion-item>\n\n                <ion-icon name="md-add" class="circle-icon" item-start></ion-icon>\n\n                <ion-input type="text" placeholder="Type your Message"></ion-input>\n\n                <ion-icon name="md-send" class="text-theme" item-end></ion-icon>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\chatting\chatting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__findride_findride__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { TabsPage } from '../tabs/tabs';

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.findride = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__findride_findride__["a" /* FindridePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\login\login.html"*/'<ion-header class="transparent">\n\n    <ion-navbar>\n\n        <ion-title><span class="text-white"></span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-background-img">\n\n    <div class="logo">\n\n        <img src="assets/imgs/logo.png" alt="logo">\n\n    </div>\n\n\n\n    <div class="bg-white login">\n\n        <div class="">\n\n            <ion-list class="form">\n\n                <ion-item>\n\n                    <ion-label>Email</ion-label>\n\n                    <ion-input type="email" text-right></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label>Contraseña</ion-label>\n\n                    <ion-input type="password" text-right></ion-input>\n\n                </ion-item>\n\n            </ion-list>\n\n            <button ion-button full class="bg-theme text-white btn rounded" (click)="findride()">INICIAR SESIÓN</button>\n\n            <ion-row style="padding-top: 8px;">\n\n                <ion-col (click)="signup()"><small>¿No tienes una cuenta? <strong class="text-theme">Crear cuenta</strong></small></ion-col>\n\n                <ion-col text-right><small>Olvidaste la <strong class="text-theme">Contraseña</strong></small></ion-col>\n\n            </ion-row>\n\n            <p text-center class="option-login"><span>O ACCEDE CON TU CUENTA DE</span></p>\n\n            <ion-row>\n\n                <ion-col col-6><button ion-button full class="bg-blue text-white btn rounded small"><img src="assets/imgs/fb_white.png">\n\n                    <span>Facebook</span></button></ion-col>\n\n                <ion-col col-6><button ion-button full class="bg-white text-dark btn rounded small"><img src="assets/imgs/google.png">\n\n                    <span>Google&nbsp;&nbsp;</span></button></ion-col>\n\n            </ion-row>\n\n        </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\users\alber\goublue\apps\vroom_driver_src\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map