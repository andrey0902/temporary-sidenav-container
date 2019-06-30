import { Directive, Input, OnInit } from '@angular/core';
import { InkBarHost } from '../models/ink-bar-host';

@Directive({
  selector: '[appInkHost]'
})
export class InkHostDirective implements OnInit {
  @Input() public set appInkHost (host) {
    this._host = host;
  }

  private _host: any;

  constructor() { }

  ngOnInit(): void {
  }

  public getHost(): InkBarHost {
    return this._host;
  }

}
