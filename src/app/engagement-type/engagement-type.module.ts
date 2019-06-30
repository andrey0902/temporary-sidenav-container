import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EngagementTypeComponent } from './engagement-type/engagement-type.component';
import { TypeItemComponent } from './type-item/type-item.component';
import { MatTabsModule } from '@angular/material';
import { MatInkBar } from './ink-bar.directive';
import { MatTrianglekBar } from './type-item/triangle.directive';
import { InkBarModule } from '../ink-bar/ink-bar.module';

@NgModule({
  declarations: [EngagementTypeComponent, TypeItemComponent, MatInkBar,
    MatTrianglekBar,
    ],
  exports: [
    EngagementTypeComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    InkBarModule,
  ]
})
export class EngagementTypeModule { }
