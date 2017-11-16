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
  constructor(private title: Title) {
    title.setTitle('Login');

    const usernameForm: BaseForm = new BaseForm('Username', 'Username', 'username', 'text');
    usernameForm.rules = {
      'required': true,
      'minlength': 5,
      'maxlength': 7,
      'pattern': '[\\w]*',
      'patternInfo': 'Only word and number no spaces and symbols'
    };
    usernameForm.value = 'myName';

    const passwordForm: BaseForm = new BaseForm('Password', 'Password', 'password', 'password');
    passwordForm.rules = {
      'required': true,
      'maxlength': 10
    };
    this.baseForms.push(usernameForm, passwordForm);

  }

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
