import { Component } from '@angular/core';

@Component({
    selector: 'challenge1-app',
    template: `
            
            <div class="text-center">
                <h1>Hello World!</h1>
            </div>
            <div id="divButton">
                <button class="btn btn-primary center-block" type="button" (click)="onClick()">Click Me</button>
            </div>
    `
})
export class AppComponent {
    onClick(): void {
        console.log("button clicked");
    }
 }
