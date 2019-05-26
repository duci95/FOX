import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: string;
  constructor() { }

  ngOnInit() {
    this.about = `The author of this site is Dušan Krsmanović, a student at ICT College of Applied Studies.
      Web developer with determination to learn new frontend and backend technologies and expand existing knowledge.
      This site is used only for educational purposes`;
  }

}
