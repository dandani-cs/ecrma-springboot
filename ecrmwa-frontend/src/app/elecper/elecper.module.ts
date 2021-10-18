import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElecperRoutingModule } from './elecper-routing.module';
import { ElecperComponent } from './elecper.component';
import { ShowElecpersComponent } from './show-elecpers/show-elecpers.component';


@NgModule({
  declarations: [
    ElecperComponent,
    ShowElecpersComponent
  ],
  imports: [
    CommonModule,
    ElecperRoutingModule
  ]
})
export class ElecperModule { }
