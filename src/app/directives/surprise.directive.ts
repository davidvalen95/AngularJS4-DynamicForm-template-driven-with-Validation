import {Directive, ElementRef, HostListener, HostBinding} from '@angular/core';
import {HostBindingDecorator} from "@angular/core/src/metadata/directives";

@Directive({
  selector: '[appSurprise]'
})
export class SurpriseDirective {
  @HostBinding('attr.name') name;
  constructor(private elementRef:ElementRef) {
    this.name = 'David'

  }

  @HostListener('click') directiveClicked(){
    var text = this.elementRef.nativeElement.innerHTML;
    alert(text);
    this.elementRef.nativeElement.style.color = '#00ff00';
    this.name = 'feby';
    console.log(this.elementRef);
  }
}
