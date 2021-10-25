import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { toHash } from 'ajv/dist/compile/util';
import { CandidatesModule } from 'src/app/candidates/candidates.module';
import { Candidate } from 'src/app/candidates/model/candidate';
import { CandidateService } from 'src/app/candidates/service/candidate-service.service';
import { Elecper } from 'src/app/elecper/model/elecper';
import { Elecperservice } from 'src/app/elecper/service/elecperservice';
import { CampaignService } from '../service/campaign.service';

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.css']
})
export class AddCampaignComponent implements OnInit {
  candidates: Candidate[] = [];
  elections: Elecper[] = [];
  

  constructor(private campaignService: CampaignService,
              private candidateService: CandidateService,
              private elecperService: Elecperservice,
              private router: Router) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.candidateService.getCandidates().subscribe((data: Candidate[]) => (this.candidates = data));
    this.elecperService.getElecpers().subscribe((data: Elecper[]) => (this.elections = data));
  }

  onSubmit(addCampaign: NgForm) {
    addCampaign.value['candidate'] = this.candidateService.getCandidate(addCampaign.value['candidate']);
    addCampaign.value['elecper'] = this.elecperService.getElecper(addCampaign.value['elecper']);
    console.log(addCampaign.value);
    this.campaignService.addCampaign(addCampaign.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(['/candidates/show/' + addCampaign.value['id']]);
  } 
}
