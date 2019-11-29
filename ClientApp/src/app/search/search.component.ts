import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { DataService } from '../data.service'
import { Router } from '@angular/router';
import { ResultService } from '../result.service';
/**
 * @title Plain input autocomplete
 */

//Still need to finish form for Search Componenet

//Getting airport names to filter on frontend

//Need to get associated ID for airport
//Data Service has a variable for all airport IDs
//Get all IDs or somehow send chosen ID??

//Probably going to make a very similar function to the Home component //because theyre both getting redirected to the Display Component. 

@Component({
  selector: 'app-home',
  templateUrl: './search.component.html',

})
export class SearchComponent implements OnInit {
  control = new FormControl();
  airports: string[];
  airportName = [];
  allAirports
  portAndId = [];
  selectedAirport;
  searchForm: FormGroup;
  filteredPorts: Observable<string[]>;
  directions;
  timestamps;
  temp;
  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router, private result: ResultService) {
    this.dataService.getAllAirports()
      .subscribe();
    this.displayAirports();
    this.searchForm = this.fb.group({
      airport: ['']
    })
    console.log(`airports: ${this.allAirports}`)
  }

  ngOnInit() {
    this.filteredPorts = this.control.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.allAirports = this.dataService.searchAirports;
    console.log(this.allAirports);

    // for (var port in this.allAirports) {
    //   var temp = [];
    //   temp.push(this.allAirports[port].name);
    //   temp.push(this.allAirports[port].id);
    //   console.log(temp);
    //   this.portAndId.push(temp);
    // }
  }
  logAirport() {
    for(var port in this.allAirports) {
      if(this.allAirports[port].name == this.selectedAirport ) {
        console.log(this.allAirports[port].id);
        this.dataService.searchAirport(this.allAirports[port].id);
        this.directions = this.dataService.directions;
        this.timestamps = this.dataService.timestamps;
        this.temp = this.dataService.temp;
        console.log(this.directions);
        console.log(this.timestamps);
        console.log(this.temp);
        setTimeout(() => {
          this.result.returnDirections(this.directions, this.timestamps, this.temp);
          
          this.router.navigate(["/display"]);
        }, 500);
        
      }

    }
  }

  displayAirports() {
    var res = this.dataService.allAirports;
    this.airports = res;
    console.log(this.airports);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    this.selectedAirport = this.airports.filter(option => option.toLowerCase().includes(filterValue));
    return this.airports.filter(option => option.toLowerCase().includes(filterValue));
  }
}
