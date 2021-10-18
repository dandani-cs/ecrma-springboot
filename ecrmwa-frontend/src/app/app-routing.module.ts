import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCandidatesComponent } from './show-candidates/show-candidates.component';

const routes: Routes = [
  { path: 'candidates', component: ShowCandidatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
