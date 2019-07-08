webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.angle = { lower: 0, upper: 2 };
        this.value_A = { lower: 0, upper: 200 };
        this.value_B = { lower: 0, upper: 200 };
        this.value_a = { lower: 0, upper: 20 };
        this.value_b = { lower: 0, upper: 20 };
        this.phi = 0;
        this.x = 0;
        this.nx = 0;
        this.y = 0;
        this.ny = 0;
        this.a = 0;
        this.b = 0;
        this.A = 0;
        this.B = 0;
        this.t = 0;
        this.PI = 3.14159265;
        this.speed = 0.005;
        this.angle = 0;
        this.value_A = 0;
        this.value_B = 0;
        this.value_a = 0;
        this.value_b = 0;
    }
    HomePage.prototype.phi_angle = function (ON) {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.image = document.getElementById("img");
        //Calculate width and height od the screen
        this.WIDTH = this.canvas.width;
        this.HEIGHT = this.canvas.height;
        this.clear();
        clearTimeout(this.timer);
        // The scroll has values from 0 to 20 so we divide them by 10 to get the range [0, 2]
        this.phi = this.angle / 10;
        this.A = this.value_A;
        this.B = this.value_B;
        this.a = this.value_a;
        this.b = this.value_b;
        if (ON) {
            this.t = 0;
            // Calculate the first point to start
            this.nx = this.A * Math.sin(this.a * this.t);
            this.ny = this.B * Math.sin(this.b * this.t + this.angle);
            // Clear the screen each time we change the angle
            this.clear();
            this.lissajous();
        }
    };
    HomePage.prototype.lissajous = function () {
        var _this = this;
        // Timer to calculate the next point
        this.timer = setTimeout(function () {
            _this.lissajous();
        }, 5);
        // LISSAJOUS CURVES
        this.x = this.A * Math.sin(this.a * this.t);
        this.y = this.B * Math.sin(this.b * this.t + this.angle);
        // Draw the point
        this.draw();
        // Actual point is now the previous one
        this.nx = this.x;
        this.ny = this.y;
        // Increment time
        this.t += this.speed;
    };
    HomePage.prototype.draw = function () {
        this.ctx.beginPath();
        // Last point
        this.ctx.moveTo(this.nx + this.WIDTH / 2, this.ny + this.HEIGHT / 2);
        // Next point
        this.ctx.lineTo(this.x + this.WIDTH / 2, this.y + this.HEIGHT / 2);
        this.ctx.lineWidth = 5;
        this.ctx.stroke();
    };
    HomePage.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\osciloscope\src\pages\home\home.html"*/'<ion-content padding>\n\n    <div id="background_osciloscope">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <!-- Col screen + bar -->\n          <ion-col>\n            <div id ="screen">\n\n                <canvas id="canvas" width="500" height="500" ></canvas>\n\n                <img id="img" src="https://mbtskoudsalg.com/images/red-circle-png-11.png" hidden> \n  \n            </div>\n\n            <div id="phi">\n              <p></p>\n              ϕ = {{this.phi}}\n              <ion-range min="0" max="20" step="1" [(ngModel)]="angle" color="blue" (ionChange)="phi_angle(ON)">\n                <ion-label range-left>0π</ion-label>\n                <ion-label range-right>2π</ion-label>\n              </ion-range>\n            </div>\n          </ion-col>\n\n          <!-- Col controls -->\n          <ion-col>\n\n            <ion-grid>\n\n              <!-- Row ON / OFF  - Lissajous curves -->\n              <ion-row>\n                \n                <!-- Lissajous Curves -->\n                <ion-col id="lissajous_curves">\n                    LISSAJOUS CURVES:\n                    <ion-col id="lissajous">\n                        <p> x = A * sin(a * t) </p>\n                        <p> y = B * sin(b * t + ϕ)</p>\n                    </ion-col>\n                </ion-col>\n\n                  <ion-col>\n                    <ion-item id = "on_off">\n                        <ion-label>ON</ion-label>\n                        <ion-toggle [(ngModel)]="ON" [checked]="false" (ionChange)="phi_angle(ON)"></ion-toggle>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n\n              <!-- Row A + B -->\n              <ion-row id="A_and_B">\n\n                <ion-col>\n                  <div id="controller_Aa">\n                      <p></p>\n                      A = {{this.A}}\n                      <ion-range min="0" max="200" step="1" [(ngModel)]="value_A" color="white" (ionChange)="phi_angle(ON)">\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>200</ion-label>\n                      </ion-range>\n                    </div>\n                  </ion-col>\n\n                <ion-col>\n                  <div id="controller_Bb">\n                      <p></p>\n                      B = {{this.B}}\n                      <ion-range min="0" max="200" step="1" [(ngModel)]="value_B" color="blue" (ionChange)="phi_angle(ON)">\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>200</ion-label>\n                      </ion-range>\n                    </div>\n                </ion-col>\n              </ion-row>\n\n              <!-- Row a + b -->\n              <ion-row id="a_and_b">\n                <ion-col>\n\n                  <div id="controller_Aa">\n                      <p></p>\n                      a = {{this.a}}\n                      <ion-range min="0" max="20" step="1" [(ngModel)]="value_a" color="blue" (ionChange)="phi_angle(ON)">\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>20</ion-label>\n                      </ion-range>\n                    </div>\n\n                </ion-col>\n\n                <ion-col>\n                  <div id="controller_Bb">\n                      <p></p>\n                      b = {{this.b}}\n                      <ion-range min="0" max="20" step="1" [(ngModel)]="value_b" color="blue" (ionChange)="phi_angle(ON)">\n                        <ion-label range-left>0</ion-label>\n                        <ion-label range-right>20</ion-label>\n                      </ion-range>\n                    </div>\n                </ion-col>\n\n              </ion-row>\n              \n            </ion-grid>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  <ion-footer>\n    <ion-toolbar>\n      <ion-title> Sara Berezo Loza, GUI Programming, Politechnika Łódzka </ion-title>\n    </ion-toolbar>\n  </ion-footer>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\osciloscope\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\osciloscope\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Sara\Desktop\Universidad\ERASMUS\GUI Programming\osciloscope\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map