import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { HomeComponent } from '../home/home.component';
import { ResultService } from '../result.service';


@Component({
  selector: 'app-display',
  styleUrls: ['./display.component.css'],
  providers: [DataService],
  template: 
  `
    <div class="forecast" *ngFor="let dir of directions">
      <p>{{dir}}</p>
    </div>
  `
})
export class DisplayComponent {
  directions;
  constructor(private dataService: DataService, private home: HomeComponent, private result: ResultService) { }
  
  public ngOnInit() {
    this.directions = this.result.directions;
    
  }

  // getDirection(dir) {
  //   this.directions = dir
  //   console.log(this.directions);
  // }
  
}
