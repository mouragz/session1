import {Directive,ElementRef} from '@angular/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocuse()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {
 
 constructor(private el: ElementRef) { }

 onFocuse(){
    this.el.nativeElement.style.width='300px';
 }

 onBlur(){
   this.el.nativeElement.style.width='175px';
 }
}