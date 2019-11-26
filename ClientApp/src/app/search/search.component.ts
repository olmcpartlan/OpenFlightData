import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { DataService } from '../data.service'
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
  
  
  filteredPorts: Observable<string[]>;
  constructor(private dataService: DataService) { 
    this.dataService.getAllAirports()
      .subscribe();
    this.displayAirports();
    
  }

  ngOnInit() {
    this.filteredPorts = this.control.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  displayAirports() {
    var res = this.dataService.allAirports;
    this.airports = res;
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.airports.filter(option => option.toLowerCase().includes(filterValue));
  }
}
