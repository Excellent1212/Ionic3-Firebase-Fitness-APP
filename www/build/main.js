webpackJsonp([11],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassMembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ClassMembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassMembersPage = /** @class */ (function () {
    function ClassMembersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClassMembersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClassMembersPage');
    };
    ClassMembersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-class-members',template:/*ion-inline-start:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\class-members\class-members.html"*/'<!--\n\n  Generated template for the ClassMembersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="darkfitness">\n\n    <ion-title class="title-custom" text-center>Class members</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="../../assets/imgs/Stylish-Attitude-Girl-Images-for-FB-Profile-Pic.jpg">\n\n          </ion-avatar>\n\n          <h2>Finn</h2>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n              <img src="../../assets/imgs/Stylish-Attitude-Girl-Images-for-FB-Profile-Pic.jpg">\n\n            </ion-avatar>\n\n            <h2>Finn</h2>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-avatar item-start>\n\n                <img src="../../assets/imgs/Stylish-Attitude-Girl-Images-for-FB-Profile-Pic.jpg">\n\n              </ion-avatar>\n\n              <h2>Finn</h2>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-avatar item-start>\n\n                  <img src="../../assets/imgs/Stylish-Attitude-Girl-Images-for-FB-Profile-Pic.jpg">\n\n                </ion-avatar>\n\n                <h2>Finn</h2>\n\n              </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\class-members\class-members.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ClassMembersPage);
    return ClassMembersPage;
}());

//# sourceMappingURL=class-members.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_class_view_class__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_members_class_members__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ClassesDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassesDetailsPage = /** @class */ (function () {
    function ClassesDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ClassesDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClassesDetailsPage');
    };
    ClassesDetailsPage.prototype.pushToViewClassPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_class_view_class__["a" /* ViewClassPage */]);
    };
    ClassesDetailsPage.prototype.pushToClassMembersPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__class_members_class_members__["a" /* ClassMembersPage */]);
    };
    ClassesDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-classes-details',template:/*ion-inline-start:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\classes-details\classes-details.html"*/'<!--\n\n  Generated template for the ClassesDetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="darkfitness">\n\n    <ion-title class="title-custom" text-center>Details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item (click)="pushToViewClassPage()">\n\n          <ion-icon name="information-circle" item-start></ion-icon>\n\n            View details\n\n        </ion-item>\n\n        <ion-item (click)="pushToClassMembersPage()">\n\n          <ion-icon ios="md-contact" md="md-contact" item-start></ion-icon>\n\n            Members\n\n          </ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\classes-details\classes-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ClassesDetailsPage);
    return ClassesDetailsPage;
}());

