import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InkBarComponent } from './ink-bar/ink-bar.component';
import { InkListenerDirective } from './shared/directives/ink-listener.directive';
import { InkHostDirective } from './shared/directives/ink-host.directive';
import { InkBarDirective } from './shared/directives/ink-bar.directive';

@NgModule({
  declarations: [InkBarComponent,
    InkListenerDirective,
    InkHostDirective,
    InkBarDirective,
  ],
  exports: [
    InkBarComponent,
    InkListenerDirective,
    InkHostDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class InkBarModule { }
