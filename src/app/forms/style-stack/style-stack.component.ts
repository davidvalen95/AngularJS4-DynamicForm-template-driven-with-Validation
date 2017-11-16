import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BaseForm} from "../base-form";
import {FormGroup, NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-style-stack',
  templateUrl: './style-stack.component.html',
  styleUrls: ['./style-stack.component.css']
})
export class StyleStackComponent implements OnInit {


  // @ViewChild('input') public input:Input;
  @Input() public baseForm:BaseForm;
  @Input() public parentForm:NgForm;
  @ViewChild('input') public model:NgModel;
  constructor() {

  }

  ngOnInit() {
    this.parentForm.addControl(this.model);
  }



}
