import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login-component/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ElecperModule } from './elecper/elecper.module';
import { CandidatesModule } from './candidates/candidates.module';
import { SearchCandidatesComponent } from './candidates/search-candidates/search-candidates.component';
import { CampaignModule } from './campaign/campaign.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SearchCandidatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ElecperModule,
    FormsModule,
    CandidatesModule,
    CampaignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
