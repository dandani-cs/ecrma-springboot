import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddElecperComponent } from './add-elecper/add-elecper.component';
import { EditElecperComponent } from './edit-elecper/edit-elecper.component';
import { ElecperComponent } from './elecper.component';
import { ElecperModule } from './elecper.module';
import { ShowElecpersComponent } from './show-elecpers/show-elecpers.component';
import { AuthGuardService as AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  { path: "", redirectTo: "/elections/all", pathMatch: "full"},
  { path: 'elections/all', 
    component: ShowElecpersComponent,
    canActivate: [AuthGuard],
    data: {'expectedRole': 'admin'}

  },
  { path: 'elections/add', 
    component: AddElecperComponent,
    canActivate: [AuthGuard],
    data: {'expectedRole': 'admin'}
  },
  { path: 'elections/edit/:id', 
    component: EditElecperComponent,
    canActivate: [AuthGuard],
    data: {'expectedRole': 'admin'}
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElecperRoutingModule { }
