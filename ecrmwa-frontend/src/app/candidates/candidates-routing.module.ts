import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesComponent } from './candidates.component';
import { AuthGuardService as AuthGuard } from '../auth/auth-guard.service';
import { ShowCandidatesComponent } from './show-candidates/show-candidates.component';
import { ShowCandidateDetailsComponent } from './show-candidate-details/show-candidate-details.component';

import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';

import { SearchCandidatesComponent } from './search-candidates/search-candidates.component';
import { SearchCandidatesByPositionComponent } from './search-candidates-by-position/search-candidates-by-position.component';
import { SearchCandidatesByPartyComponent } from './search-candidates-by-party/search-candidates-by-party.component';


const routes: Routes = [
  { path: "", redirectTo: "/candidates/show-candidates", pathMatch: "full"},
  
  { path: 'candidates/show-candidates', 
    component: ShowCandidatesComponent, 
    canActivate: [AuthGuard],
    data: { expectedRole: 'any'}
  },
  
  { path: 'candidates/show/:id', 
    component: ShowCandidateDetailsComponent,
    canActivate: [AuthGuard],
    data: {expectedRole: 'any'}
  },
  
  { path: 'candidates/add', 
  component: AddCandidateComponent,
  canActivate: [AuthGuard],
  data: {expectedRole: 'admin'}
  },

  { path: 'candidates/edit/:id',
  component: EditCandidateComponent,
  canActivate: [AuthGuard],
  data: {expectedRole: 'admin'}
  },


  { 
    path: 'candidates/search-name', 
    component: SearchCandidatesComponent, 
    data: { expectedRole: 'any' }
  },
  { 
    path: 'candidates/search-position', 
    component: SearchCandidatesByPositionComponent, 
    data: { expectedRole: 'any' }
  },

  { 
    path: 'candidates/search-party', 
    component: SearchCandidatesByPartyComponent, 
    data: { expectedRole: 'any' }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }