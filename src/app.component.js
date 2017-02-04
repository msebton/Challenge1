"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.usageKey = 'usage-key';
        this.usageLog = new Array();
    }
    AppComponent.prototype.ngOnInit = function () {
        // store the dates this app has been started, in local storage
        if (this.localStorageAvailable()) {
            if (!sessionStorage.getItem(this.usageKey)) {
                sessionStorage.setItem(this.usageKey, 'true');
                if (localStorage.getItem(this.usageKey)) {
                    try {
                        this.usageLog = JSON.parse(localStorage.getItem(this.usageKey));
                        this.usageLog.push(new Date());
                    }
                    catch (e) {
                        localStorage.clear();
                    }
                    localStorage.setItem(this.usageKey, JSON.stringify(this.usageLog));
                }
                else {
                    this.usageLog.push(new Date());
                    localStorage.setItem(this.usageKey, JSON.stringify(this.usageLog));
                }
            }
            else {
                this.usageLog = JSON.parse(localStorage.getItem(this.usageKey));
            }
        }
        console.log('sessions = ' + this.usageLog.length);
    };
    AppComponent.prototype.localStorageAvailable = function () {
        try {
            var storage = window.localStorage, x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'challenge1-app',
            templateUrl: '../app/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map