import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddElecperComponent } from './add-elecper/add-elecper.component';
import { EditElecperComponent } from './edit-elecper/edit-elecper.component';
import { ElecperComponent } from './elecper.component';
import { ElecperModule } from './elecper.module';
import { ShowElecpersComponent } from './show-elecpers/show-elecpers.component';

const routes: Routes = [
  { path: "", redirectTo: "/elections/all", pathMatch: "full"},
  { path: 'elections/all', component: ShowElecpersComponent },
  { path: 'elections/add', component: AddElecperComponent },
  { path: 'elections/edit/:id', component: EditElecperComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElecperRoutingModule { }
