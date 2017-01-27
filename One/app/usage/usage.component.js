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
var UsageComponent = (function () {
    function UsageComponent() {
        this.pageTitle = 'App Usage By Date';
        this.locations = [{ "date": new Date(), "ip": "4.34.192.138", "country_name": "United States", "region_name": "Pennsylvania", "city": "Philadelphia", "zip_code": "19147" }];
    }
    UsageComponent = __decorate([
        core_1.Component({
            templateUrl: './app/usage/usage.component.html',
            styleUrls: ['./app/usage/usage.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], UsageComponent);
    return UsageComponent;
}());
exports.UsageComponent = UsageComponent;
//# sourceMappingURL=usage.component.js.map