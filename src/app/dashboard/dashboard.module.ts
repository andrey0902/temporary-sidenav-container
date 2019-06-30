import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatButtonModule, MatChipsModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SidemenuItemComponent } from './sidemenu-item/sidemenu-item.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EngagementTypeModule } from '../engagement-type/engagement-type.module';
import { InkBarModule } from '../ink-bar/ink-bar.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    SidemenuComponent,
    SidemenuItemComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatListModule,
    PerfectScrollbarModule,
    EngagementTypeModule,
    InkBarModule,
  ]
})
export class DashboardModule { }
