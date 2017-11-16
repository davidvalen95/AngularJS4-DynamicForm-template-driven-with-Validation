import { Injectable } from '@angular/core';
import {NavigationStart, Router, NavigationEnd, NavigationCancel, RoutesRecognized} from "@angular/router";

@Injectable()
export class FlashService {

  public success:string[] = [];
  public danger:string[] = [];
  public currentMessage:string = null;
  constructor(private router:Router) {
    var me = this;
    router.events.subscribe(event => {

      if(event instanceof NavigationEnd){
        console.log(me.success)
        if(me.success.length > 0){
          me.currentMessage = me.success.shift();
        }else{
          me.currentMessage = null;

        }
      }
    });

  }

  public getSuccess(){

  }
  public setNextNotification(){

  }

}
