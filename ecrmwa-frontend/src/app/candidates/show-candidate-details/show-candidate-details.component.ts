import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Campaign } from 'src/app/campaign/model/campaign';
import { CampaignService } from 'src/app/campaign/service/campaign.service';
import { Candidate } from '../model/candidate';
import { CandidateService } from '../service/candidate-service.service';

@Component({
  selector: 'app-show-candidate-details',
  templateUrl: './show-candidate-details.component.html',
  styleUrls: ['./show-candidate-details.component.css']
})
export class ShowCandidateDetailsComponent implements OnInit {
  campaigns: Campaign[] = [];
  candidate: Candidate = new Candidate();
  id: number = 0;
  is_admin = false;

  constructor(private campaignService: CampaignService, private candidateService: CandidateService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let loginInfo = localStorage.getItem("ecrma_login")!;
    if(loginInfo != null) {
      const info = JSON.parse(loginInfo);
      this.is_admin = info['role'] === 'admin';
    }
    
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.id = params['id'];
        this.candidateService.getCandidate(this.id).subscribe((data: Candidate) => (this.candidate = data));
        this.campaignService.getCampaignsPerId(this.id).subscribe((data: Campaign[]) => (this.campaigns = data));
      } 
    });
  }

  onClickDelete(id: number) {
    console.log("candidate id: " + id);
    this.candidateService.deleteCandidate(id).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(['/candidates/all']).
    then(() => {

      window.location.reload()
    });
  }

  onClickEdit(id: number) {
    console.log("candidate id: " + id);
    this.router.navigate(['/candidates/edit/' + id]);
  }
}