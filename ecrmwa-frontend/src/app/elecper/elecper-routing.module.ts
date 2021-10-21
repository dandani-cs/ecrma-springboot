import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElecperComponent } from './elecper.component';
import { ElecperModule } from './elecper.module';
import { ShowElecpersComponent } from './show-elecpers/show-elecpers.component';

const routes: Routes = [
  { path: "", redirectTo: "/elections/all", pathMatch: "full"},
  { path: 'elections/all', component: ShowElecpersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElecperRoutingModule { }
