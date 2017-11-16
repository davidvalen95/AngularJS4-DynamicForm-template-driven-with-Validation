import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NgForm} from '@angular/forms';
import {BaseForm} from '../../forms/base-form';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public baseForms: BaseForm[] = [];
  c

  ngOnInit() {
  }

  formSubmit(form: NgForm) {
    if (form.valid){
      console.log(form.value);
    }else{
      console.log('You Cheat');
    }
  }


}
