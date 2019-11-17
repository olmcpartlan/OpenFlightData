import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // private REST_API_SERVER = "http://localhost:5001/";
  

  constructor(private httpClient: HttpClient) { }
  getBaseUrl() {
    return 'http://192.168.0.4:5000/';
  }

  sendGetRequest() {

    return this.httpClient.get("http://192.168.0.4:5000/")
        .map((response: Response) => {
          console.log(response);
        })
        




    // const headers = new HttpHeaders({'Content-Type': 'text/plain'});
    // console.log("before get request");
    // var req = this.httpClient.get("api/", {responseType: 'text', headers})
    // return req;
  }

}



