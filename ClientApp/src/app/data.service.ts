import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  getBaseUrl() {
    return 'http://192.168.0.4:5000/';
  }

  sendGetRequest(location) {
    console.log(location.muni);
    
    return this.httpClient.get(`http://192.168.0.4:5000/${location.muni}`)
        .map((response: Response) => {
          console.log(response);
        })
        


  }

}



