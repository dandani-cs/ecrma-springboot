import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElecperRoutingModule } from './elecper-routing.module';
import { ElecperComponent } from './elecper.component';


@NgModule({
  declarations: [
    ElecperComponent
  ],
  imports: [
    CommonModule,
    ElecperRoutingModule
  ]
})
export class ElecperModule { }
