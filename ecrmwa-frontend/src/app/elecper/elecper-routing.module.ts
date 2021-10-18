import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElecperComponent } from './elecper.component';

const routes: Routes = [{ path: '', component: ElecperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElecperRoutingModule { }
