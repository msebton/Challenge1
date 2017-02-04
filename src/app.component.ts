import { Component } from '@angular/core';

@Component({
    selector: 'challenge1-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    private usageKey: string = 'usage-key';
    public usageLog: Array<Date> = new Array<Date>();

    ngOnInit() {
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
    }

    localStorageAvailable() {
        try {
            var storage = window.localStorage, x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return false;
        }
    }
 }
