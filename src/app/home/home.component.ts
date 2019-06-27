import { Component, OnInit } from '@angular/core';
import {TopService} from "../top.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  series: any;

  constructor(private data : TopService) { }

  ngOnInit() {
    this.data.getTopSeries().subscribe(data => {
      this.series = data;
    });
  }

}
