import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ILocation } from './location';

@Component({
    templateUrl: './app/usage/usage.component.html',
    styleUrls: ['./app/usage/usage.component.css']
})

export class UsageComponent {
    pageTitle: string = 'App Usage By Date';
    locations: ILocation[] = [{"date": new Date(),"ip":"4.34.192.138","country_name":"United States","region_name":"Pennsylvania","city":"Philadelphia","zip_code":"19147"}];
}