//# sourceMappingURL=classes-details.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_class_view_class__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_details_classes_details__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ClassesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassesPage = /** @class */ (function () {
    function ClassesPage(navCtrl, navParams, menuCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.press = 0;
        // Cerrar menu cuando se ingrese a ClassesPage
        this.menuCtrl.close();
    }
    ClassesPage.prototype.pushViewClass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_class_view_class__["a" /* ViewClassPage */]);
    };
    ClassesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClassesPage');
    };
    ClassesPage.prototype.pressClassDetails = function (e) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__classes_details_classes_details__["a" /* ClassesDetailsPage */], {}, { cssClass: '.classesDetails' });
        popover.present();
    };
    ClassesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-classes',template:/*ion-inline-start:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\classes\classes.html"*/'<!--\n\n  Generated template for the ClassesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="darkfitness">\n\n    <ion-title class="title-custom" text-center>Scheduled classes</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list xml:space="preserve">\n\n        <ion-item class="ion-item-custom" (press)="pressClassDetails($event)">\n\n          <ion-thumbnail item-start>\n\n              <svg-icon src="../../assets/icons-pack-one/stationary-bicycle.svg" [svgStyle]="{ \'width.px\':70 }" ></svg-icon>\n\n          </ion-thumbnail>\n\n          <div><ion-icon name="arrow-dropright"></ion-icon> Spinning</div>\n\n          <div><ion-icon name="alarm"></ion-icon> xx/xx/xxx xx:xx am</div>\n\n          <button ion-button clear item-end (click)="pushViewClass()">View</button>\n\n        </ion-item>\n\n        <ion-item class="ion-item-custom" (press)="pressClassDetails($event)">\n\n            <ion-thumbnail item-start>\n\n              <svg-icon src="../../assets/icons-pack-one/running.svg" [svgStyle]="{ \'width.px\':70 }"></svg-icon>\n\n            </ion-thumbnail>\n\n            <div><ion-icon name="arrow-dropright"></ion-icon> Crossfit</div>\n\n            <div><ion-icon name="alarm"></ion-icon> xx/xx/xxx xx:xx am</div>\n\n            <button ion-button clear item-end (click)="pushViewClass()">View</button>\n\n        </ion-item>\n\n        <ion-item class="ion-item-custom" (press)="pressClassDetails($event)">\n\n            <ion-thumbnail item-start>\n\n                <svg-icon src="../../assets/icons-pack-one/running-1.svg" [svgStyle]="{ \'width.px\':70 }"></svg-icon>\n\n              </ion-thumbnail>\n\n            <div><ion-icon name="arrow-dropright"></ion-icon> Cardio</div>\n\n            <div><ion-icon name="alarm"></ion-icon> xx/xx/xxx xx:xx am</div>\n\n            <button ion-button clear item-end (click)="pushViewClass()">View</button>\n\n        </ion-item>\n\n        <ion-item class="ion-item-custom" (press)="pressClassDetails($event)">\n\n            <ion-thumbnail item-start>\n\n                <svg-icon src="../../assets/icons-pack-two/010-strong.svg" [svgStyle]="{ \'width.px\':70 }"></svg-icon>\n\n            </ion-thumbnail>\n\n            <div><ion-icon name="arrow-dropright"></ion-icon> Weight training</div>\n\n            <div><ion-icon name="alarm"></ion-icon> xx/xx/xxx xx:xx am</div>\n\n            <button ion-button clear item-end (click)="pushViewClass()">View</button>\n\n        </ion-item>\n\n        <ion-item class="ion-item-custom" (press)="pressClassDetails($event)">\n\n            <ion-thumbnail item-start>\n\n                <svg-icon src="../../assets/icons-pack-two/002-yoga.svg" [svgStyle]="{ \'width.px\':70 }"></svg-icon>\n\n            </ion-thumbnail>\n\n            <div><ion-icon name="arrow-dropright"></ion-icon> Yoga</div>\n\n            <div><ion-icon name="alarm"></ion-icon> xx/xx/xxx xx:xx am</div>\n\n            <button ion-button clear item-end (click)="pushViewClass()">View</button>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\classes\classes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], ClassesPage);
    return ClassesPage;
}());

//# sourceMappingURL=classes.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoAppPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InfoAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoAppPage = /** @class */ (function () {
    function InfoAppPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    InfoAppPage.prototype.closeInfoApp = function () {
        this.viewCtrl.dismiss();
    };
    InfoAppPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoAppPage');
    };
    InfoAppPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info-app',template:/*ion-inline-start:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\info-app\info-app.html"*/'<!--\n\n  Generated template for the InfoAppPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="darkfitness">\n\n    <ion-title class="title-custom" text-center>info-app</ion-title>\n\n    <ion-buttons ion-button end>\n\n      <button ion-button (click)="closeInfoApp()">\n\n         <span ion-text showWhen="false">Close</span> \n\n        <ion-icon name="md-close" showWhen="android, windows, ios"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<h3>FitnessApp</h3>\n\n	<ul>\n\n		<li>Autor: Carlos Aponte</li>\n\n		<li>Github: http://github.com/CarlosTheory</li>\n\n		<li>Twitter: http://twitter.com/carlostheory</li>\n\n		<li>Instagram: http://instagram.com/carlostheory</li>\n\n	</ul>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\info-app\info-app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], InfoAppPage);
    return InfoAppPage;
}());

//# sourceMappingURL=info-app.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NoUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NoUserPage = /** @class */ (function () {
    function NoUserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NoUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NoUserPage');
    };
    NoUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-no-user',template:/*ion-inline-start:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\no-user\no-user.html"*/'<!--\n\n  Generated template for the NoUserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="darkfitness">\n\n    <ion-title class="title-custom" text-center>Ooops!</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <p><ion-icon name="close-circle"></ion-icon> User not found</p> <br>\n\n    <p>Did you write your password and email right?</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\no-user\no-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NoUserPage);
    return NoUserPage;
}());

