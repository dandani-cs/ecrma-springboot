import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
//import { toHash } from 'ajv/dist/compile/util';
import { CandidatesModule } from 'src/app/candidates/candidates.module';
import { Candidate } from 'src/app/candidates/model/candidate';
import { CandidateService } from 'src/app/candidates/service/candidate-service.service';
import { Elecper } from 'src/app/elecper/model/elecper';
import { Elecperservice } from 'src/app/elecper/service/elecperservice';
import { CampaignComponent } from '../campaign.component';
import { Campaign } from '../model/campaign';
import { CampaignService } from '../service/campaign.service';

@Component({
  selector: 'app-edit-campaign',
  templateUrl: './edit-campaign.component.html',
  styleUrls: ['./edit-campaign.component.css']
})
export class EditCampaignComponent implements OnInit {
  candidates: Candidate[] = [];
  elections: Elecper[] = [];
  id: number = 0;
  currentCandidate: Candidate = new Candidate();
  currentElection: Elecper = new Elecper();
  campaign = new Campaign();

  constructor( private http: HttpClient,
    private campaignService: CampaignService,
    private candidateService: CandidateService,
    private elecperService: Elecperservice,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.id = params['id'];
      this.campaignService.getCampaign(this.id).subscribe((data: Campaign) => (this.campaign = data));
      this.candidateService.getCandidates().subscribe((data: Candidate[]) => (this.candidates = data));
      this.elecperService.getElecpers().subscribe((data: Elecper[]) => (this.elections = data));
    }
  });
  }

  onClickCancel() {
    this.router.navigate(['/candidates/all']);
  }

  onSubmit(editCampaign: NgForm): void {
    editCampaign.value["campaign_id"] = this.id;

    var select = (<HTMLSelectElement> document.getElementById("inputGroupSelect01"));
    var select2 = ((<HTMLSelectElement> document.getElementById("inputGroupSelect01")).options[select.selectedIndex].value);

    var selectb = (<HTMLSelectElement> document.getElementById("inputGroupSelect02"));
    var selectb2 = ((<HTMLSelectElement> document.getElementById("inputGroupSelect02")).options[selectb.selectedIndex].value);

    this.candidateService.getCandidate(parseInt(select2)).subscribe(
      (candidate: Candidate) => {
        this.elecperService.getElecper(parseInt(selectb2)).subscribe(
          (eper: Elecper) => {
            console.log("Found candidate", candidate);
            console.log("Found eper", candidate);

            editCampaign.value['candidate'] = candidate;
            editCampaign.value['elecper'] = eper;
            console.log("FORM VALUE", editCampaign.value);

            this.campaignService.addCampaign(editCampaign.value).subscribe(
              (response) => {
                console.log(response);
                this.router.navigate(['/candidates/show/' + editCampaign.value['candidate'].id])
              },
              (error) => console.log(error)
            );
          }
        )
      }
    )
  }
}
