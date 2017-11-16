import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {JokeService} from "../../services/joke.service";
import {Form, NgForm} from "@angular/forms";
import {FlashService} from "../../services/flash.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public squizes: any = [
    {
        'category' : 'war',
        'data' :  'cassualties 5',
    }, {
      'category' : 'make',
      'data' :  'cassualties 15',
    }, {
      'category' : 'game',
      'data' :  'cassualties 523',
    }
  ];
  constructor(private title: Title, public jokeService: JokeService, public flashService:FlashService) {
      title.setTitle('Home');
  }

  ngOnInit() {
  }

  changeTitle() {
      this.title.setTitle('Title Changed');
  }

  setName(form:NgForm){
    if(form.valid){
      this.flashService.currentMessage = "Congratulation";
      form.reset();

    }else{
      this.flashService.currentMessage = "No no no no you try to cheat";
    }

  }

  setNextFlash(){
    this.flashService.success.push("rotten tomatoes");
  }

}
