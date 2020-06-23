import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-model-driven-user-form',
  templateUrl: './model-driven-user-form.component.html',
  styleUrls: ['./model-driven-user-form.component.css']
})
export class ModelDrivenUserFormComponent implements OnInit {

  userForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50)
    ]),
    mySelect: new FormControl(),
    myMultiSelect: new FormControl(),
    myText: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  showInfo() {
    console.log(this.userForm.value);
  }

}
