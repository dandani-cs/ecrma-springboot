import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/campaign/model/campaign';
import { CampaignService } from 'src/app/campaign/service/campaign.service';
import { Elecper } from 'src/app/elecper/model/elecper';
import { Elecperservice } from 'src/app/elecper/service/elecperservice';
import { Candidate } from '../model/candidate';
import { CandidateService } from '../service/candidate-service.service';

@Component({
  selector: 'app-search-candidates-by-party',
  templateUrl: './search-candidates-by-party.component.html',
  styleUrls: ['./search-candidates-by-party.component.css']
})
export class SearchCandidatesByPartyComponent implements OnInit {
  candidates: Candidate[] = [];
  results: Candidate[] = [];
  campaigns: Campaign[]  = [];
  elecpers: Elecper[] = [];
  parties: string[] = [];
  elecPerSelect: HTMLInputElement | undefined;
  partySelect: HTMLInputElement | undefined;

  constructor(private candidateService: CandidateService,
              private campaignService: CampaignService,
              private elecperService: Elecperservice) { }

  ngOnInit(): void {
    this.getCandidates();
    this.getCampaigns();
    this.getElecPers();
  }

  ngAfterViewInit(): void {
    this.elecPerSelect  = (<HTMLInputElement> document.getElementById("elecperSelect"));
    this.partySelect = (<HTMLInputElement> document.getElementById("partySelect"));
  }

  private getCandidates(): void {
    this.candidateService.getCandidates().subscribe(
      (data: Candidate[]) => { 
        this.candidates = data
        this.results = data;
      }
    );
  }

  private getCampaigns(): void {
    this.campaignService.getCampaigns().subscribe(
      (data: Campaign[]) => {
        this.campaigns = data;
        console.log("getCampaigns");
      }
    )
  }

  private getElecPers(): void {
    this.elecperService.getElecpers().subscribe(
      (data: Elecper[]) => {
        this.elecpers = data;
        this.setParties(this.elecpers[0]);
      }
    )
  }

  public setParties(elecPer: Elecper): void {
    this.campaignService.getPartiesOfElecPer(elecPer.elecper_id).subscribe(
      (data: string[]) => {
        this.parties = data;
        this.searchCandidates();
      }
    )
  }

  public searchCandidates(): void {
    let party = this.partySelect!.value;

    this.results = [];
    for (const campaign of this.campaigns) {
      const is_match_eperId: boolean = campaign.elecper.name == this.elecPerSelect!.value;
      const is_match_party: boolean = party === "Any party" || campaign.party === party;

      if(is_match_eperId && is_match_party) 
        this.results.push(campaign.candidate);
    }
    console.log(this.results);
  }

}
