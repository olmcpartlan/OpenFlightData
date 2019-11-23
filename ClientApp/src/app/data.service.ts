import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HomeComponent } from './home/home.component';
import { ResponseType } from '@angular/http';
import { subscribeOn } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  allAirports = [];
  allIds = [];
  ids = [];
  selectedAirport;
  directions = [];
  converted;
  @Input() airports = [];

  constructor(private httpClient: HttpClient) { }

  returnData() {
    return this.airports;
  }

  returnIds() {
    return this.ids;
  }

  returnAllResponse() {
    return this.allAirports;
  }

  returnAllID() {
    return this.allIds;
  }

  returnSelectedAirport() {
    return this.selectedAirport;
  }

  getAllAirports() {
    return this.httpClient.get(`http://localhost:5000/`)
      .map((response: Response) => {
        for (var port in response) {
          this.allAirports.push(response[port].name);
          this.allIds.push(response[port].id);
        }
      });

  }

  sendGetRequest(location) {

    return this.httpClient.get(`http://localhost:5000/${location.muni}`)
      .map((response: Response) => {

        for (var port in response) {
          this.airports.push(response[port]);

        }

      })
  }
  sendAirport(location) {
    return this.httpClient.get(`http://localhost:5000/airport/${location.airport}`)
      .map((response: Response) => {
        console.log(response);
        for(var res in response) {
          // console.log(`RESPONSE: ${response[res].wind.deg}`);
          this.convertDirection(response[res].wind.deg);
        }
        
      })
  }

  convertDirection(deg) {
    var route = `http://localhost:5000/airport/convert/${deg}`;
    return this.httpClient.get(route, {responseType: 'text'})
      .subscribe((res) => {
      this.directions.push(res);
      console.log(this.directions);
      
    });
  
  }

}



