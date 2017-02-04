"use strict";
var router_1 = require('@angular/router');
var usage_component_1 = require('./usage/usage.component');
var home_component_1 = require('./home/home.component');
// Route Configuration
exports.routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'usage', component: usage_component_1.UsageComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map