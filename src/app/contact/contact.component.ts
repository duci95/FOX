import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      FirstName : ["", Validators.required],
      LastName : ["", Validators.required],
      Email : ["", Validators.required],
      Content : ["", Validators.required]
    });
  }
  onSubmit(){
    console.log(this.messageForm.value);
  }
}

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
