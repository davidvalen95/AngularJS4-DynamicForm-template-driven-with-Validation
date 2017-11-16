import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable()
export class JokeService {

  public joke:string = "Loading Joke2";
  public jokeObservable2:string = "Joke Observable";

  constructor(private apiService:ApiService) {
    console.log('constructed');
    this.getJoke();
    this.getJokeObservable();
  }

  public getJoke(){
    var me = this;
    this.apiService.getJoke( (json:any) => {
      console.log(json.joke);
      me.joke = json.joke;
    });
  }

  public getJokeObservable(){

    // this.apiService.getJokeObservable().subscribe(data =>{
    //   console.log('tes');
    //   this.jokeObservable2 = data['value']['joke'];
    // })

    // this.apiService.observableCall().subscribe((data:string) => {
    //   this.jokeObservable2 = data;
    // });

   this.apiService.recursiveCall(1,true, (parameter:string, feby:boolean) => {
     this.jokeObservable2 = parameter + feby;
   })
  }



}
