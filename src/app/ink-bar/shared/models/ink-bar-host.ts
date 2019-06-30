import { QueryList, ViewChildren } from '@angular/core';
import { InkListenerDirective } from '../directives/ink-listener.directive';

export class InkBarHost {
  @ViewChildren(InkListenerDirective) public _inkListener: QueryList<InkListenerDirective>;

  public getInkListeners(): QueryList<InkListenerDirective> {
    return this._inkListener;
  }
}

export interface IInkBarHost {
  getInkListeners(): QueryList<InkListenerDirective>;

}
