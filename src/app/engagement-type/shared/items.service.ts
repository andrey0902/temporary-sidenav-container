import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {
  public state = [];
  constructor() { }

  public steState(val) {
    this.state.push(val);
    console.log(this.state);
  }

  public getState() {
    return this.state;
  }

  public getSelectedElement(i: number): HTMLElement {
    return this.state[i].nativeElement;
  }
}
