import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
    templateUrl: './usage.component.html',
    styleUrls: ['./usage.component.css']
})

export class UsageComponent {
    pageTitle: string = 'App Usage By Date';
    usageLog: Date[];
        
    constructor(app: AppComponent) {
        this.usageLog = app.usageLog;
    }

    ngOnInit() {
        console.log('count = ' + this.usageLog.length);
    }
}