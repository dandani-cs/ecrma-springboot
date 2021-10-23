import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElecperRoutingModule } from './elecper-routing.module';
import { ElecperComponent } from './elecper.component';
import { ShowElecpersComponent } from './show-elecpers/show-elecpers.component';
import { Elecperservice } from './service/elecperservice';
import { AddElecperComponent } from './add-elecper/add-elecper.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ElecperComponent,
    ShowElecpersComponent,
    AddElecperComponent
  ],
  imports: [
    CommonModule,
    ElecperRoutingModule,
    FormsModule,
  ],
  providers: [Elecperservice]
})
export class ElecperModule { }
