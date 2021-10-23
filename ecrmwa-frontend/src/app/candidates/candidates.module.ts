import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './candidates.component';
import { ShowCandidatesComponent } from './show-candidates/show-candidates.component';
import { ShowCandidateDetailsComponent } from './show-candidate-details/show-candidate-details.component';
import { SearchCandidatesByPositionComponent } from './search-candidates-by-position/search-candidates-by-position.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CandidatesComponent,
    ShowCandidatesComponent,
    ShowCandidateDetailsComponent,
    SearchCandidatesByPositionComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    FormsModule
  ]
})
export class CandidatesModule { }
