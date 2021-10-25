import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
import { CampaignComponent } from './campaign.component';
import { EditCampaignComponent } from './edit-campaign/edit-campaign.component';

const routes: Routes = [
  { path: 'campaigns/add', component: AddCampaignComponent },
  { path: 'campaigns/edit/:id', component: EditCampaignComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
