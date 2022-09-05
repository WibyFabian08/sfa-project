import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidenavComponent } from './component/side-nav/side-nav.component';
import { BodyComponent } from './body/body.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { HeaderComponent } from './component/header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    BodyComponent,
    DashboardPageComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    NgChartsModule,
    HttpClientModule,
    MatIconModule
  ],
})
export class AdminModule {}
