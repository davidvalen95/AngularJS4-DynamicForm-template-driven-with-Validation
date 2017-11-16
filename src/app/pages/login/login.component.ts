import { Component, OnInit } from '@angular/core';
import {DomSanitizer, Title} from '@angular/platform-browser';
import {NgForm} from "@angular/forms";
import {FlashService} from "../../services/flash.service";
import {JokeService} from "../../services/joke.service";
import {BaseForm} from "../../forms/base-form";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public baseForms: BaseForm[] = [];
  constructor(private title:Title, public flashService:FlashService, public jokeService:JokeService, public domSanitizer:DomSanitizer) {
    title.setTitle("Login");

    var usernameForm:BaseForm = new BaseForm("Username","Username","username","text");
    usernameForm.rules = {
      'required':true,
      'minlength':5,
      'maxlength':7,
      'pattern': '[\\w]*',
      'patternInfo': 'Only word and number no spaces and symbols'
    }
    usernameForm.value = "myName"
    var passwordForm:BaseForm = new BaseForm("Password", "Password", "password",'password');
    passwordForm.rules = {
      'required': true,
      'maxlength':10
    }
    this.baseForms.push(usernameForm, passwordForm);

  }

  ngOnInit() {
  }

  formSubmit(form:NgForm) {
    if(form.valid){
      console.log(form.value);
    }else{
      console.log("You Cheat");
    }
  }


}
