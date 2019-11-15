import { Component } from '@angular/core';
import { $http } from '../$http.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  buttonPressed() {
    console.log("hree");
  
  }

  ngOnInit() {
    $http({
      method: 'GET',
      url: '/someUrl'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }

}
