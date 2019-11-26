import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { HomeComponent } from '../home/home.component';
import { ResultService } from '../result.service';
import { Router } from '@angular/router';

//Date being displayed is kind of accurate, until time hits midnight and next date is hit. Some way of conveying that on the fronend?
//To get date displayed on each compass, {{dates[(8*i)+j]}}
@Component({
  selector: 'app-display',
  styleUrls: ['./display.component.css'],
  providers: [DataService],
  template: 
  `
  <div *ngFor="let row of list; index as i">
    <div class="container">
      <h4>{{dates[i*8]}}</h4>
      
      <div class="forecast" *ngFor="let dir of row; index as j">
        <p>Wind: {{dir}}</p>
        <p>{{times[(8*i)+j]}}</p>
        <p>{{temp[(8*i)+j]}}°F</p>
        <img class="image" src="assets/directions/{{dir}}.png" alt="err" />
      </div>
    </div>
  </div>
  `
})
export class DisplayComponent {
  directions;
  timestamps;
  airport;
  list = [];
  dates = [];
  times = [];
  temp = [];
  constructor(private dataService: DataService, private home: HomeComponent, private result: ResultService, private router: Router) { }
  
  public ngOnInit() {
    this.temp = this.result.fh;
    this.directions = this.result.directions;
    if(this.directions == null) {
      this.router.navigate(["/"]);

    }
    this.list.push(this.directions.slice(0,8));
    this.list.push(this.directions.slice(8,16));
    this.list.push(this.directions.slice(16,24));
    this.list.push(this.directions.slice(24,32));
    this.list.push(this.directions.slice(32,40));
    this.timestamps = this.result.timestamps;
    this.Convert(this.timestamps);
  }

  public Convert(timestamps) {
    //Res is populated after initial split 
    var res = [];
    
    //then dates and times are being populated and correctly organized
    for(var i = 0; i < timestamps.length; i++) {
        res.push(timestamps[i].split(" "));
        this.dates.push(res[i][0]);
        this.times.push(res[i][1]);
        
    }
  }

  
}
