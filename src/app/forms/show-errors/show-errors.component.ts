import { Component, Input } from '@angular/core';
import {AbstractControlDirective, AbstractControl, NgForm} from '@angular/forms';

@Component({
  selector: 'show-errors',
  template: `
    <div *ngIf="this.shouldShowErrors()" class="padding bg-danger animation-in">
      <p  *ngFor="let error of this.listOfErrors()"> 
        {{error}}
      </p>
    </div>

 `,
})
export class ShowErrorsComponent {

  private static readonly errorMessages = {
    'required': (params) => 'This field is required',
    'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
    'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
    'years': (params) => params.message,
    'countryCity': (params) => params.message,
    'uniqueName': (params) => params.message,
    'telephoneNumbers': (params) => params.message,
    'telephoneNumber': (params) => params.message
  };

  @Input()
  private control: AbstractControl | AbstractControlDirective | NgForm;


  shouldShowErrors():boolean{
    return this.control.errors && this.control && (this.control.touched || this.control.dirty);
  }

  listOfErrors(){
    var errorString:string[]  = [];
    for(var key in this.control.errors){
      errorString.push(ShowErrorsComponent.errorMessages[key](this.control.errors[key]));

    }
    return errorString;
  }


}
