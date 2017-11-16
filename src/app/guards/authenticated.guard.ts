import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {FlashService} from "../services/flash.service";

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor(private router:Router, private flashService:FlashService ){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    if(this.router.url == '/'){
      this.flashService.currentMessage = "no you cannot in";

    }else{
      this.flashService.success.push("no you cannot in");

    }
    this.router.navigate(['/']);
    return true;
  }
}
