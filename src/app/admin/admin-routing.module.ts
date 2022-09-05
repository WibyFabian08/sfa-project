import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
