import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './candidates.component';
import { ShowCandidatesComponent } from './show-candidates/show-candidates.component';


@NgModule({
  declarations: [
    CandidatesComponent,
    ShowCandidatesComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule
  ]
})
export class CandidatesModule { }
