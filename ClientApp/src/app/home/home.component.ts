import { Component } from '@angular/core';

import { DataService } from '../data.service';

import { $httpService } from '../$http.service';

//Right now 4200 is successfully calling "localhost:5000", but returns an error because of 'localhost'

//Publish backend to IIS
//https://docs.microsoft.com/en-us/visualstudio/deployment/tutorial-import-publish-settings-iis?view=vs-2019


//RUN THIS "chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security" AND EVERYTHING WILL BE OKAY AGAIN

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private dataService: DataService) { 
    this.dataService.sendGetRequest()
      .subscribe((data) => {
        console.log(data);
      });
  }

  // ngOnInit() {
  //   console.log("started");
  //   this.dataService.sendGetRequest().subscribe(
  //     () => console.log("loaded")
  //   )
    
  // }
  _sendGetRequest() {
    this.dataService.sendGetRequest().subscribe((data => {
      console.log(data);
    }))
    console.log("after requset");

  }
}
