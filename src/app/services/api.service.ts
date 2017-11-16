import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) {



  }

  public getJoke(callback: (json:{})=>void){
    this.httpClient.get<any>('http://api.icndb.com/jokes/random').subscribe(data => {
      callback(data['value']);
    });
  }

  public getJokeObservable(): Observable<any>{

    return this.httpClient.get<any>('http://api.icndb.com/jokes/random');
  }

  public recursiveCall(iteration:number, feby:boolean,callback:(parameter:string, feby:boolean)=>void): void{
    if(iteration < 100){
      iteration++;
      callback("will i "+iteration, feby);
      setTimeout(()=>{
        this.recursiveCall(iteration,!feby,callback);

      },100)
    }


  }

  public observableCall():Observable<string>{

    return Observable.create(observer=> {
      var feby: boolean = true;
      observer.next(feby);

      this.observableMethod2(feby);
      // observer.next()


    });

  }

  public observableMethod2(feby:boolean): Observable<boolean>{

    return of(feby);
  }
}
