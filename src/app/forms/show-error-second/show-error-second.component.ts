import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, AbstractControlDirective, NgModel} from "@angular/forms";
import {BaseForm} from "../base-form";

@Component({
  selector: 'app-show-error-second',
  template : `

      <div *ngIf="this.shouldShowError()" class="bg-danger animation-in col-12">

          <ul>
            <li *ngFor="let errorMessage of this.getErrorMessages()">
              {{errorMessage}}
            </li>
          </ul>
      </div>

    
  `
})
export class ShowErrorSecondComponent implements OnInit {

  @Input() public model: NgModel = null;
  @Input() public baseForm:BaseForm ;

  public errorMessage:{} = {
    'required' : (params) => `${this.baseForm.labelValue || this.baseForm.name} is required!`,
    'minlength': (params) => `${this.baseForm.labelValue || this.baseForm.name} needs ${params.actualLength}/${params.requiredLength}, `,
    'maxlength': (params) => 'exceed limited',
    'email': (params) => `${this.baseForm.labelValue || this.baseForm.name} must have valid email`,
    'pattern':(params) => `${this.baseForm.labelValue || this.baseForm.name} ${this.baseForm.rules['patternInfo'] || 'does not satisfy input requirement'}`
  }
  constructor() {
  }

  ngOnInit() {
  }

  public test23():void {
    console.log(this.baseForm.labelValue || this.baseForm.name);

  }
  public getErrorMessages(){
    var errorList: string[] = [];
    for(var key in this.model.errors){
      errorList.push(this.errorMessage[key](this.model.errors[key]));
    }
    return errorList;
  }
  public shouldShowError():boolean{
    return this.model && this.model.errors && (this.model.touched || this.model.dirty);
  }
}
