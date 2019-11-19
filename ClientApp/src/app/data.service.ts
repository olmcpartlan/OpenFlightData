import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HomeComponent } from './home/home.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  @Input() airports = [];

  constructor(private httpClient: HttpClient) { }

  returnData() {
    return this.airports;
  }

  sendGetRequest(location) {
    console.log(location.muni);

    return this.httpClient.get(`http://localhost:5000/${location.muni}`)
      .map((response: Response) => {
        console.log("****************");
        console.log(response);

        for (var port in response) {
          console.log(response[port].name);
          this.airports.push(response[port].name);
        }
        
      })
  }

}