//# sourceMappingURL=no-user.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.closeNotifications = function () {
        this.viewCtrl.dismiss();
    };
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\notifications\notifications.html"*/'<!--\n\n  Generated template for the NotificationsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="darkfitness" hideBackButton="false">\n\n    <ion-title class="title-custom" text-center>Notifications</ion-title>\n\n    <ion-buttons ion-button end>\n\n      <button ion-button (click)="closeNotifications()">\n\n         <span ion-text showWhen="false">Close</span> \n\n        <ion-icon name="md-close" showWhen="android, windows, ios"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-card-header>\n\n          Notification Title\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card>\n\n          <ion-card-header>\n\n              Notification Title\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n\n          </ion-card-content>\n\n        </ion-card>\n\n        <ion-card>\n\n            <ion-card-header>\n\n                Notification Title\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n              The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n\n            </ion-card-content>\n\n          </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPostsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HTTP } from '@ionic-native/http';
//import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ShowPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowPostsPage = /** @class */ (function () {
    function ShowPostsPage(navCtrl, navParams, menuCtrl, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.restProvider = restProvider;
        // Cerrar menu cuando se ingrese a ClassesPage
        this.menuCtrl.close();
        // this.http.get('https://jsonplaceholder.typicode.com/posts', {}, {})
        // .then(data => {
        //   console.log(data.status);
        //   console.log(data.data); // data received by server
        //   console.log(data.headers);
        // })
        // .catch(error => {
        //   console.log(error.status);
        //   console.log(error.error); // error message as string
        //   console.log(error.headers);
        // });
        this.getUsers();
    }
    ShowPostsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowPostsPage');
    };
    ShowPostsPage.prototype.getUsers = function () {
        var _this = this;
        this.restProvider.getUsers()
            .then(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    ShowPostsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show-posts',template:/*ion-inline-start:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\show-posts\show-posts.html"*/'<!--\n\n  Generated template for the ShowPostsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="darkfitness">\n\n    <ion-title>Usuarios</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list inset>\n\n    <ion-item *ngFor="let user of users">\n\n      <h2>{{user.name}}</h2>\n\n      <p>Acronimo: {{user.acronym}}</p>\n\n      <ion-item *ngFor="let province of usersp">\n\n        <p>Provincias: province.name</p>\n\n      </ion-item>\n\n      <p>Zona Horaria: {{user.timezone}}</p>\n\n      <p>Coin: {{user.coin}}</p>\n\n      <!-- <p>{{Usuarios.cedula}}</p>\n\n      <p>{{Usuarios.fecha_nacimiento}}</p>\n\n      <p>{{Usuarios.profesion}}</p> -->\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\show-posts\show-posts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], ShowPostsPage);
    return ShowPostsPage;
}());

//# sourceMappingURL=show-posts.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_gyms_user_gyms__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserSettingsPage = /** @class */ (function () {
    function UserSettingsPage(navCtrl, navParams, menuCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.menuCtrl.enable(true, 'profileMenu');
        // Abrir menu automaticamente al entrar a UserPage
        this.menuCtrl.close();
    }
    UserSettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserSettingsPage');
    };
    UserSettingsPage.prototype.popUserGyms = function (e) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__user_gyms_user_gyms__["a" /* UserGymsPage */], {}, { cssClass: '.classesDetails' });
        popover.present();
    };
    UserSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-settings',template:/*ion-inline-start:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\user-settings\user-settings.html"*/'<!--\n\n  Generated template for the UserSettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="darkfitness">\n\n    <ion-title>User Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-item-group padding>\n\n    <ion-list-header>Preferences</ion-list-header>\n\n    <ion-item class="ion-item-custom" (click)="popUserGyms($event)">Select a Gym</ion-item>\n\n    <ion-item class="ion-item-custom">Notifications</ion-item>\n\n    <ion-item class="ion-item-custom">Argentina</ion-item>\n\n  </ion-item-group>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\user-settings\user-settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], UserSettingsPage);
    return UserSettingsPage;
}());

