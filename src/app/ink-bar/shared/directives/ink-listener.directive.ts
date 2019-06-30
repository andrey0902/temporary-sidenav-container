import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { InkBarDirective } from './ink-bar.directive';

@Directive({
  selector: '[appInkListener]',

})
export class InkListenerDirective implements OnInit {
  public inkBar: InkBarDirective;
  constructor(public el: ElementRef) {
  }

  ngOnInit(): void {
  }

  @HostListener('click') onMouseOver() {
    console.log('this.el', this.el);

    if (this.inkBar) {
      this.inkBar.alignToElement(this.el.nativeElement);
    }
  }

}
