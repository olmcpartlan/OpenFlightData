import { Component } from '@angular/core';

import { DataService } from '../data.service';

import { $httpService } from '../$http.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DataService]
})


export class HomeComponent {
  selectedAirports;
  allAirports;
  form: FormGroup;
  constructor(private dataService: DataService, public fb: FormBuilder) {
    this.form = this.fb.group({
      muni: ['']
    })
    this.dataService.getAllAirports()
      .subscribe();
      this.getAirports();
  }

  getAirports() {
    var res = this.dataService.returnAllResponse();
    this.allAirports = res;
    
  }

  displayVals() {
    var data = this.dataService.returnData();
    console.log(data);
    this.selectedAirports = data;
  }

  public sendForm() {
    this.dataService.sendGetRequest(this.form.value)
      .subscribe();
    this.displayVals();
  }

}
