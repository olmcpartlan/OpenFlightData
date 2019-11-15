import { Component } from '@angular/core';

import { DataService } from '../data.service';

import { $httpService } from '../$http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log("started");
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);

    })

  }
}
