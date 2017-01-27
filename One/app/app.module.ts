// Imports
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Declarations
import { AppComponent }         from './app.component';
import { HomeComponent }      from './home/home.component';
import { UsageComponent }      from './usage/usage.component';
import { IPService }          from './ip.service';
import { routing } from './app.routes';

// Decorator
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    UsageComponent
  ],
  providers: [
    IPService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
    // Module class
}