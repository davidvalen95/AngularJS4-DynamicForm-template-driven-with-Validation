import { Component, OnInit } from '@angular/core';
import {Title } from '@angular/platform-browser';
import {ActivatedRoute,} from '@angular/router';
import {JokeService} from "../../services/joke.service";
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  public user = {
    "name": "David",

  };

  public name = "default value";

  constructor(title: Title, private activatedRoute: ActivatedRoute, public jokeService: JokeService) {
      var name:string = activatedRoute.snapshot.params.name;
      this.name = name;

      title.setTitle(`${name}`);
  }

  ngOnInit() {
  }

  formSubmited(form) {
    alert(form.value.name + 'you submit things' + this.user.name );
  }
}