//# sourceMappingURL=user-settings.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_intro_js_intro_js__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_intro_js_intro_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_intro_js_intro_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    //public step1; 
    function UserPage(navCtrl, navParams, menuCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.step1 = true;
        // Activar menu en la pagina UserPage
        this.menuCtrl.enable(true, 'profileMenu');
        // Abrir menu automaticamente al entrar a UserPage
        this.menuCtrl.open();
    }
    UserPage.prototype.hideStep = function () {
        this.step1 = false;
    };
    UserPage.prototype.showNotifications = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__notifications_notifications__["a" /* NotificationsPage */]);
        modal.present();
    };
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage.prototype.intro = function () {
        var _this = this;
        var intro = __WEBPACK_IMPORTED_MODULE_3_intro_js_intro_js___default.a.introJs();
        var menuCtrl = this.menuCtrl;
        intro.setOptions({
            steps: [
                {
                    intro: "Hello!! we want to give you some recommendations"
                },
                {
                    element: '#step1',
                    intro: "You can see the profile settings, just tapping in your profile picture",
                    position: 'bottom'
                },
                {
                    element: '#step2',
                    intro: "You can see the profile settings, just tapping in your profile picture",
                    position: 'bottom'
                }
            ]
        });
        intro.start();
        intro.onexit(function () {
            menuCtrl.close();
            _this.hideStep();
        });
    };
    UserPage.prototype.ngAfterViewInit = function () {
        this.intro();
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\user\user.html"*/'<!--\n\n  Generated template for the UserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-toolbar color="darkfitness">\n\n    <button ion-button menuToggle>\n\n        <ion-icon ios="md-contact" md="md-contact"></ion-icon>\n\n    </button>\n\n    <ion-title class="title-custom" text-center>Events</ion-title>\n\n    <ion-buttons ion-button end>\n\n      <button ion-button (click)="showNotifications()">\n\n        <ion-icon ios="ios-notifications" md="ios-notifications"></ion-icon>\n\n        <ion-badge item-end>3</ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="card-background-page" no-padding>\n\n  <div id="step1" *ngIf=\'step1\'></div>\n\n    <ion-card>\n\n        <img src="../../assets/imgs/events/photo-1506197061617-7f5c0b093236.jpg"/>\n\n        <div class="card-title">São Paulo</div>\n\n        <div class="card-subtitle">41 Friends going</div>\n\n      </ion-card>\n\n\n\n      <ion-card> \n\n        <img src="../../assets/imgs/events/pexels-photo-905336.jpeg"/>\n\n        <div class="card-title">Amsterdam</div>\n\n        <div class="card-subtitle">64 Friends going</div>\n\n      </ion-card>\n\n\n\n      <ion-card>\n\n        <img src="../../assets/imgs/events/pexels-photo-206573.jpeg"/>\n\n        <div class="card-title">San Francisco</div>\n\n        <div class="card-subtitle">72 Friends going</div>\n\n      </ion-card>\n\n\n\n      <ion-card>\n\n        <img src="../../assets/imgs/events/pexels-photo-116078.jpeg"/>\n\n        <div class="card-title">Madison</div>\n\n        <div class="card-subtitle">28 Friends going</div>\n\n      </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/class-members/class-members.module": [
		303,
		10
	],
	"../pages/classes-details/classes-details.module": [
		304,
		9
	],
	"../pages/classes/classes.module": [
		305,
		8
	],
	"../pages/info-app/info-app.module": [
		306,
		7
	],
	"../pages/no-user/no-user.module": [
		307,
		6
	],
	"../pages/notifications/notifications.module": [
		308,
		5
	],
	"../pages/show-posts/show-posts.module": [
		309,
		4
	],
	"../pages/user-gyms/user-gyms.module": [
		310,
		3
	],
	"../pages/user-settings/user-settings.module": [
		311,
		2
	],
	"../pages/user/user.module": [
		312,
		1
	],
	"../pages/view-class/view-class.module": [
		313,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Observable } from "rxjs/Observable";
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = 'http://192.168.0.106:8000/api';
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/users').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.addUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/users', JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_app_info_app__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__no_user_no_user__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, menuCtrl, modalCtrl, popoverCtrl, events) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.events = events;
        //Fondos del slide principal
        this.backgrounds = [
            'assets/login-bg/active-beauty-beautyrobic-868757.jpg',
            'assets/login-bg/active-adult-athlete-703012.jpg',
            'assets/login-bg/adult-blur-body-196654.jpg',
            'assets/login-bg/barbell-crossfit-equipment-949130.jpg'
        ];
        this.passwordType = "password";
        this.passwordShown = false;
        this.login = { email: '', password: '' };
        this.testuser = { email: "test", password: "acceso" };
        // Desactivar menu de perfil de usuario en la pagina Home (Login)
        this.menuCtrl.enable(false, "profileMenu");
    }
    HomePage.prototype.showInfoApp = function () {
        var showinfoapp = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__info_app_info_app__["a" /* InfoAppPage */]);
        showinfoapp.present();
    };
    HomePage.prototype.LogInForm = function () {
        if (this.login.email !== this.testuser.email || this.login.password !== this.testuser.password) {
            this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__no_user_no_user__["a" /* NoUserPage */]).present();
        }
        else {
            this.events.publish('testuser', this.testuser, 2);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserPage */]);
        }
    };
    HomePage.prototype.showPassword = function () {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = "password";
        }
        else {
            this.passwordShown = true;
            this.passwordType = "text";
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\home\home.html"*/'<ion-header no-border>\n\n  <!-- <ion-navbar color="xcore" hideBackButton="true" text-center class="navbar-custom"> -->\n\n  <ion-navbar hideBackButton="true" transparent>\n\n    <!-- <ion-title class="title-custom">\n\n      Access\n\n    </ion-title> -->\n\n    <!-- <ion-buttons end>\n\n      <button ion-button icon-only (click)="showInfoApp()">\n\n        <img width="100px" src="../../assets/imgs/XCORELOGO-8.png">\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding class="ion-content-custom">\n\n  <ion-slides pager="false" autoplay="3000" loop="true" speed="2500" effect="fade">\n\n    <ion-slide class="slide-background swiper-no-swiping" *ngFor="let background of backgrounds" [ngStyle]="{\'background-image\': \'url(\' + background +\')\'}">\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n<div class="login-container" ion-fixed>\n\n<form mode="ios" (ngSubmit)="LogInForm()">\n\n  <ion-item color="dark" class="ion-item-slide">\n\n    <ion-label stacked class="label-color" mode="ios"><ion-icon ios="md-mail" md="md-mail" name="mail"></ion-icon> e-mail</ion-label>\n\n    <!-- <ion-icon stacked ios="md-mail" md="md-mail" item-start></ion-icon> -->\n\n    <ion-input mode="ios" type="email" id="email" [(ngModel)]="login.email" name="email"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item color="dark" class="ion-item-slide">\n\n    <ion-label stacked class="label-color" mode="ios"><ion-icon ios="md-key" md="md-key"></ion-icon> password</ion-label>\n\n    <ion-input mode="ios" [type]="passwordType" id="password" [(ngModel)]="login.password" name="password"></ion-input>\n\n    <ion-icon ios="ios-eye" md="ios-eye" name="eye" [color]="passwordShown === true ? \'gray\' : \'white\'" item-end (click)="showPassword()">\n\n      <div class="viewTap" (click)="showPassword()"></div>\n\n    </ion-icon>\n\n   </ion-item>\n\n\n\n	<div padding text-right>\n\n	  <button ion-button block type="submit" mode="md" color="login">Log In</button>\n\n	  <span text-uppercase class="text-white"><a href="#"><ion-icon name="key"></ion-icon> I forgot my password</a></span>\n\n  </div>\n\n</form>\n\n</div>\n\n<ion-grid>\n\n<div class="ion-footer-custom" text-center>\n\n    <!-- <div text-center>\n\n      <img width="100px" src="../../assets/imgs/XCORELOGO-BLUE.png" (click)="showInfoApp()">\n\n    </div> -->\n\n</div>\n\n</ion-grid>\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_svg_icon__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_user_user__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_info_app_info_app__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_classes_classes__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_notifications_notifications__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_view_class_view_class__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_no_user_no_user__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_classes_details_classes_details__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_class_members_class_members__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_show_posts_show_posts__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_rest_rest__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_user_settings_user_settings__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_user_gyms_user_gyms__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Node Modules








//Ionic Pages














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_info_app_info_app__["a" /* InfoAppPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_classes_classes__["a" /* ClassesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_view_class_view_class__["a" /* ViewClassPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_no_user_no_user__["a" /* NoUserPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_classes_details_classes_details__["a" /* ClassesDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_class_members_class_members__["a" /* ClassMembersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_show_posts_show_posts__["a" /* ShowPostsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_user_settings_user_settings__["a" /* UserSettingsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_user_gyms_user_gyms__["a" /* UserGymsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/class-members/class-members.module#ClassMembersPageModule', name: 'ClassMembersPage', segment: 'class-members', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/classes-details/classes-details.module#ClassesDetailsPageModule', name: 'ClassesDetailsPage', segment: 'classes-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/classes/classes.module#ClassesPageModule', name: 'ClassesPage', segment: 'classes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info-app/info-app.module#InfoAppPageModule', name: 'InfoAppPage', segment: 'info-app', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/no-user/no-user.module#NoUserPageModule', name: 'NoUserPage', segment: 'no-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-posts/show-posts.module#ShowPostsPageModule', name: 'ShowPostsPage', segment: 'show-posts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-gyms/user-gyms.module#UserGymsPageModule', name: 'UserGymsPage', segment: 'user-gyms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-settings/user-settings.module#UserSettingsPageModule', name: 'UserSettingsPage', segment: 'user-settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-class/view-class.module#ViewClassPageModule', name: 'ViewClassPage', segment: 'view-class', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angular_svg_icon__["a" /* AngularSvgIconModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_info_app_info_app__["a" /* InfoAppPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_classes_classes__["a" /* ClassesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_view_class_view_class__["a" /* ViewClassPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_no_user_no_user__["a" /* NoUserPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_classes_details_classes_details__["a" /* ClassesDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_class_members_class_members__["a" /* ClassMembersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_show_posts_show_posts__["a" /* ShowPostsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_user_settings_user_settings__["a" /* UserSettingsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_user_gyms_user_gyms__["a" /* UserGymsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_classes_classes__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_show_posts_show_posts__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_gyms_user_gyms__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_settings_user_settings__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, popoverCtrl, events) {
        var _this = this;
        this.popoverCtrl = popoverCtrl;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.gymReceived = null;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        events.subscribe('gymSelected', function (gymSelected) {
            console.log('The user gym is: ', gymSelected);
            _this.gymReceived = gymSelected;
            return _this.gymReceived;
        });
        // this.receivedLogin();
    }
    // ngAfterViewInit(){
    //   if( this.userReceived != null){
    //     this.intro();
    //   }
    // }
    MyApp.prototype.pushClasses = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_classes_classes__["a" /* ClassesPage */]);
    };
    MyApp.prototype.logOut = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.pushShowPosts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_show_posts_show_posts__["a" /* ShowPostsPage */]);
    };
    MyApp.prototype.pushUserSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_user_settings_user_settings__["a" /* UserSettingsPage */]);
    };
    MyApp.prototype.popUserGyms = function (e) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_user_gyms_user_gyms__["a" /* UserGymsPage */], {}, { cssClass: '.classesDetails' });
        popover.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\app\app.html"*/'<ion-menu id="profileMenu" [content]="content">\n\n    <ion-content no-padding>\n\n            <ion-item-group text-center class="profile-container">\n\n                <div class="profile-bg">\n\n                </div>\n\n                <div class="profile-info" (click)="pushUserSettings()">\n\n                    <div class="profile-picture">\n\n                        <img class="rounded-picture" src="../assets/imgs/Stylish-Attitude-Girl-Images-for-FB-Profile-Pic.jpg">\n\n                      </div>\n\n                    <h3><ion-icon ios="md-person" md="md-person"></ion-icon> Carolina Rodriguez</h3>\n\n                    <small ng-show="gymReceived"><ion-icon ios="md-home" md="md-home"></ion-icon> Gym: {{ gymReceived }} </small>\n\n                </div>\n\n                <hr>\n\n\n\n                <!-- <ion-grid>\n\n                    <ion-row>\n\n                      <ion-col>\n\n                        <div class="profile-picture">\n\n                          <img class="rounded-picture" src="../assets/imgs/Stylish-Attitude-Girl-Images-for-FB-Profile-Pic.jpg">\n\n                        </div>\n\n                      </ion-col>\n\n                      <ion-col>\n\n                        <div class="user-name" text-left>\n\n                          <p>Carolina Rodriguez</p>\n\n                          <small>xCore Gym</small>\n\n                        </div>\n\n                      </ion-col>\n\n                    </ion-row>\n\n                  </ion-grid> -->\n\n            </ion-item-group>\n\n            <ion-item-group padding class="introjs-relativePosition">\n\n                <ion-item class="ion-item-custom" (click)= "pushClasses()" >Scheduled classes <ion-badge item-end>6</ion-badge></ion-item>\n\n                <ion-item class="ion-item-custom">Scheduled</ion-item>\n\n                <ion-item class="ion-item-custom" (click) = "pushShowPosts()" >Show posts</ion-item>\n\n                <ion-item class="ion-item-custom">Angola</ion-item>\n\n                <ion-item class="ion-item-custom">Argentina</ion-item>\n\n                <ion-item class="ion-item-custom">Angola</ion-item>\n\n                <ion-item class="ion-item-custom">Argentina</ion-item>\n\n                <ion-list-header>\n\n                  Preferences\n\n                </ion-list-header>\n\n                  <ion-item class="ion-item-custom" (click)="popUserGyms($event)">Select a Gym</ion-item>\n\n              </ion-item-group>\n\n            <ion-item-group>\n\n                <button mode="md" ion-button class="ExitLogOut" color="danger" (click)="logOut()">\n\n                        <span>logout </span>\n\n                        <ion-icon name="exit"></ion-icon>\n\n                </button>\n\n            </ion-item-group>\n\n\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #content #rootNavController [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewClassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Validators, FormBuilder, FormGroup} from '@angular/forms';
