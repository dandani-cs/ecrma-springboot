import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/campaign/model/campaign';
import { CampaignService } from 'src/app/campaign/service/campaign.service';
import { Elecper } from 'src/app/elecper/model/elecper';
import { Elecperservice } from 'src/app/elecper/service/elecperservice';
import { Candidate } from '../model/candidate';
import { CandidateService } from '../service/candidate-service.service';

@Component({
  selector: 'app-search-candidates-by-position',
  templateUrl: './search-candidates-by-position.component.html',
  styleUrls: ['./search-candidates-by-position.component.css']
})
export class SearchCandidatesByPositionComponent implements OnInit {
  candidates: Candidate[] = [];
  results:    Campaign[]  = [];
  campaigns:  Campaign[]  = [];
  elecpers:   Elecper[]   = [];
  positions:  string[]    = [];
  elecPerSelect: HTMLInputElement | undefined;
  positionSelect: HTMLInputElement | undefined;

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
    this.positionSelect = (<HTMLInputElement> document.getElementById("positionSelect"));
  }

  private getCandidates(): void {
    this.candidateService.getCandidates().subscribe(
      (data: Candidate[]) => { 
        this.candidates = data
      }
    );
  }

  private getCampaigns(): void {
    this.campaignService.getCampaigns().subscribe(
      (data: Campaign[]) => {
        this.campaigns = data;
        this.results   = data;
      }
    )
  }

  public setPositions(elecPer: Elecper): void {
    this.campaignService.getPositionsOfElecPer(elecPer.elecper_id).subscribe(
      (data: string[]) => {
        this.positions = data;
        this.searchCandidates();
      }
    )
  }

  private getElecPers(): void {
    this.elecperService.getElecpers().subscribe(
      (data: Elecper[]) => {
        this.elecpers = data;
        this.setPositions(this.elecpers[0]);
      }
    )
  }

  public searchCandidates(): void {
    let position = this.positionSelect!.value;

    this.results = [];
    for(const campaign of this.campaigns) {
      const is_match_eperId: boolean   =  campaign.elecper.name === this.elecPerSelect!.value;
      const is_match_position: boolean =  position === "Any position" || campaign.position.toLowerCase() === position.toLowerCase();

      if(is_match_eperId && is_match_position)
        this.results.push(campaign);
    }
  }
}
