// Imports
import { Injectable }    from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class IPService {

  // Class constructor with Jsonp injected
  constructor(private jsonp: Jsonp) { }

  // Base URL for ip API
  private serviceUrl = 'http://freegeoip.net/';
  private key: string = '555f8155d42d5c9be4705beaf4cce089';

  // Get an ip address + location data of current location
  getIP(ip : string) {

    // End point for ip location:
    // http://freegeoip.net/json/?callback=
    const endPoint = 'json/'

    // URLSearchParams makes it easier to set query parameters and construct URL
    // rather than manually concatenating
    let params = new URLSearchParams();
    params.set('callback', '');

    // Return response
    return this.jsonp
              .get(this.serviceUrl + endPoint, { search: params })
              .map(response => <string[]> response.json());
  }
}