import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashbooardLayoutComponent } from './layouts/dashbooard-layout/dashbooard-layout.component';


@NgModule({
  declarations: [
    DashbooardLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
