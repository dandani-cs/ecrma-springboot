import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElecperRoutingModule } from './elecper-routing.module';
import { ElecperComponent } from './elecper.component';
import { ShowElecpersComponent } from './show-elecpers/show-elecpers.component';
import { Elecperservice } from './service/elecperservice';


@NgModule({
  declarations: [
    ElecperComponent,
    ShowElecpersComponent
  ],
  imports: [
    CommonModule,
    ElecperRoutingModule
  ],
  providers: [Elecperservice]
})
export class ElecperModule { }
