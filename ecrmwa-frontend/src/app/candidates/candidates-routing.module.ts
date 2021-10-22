import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './candidates.component';
import { AuthGuardService as AuthGuard } from '../auth/auth-guard.service';
import { ShowCandidatesComponent } from './show-candidates/show-candidates.component';
import { ShowCandidateDetailsComponent } from './show-candidate-details/show-candidate-details.component';

const routes: Routes = [
  { path: "", redirectTo: "candidates/show-candidates", pathMatch: "full"},
  { path: 'candidates/show-candidates', 
    component: ShowCandidatesComponent, 
    canActivate: [AuthGuard],
    data: { expectedRole: 'any'}
  },
  
  { path: 'candidates/show-candidate-details', 
    component: ShowCandidateDetailsComponent,
    canActivate: [AuthGuard],
    data: {expectedRole: 'any'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }