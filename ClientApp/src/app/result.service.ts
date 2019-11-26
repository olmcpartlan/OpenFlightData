import { Injectable } from '@angular/core';
import { DisplayComponent } from './display/display.component';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  airport
  directions;
  timestamps;
  temp = [];
  fh = [];
  constructor() { }

  returnDirections(dir, time, airport, temp) {
    console.log(airport);
    this.temp = temp;
    this.airport = airport;
    this.directions = dir;
    this.timestamps = time;
    for(var num in this.temp) {
      //Convert from Kelvin to Fahrenheit
      this.fh.push(Math.floor((Number(this.temp[num])*(9/5))-459.67));

    }
    console.log(this.temp);
    console.log(`RESULT: ${dir}`);
    console.log(`TIME: ${this.timestamps}`);
  }
}
