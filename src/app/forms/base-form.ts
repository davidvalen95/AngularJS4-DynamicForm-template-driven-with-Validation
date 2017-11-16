
import {Injectable} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable()
export class BaseForm {

  public rules:{} = {};
  public value;

  constructor(
    public labelValue,
    public placeholder,
    public name,
    public type,
    ){

  }



}
