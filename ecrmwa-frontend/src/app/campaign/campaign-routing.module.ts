import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
import { CampaignComponent } from './campaign.component';
import { AuthGuardService as AuthGuard } from '../auth/auth-guard.service';
import { EditCampaignComponent } from './edit-campaign/edit-campaign.component';

const routes: Routes = [
  { path: 'campaigns/add', 
    component: AddCampaignComponent,  
    canActivate: [AuthGuard],
    data: { expectedRole: 'admin'}
  },
  { path: 'campaigns/edit/:id', 
    component: EditCampaignComponent,
    canActivate: [AuthGuard],
    data: { expectedRole: 'admin'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
