import { Component, OnInit } from '@angular/core';
import {JokeService} from "../../services/joke.service";

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  constructor(public jokeService:JokeService) {
  }

  ngOnInit() {
  }

}
