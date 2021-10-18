import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElecperComponent } from './elecper.component';
import { ShowElecpersComponent } from './show-elecpers/show-elecpers.component';

const routes: Routes = [
  { path: 'all', component: ShowElecpersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElecperRoutingModule { }
