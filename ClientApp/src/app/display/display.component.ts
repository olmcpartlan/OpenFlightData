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
  <div *ngFor="let row of list">
    <div class="container">
      <div class="forecast" *ngFor="let dir of row">
        <p>{{dir}}</p>
        <img class="image" src="assets/directions/{{dir}}.png" alt="err" />
      </div>
    </div>
  </div>
  `
})
export class DisplayComponent {
  directions;
  list = [];
  
  constructor(private dataService: DataService, private home: HomeComponent, private result: ResultService) { }
  
  public ngOnInit() {
    this.directions = this.result.directions;
    this.list.push(this.directions.slice(0,8));
    this.list.push(this.directions.slice(8,16));
    this.list.push(this.directions.slice(16,24));
    this.list.push(this.directions.slice(24,32));
    this.list.push(this.directions.slice(32,40));
    console.log(this.list);
  }

  // getDirection(dir) {
  //   this.directions = dir
  //   console.log(this.directions);
  // }
  
}
