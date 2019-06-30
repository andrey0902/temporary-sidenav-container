import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren, Input, OnDestroy,
  OnInit,
  QueryList, ViewChild,
} from '@angular/core';
import { InkListenerDirective } from '../shared/directives/ink-listener.directive';
import { InkHostDirective } from '../shared/directives/ink-host.directive';
import { InkBarDirective } from '../shared/directives/ink-bar.directive';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ink-bar',
  templateUrl: './ink-bar.component.html',
  styleUrls: ['./ink-bar.component.scss']
})
export class InkBarComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  @Input() public triangle = false;
  @Input() public border = false;

  @ContentChild(InkHostDirective) public _inkHost: InkHostDirective;
  @ContentChildren(InkListenerDirective, {descendants: true}) public _inkListener: QueryList<InkListenerDirective>;
  @ViewChild(InkBarDirective) public _inkBar: InkBarDirective;

  private destroy$ = new Subject();
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.getHost();
  }

  ngAfterContentInit(): void {
    this.runHandlerSecond();
  }

  // first strategy get data from nested component

  getHost() {
    const host =  this._inkHost ? this._inkHost.getHost() : null;
    let inkListeners: QueryList<InkListenerDirective>;
    if (host) {
      inkListeners = host.getInkListeners();
      this.runHandlerFirst(inkListeners);
    }
  }

  private runHandlerFirst(inkListeners): void {
    inkListeners.changes
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((res) => {
        this.setInkBarToInkListener(inkListeners);
      });
    this.setInkBarToInkListener(inkListeners);
  }

  // second strategy get data from ContentView

  private runHandlerSecond(): void {
    if (this._inkListener.length) {
      this._inkListener.changes
        .pipe(
          takeUntil(this.destroy$)
        )
        .subscribe((res) => {
        this.setInkBarToInkListener(this._inkListener);
      });
      this.setInkBarToInkListener(this._inkListener);
    }
  }

  private setInkBarToInkListener(inkListeners): void {
    inkListeners.toArray().forEach(ink => ink.inkBar = this._inkBar);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
