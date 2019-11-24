import { Injectable } from '@angular/core';
import { DisplayComponent } from './display/display.component';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  directions;
  constructor() { }

  returnDirections(dir) {
    this.directions = dir;
    console.log(`RESULT: ${dir}`);
  }
}