/**
 * Generated class for the ViewClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewClassPage = /** @class */ (function () {
    function ViewClassPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ViewClassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewClassPage');
    };
    ViewClassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-class',template:/*ion-inline-start:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\view-class\view-class.html"*/'<!--\n\n  Generated template for the ViewClassPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="darkfitness">\n\n    <ion-title class="title-custom" text-center>Class details</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Schedule\n\n    </ion-list-header>\n\n    <ion-item>Thursday, 24-06-2018 <ion-icon name="alarm" item-end></ion-icon></ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Trainer\n\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n      <img src="../../assets/imgs/scutaro.jpg">\n\n    </ion-avatar>\n\n    <h2>Marco Scutaro</h2>\n\n    <button ion-button clear item-end>View</button>\n\n  </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Notes\n\n    </ion-list-header>\n\n      <p>If it smells like fish eat as much as you wish grab pompom in mouth and put in water dish attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what\'s your problem? i meant to do that now i shall wash myself intently. Who\'s the baby leave fur on owners clothes chirp at birds claws in your leg but destroy couch as revenge crash against wall but walk away like nothing happened so meowwww. </p>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\view-class\view-class.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViewClassPage);
    return ViewClassPage;
}());

//# sourceMappingURL=view-class.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserGymsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UserGymsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserGymsPage = /** @class */ (function () {
    function UserGymsPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.userGyms = [
            "Gym 1",
            "Gym 2",
            "Gym 3"
        ];
    }
    UserGymsPage.prototype.gymSelect = function (userGym) {
        this.gymSelected = userGym;
        console.log("Selected gym: ", userGym);
        this.events.publish("gymSelected", this.gymSelected, 1);
    };
    UserGymsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserGymsPage');
    };
    UserGymsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-gyms',template:/*ion-inline-start:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\user-gyms\user-gyms.html"*/'<!--\n\n  Generated template for the UserGymsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="darkfitness">\n\n    <ion-title>My Gyms</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let userGym of userGyms" (click)="gymSelect(userGym)">\n\n      {{ userGym }}\n\n    </button>\n\n</ion-list>\n\n<small ng-show="gymSelected">\n\n  Gym selected: {{ gymSelected }}\n\n</small>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Carlos David Aponte\Documents\Desarrollo\ionic\appIonic\fitnessap\src\pages\user-gyms\user-gyms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], UserGymsPage);
    return UserGymsPage;
}());

//# sourceMappingURL=user-gyms.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map