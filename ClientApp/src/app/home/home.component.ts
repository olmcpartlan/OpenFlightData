import { Component } from '@angular/core';

import { DataService } from '../data.service';

import { $httpService } from '../$http.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DataService]
})


export class HomeComponent {
  selectedAirports;
  allAirports;
  allIDs;
  ids;
  selectedAirport;
  directions;
  form: FormGroup;
  idForm: FormGroup;
  constructor(private router: Router, private dataService: DataService, public fb: FormBuilder) {
    this.form = this.fb.group({
      muni: ['']
    })
    this.idForm = this.fb.group({
      airport: ['']
    })

    this.dataService.getAllAirports()
      .subscribe();
      this.getAirports();
  }

  getAirports() {
    var res = this.dataService.returnAllResponse();
    this.allAirports = res;
    
    
  }
  getSelectedAirport() {
    var res = this.dataService.returnSelectedAirport();
    this.selectedAirport = res;
    setTimeout(() => {
      this.directions = this.dataService.directions;
      console.log(`Home Direction: ${this.directions}`);
      this.router.navigate(["/display"]);
    }, 1000);
    
  }

  

  getIds() {
    var res = this.dataService.returnIds();
    this.ids = res;
  }

  displayVals() {
    var data = this.dataService.returnData();
    this.selectedAirports = data;
  }

  public sendForm() {
    this.dataService.sendGetRequest(this.form.value)
      .subscribe();
    this.displayVals();
    this.getIds();
  }
  public sendIds() {
    this.dataService.sendAirport(this.idForm.value)
      .subscribe();
    this.getSelectedAirport();
      
  }


}
