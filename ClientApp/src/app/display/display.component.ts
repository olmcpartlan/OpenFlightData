import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  directions;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    setTimeout(() => {
      this.directions = this.dataService.directions;
      console.log(`Display Direction: ${this.directions}`);
    }, 1000);
    
  }

}
