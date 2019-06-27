import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class TopService {

  constructor(private service : HttpClient) { }

  getTopSeries () {
    return  this.service.get('http://localhost:4200/assets/top.json');
  }
}
