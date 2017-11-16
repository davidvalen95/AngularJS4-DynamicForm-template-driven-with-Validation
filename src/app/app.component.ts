import { Component } from '@angular/core';
import {JokeService} from "./services/joke.service";
import {FlashService} from "./services/flash.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private jokeService: JokeService, public flashService:FlashService){

  }
}

