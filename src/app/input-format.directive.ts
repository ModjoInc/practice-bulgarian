import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// tslint:disable:curly

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    let self = this;
    if(self.format == 'lowercase')
      self.el.nativeElement.value = value.toLowerCase();
    else
      self.el.nativeElement.value = value.toUpperCase();
  }
}
