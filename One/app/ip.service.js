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
// Imports
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
// Decorator to tell Angular that this class can be injected as a service to another class
var IPService = (function () {
    // Class constructor with Jsonp injected
    function IPService(jsonp) {
        this.jsonp = jsonp;
        // Base URL for ip API
        this.serviceUrl = 'http://freegeoip.net/';
        this.key = '555f8155d42d5c9be4705beaf4cce089';
    }
    // Get an ip address + location data of current location
    IPService.prototype.getIP = function (ip) {
        // End point for ip location:
        // http://freegeoip.net/json/?callback=
        var endPoint = 'json/';
        // URLSearchParams makes it easier to set query parameters and construct URL
        // rather than manually concatenating
        var params = new http_1.URLSearchParams();
        params.set('callback', '');
        // Return response
        return this.jsonp
            .get(this.serviceUrl + endPoint, { search: params })
            .map(function (response) { return response.json(); });
    };
    IPService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], IPService);
    return IPService;
}());
exports.IPService = IPService;
//# sourceMappingURL=ip.service.js.map