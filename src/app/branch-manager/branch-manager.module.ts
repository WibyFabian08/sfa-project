import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchManagerRoutingModule } from './branch-manager-routing.module';
import { BranchManagerComponent } from './branch-manager.component';


@NgModule({
  declarations: [
    BranchManagerComponent
  ],
  imports: [
    CommonModule,
    BranchManagerRoutingModule
  ]
})
export class BranchManagerModule { }
