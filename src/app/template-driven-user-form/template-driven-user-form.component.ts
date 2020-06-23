import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-user-form',
  templateUrl: './template-driven-user-form.component.html',
  styleUrls: ['./template-driven-user-form.component.css']
})
export class TemplateDrivenUserFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showInfo(myFormValue) {
    console.log(myFormValue.value);
  }

}
