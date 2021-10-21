import { Component, OnInit } from '@angular/core';
import { Candidate } from '../model/candidate';
import { CandidateService } from '../service/candidate-service.service';

@Component({
  selector: 'app-search-candidates',
  templateUrl: './search-candidates.component.html',
  styleUrls: ['./search-candidates.component.css']
})
export class SearchCandidatesComponent implements OnInit {
  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates(): void {
    this.candidateService.getCandidates().subscribe(
      (data: Candidate[]) => (this.candidates = data)
    );
  }

  searchCandidates(key: string): void {
    const results: Candidate[] = [];

    // TODO: maybe add multiple search filters (name, party, position)
    for(const candidate of this.candidates) {
      if(candidate.first_name.toLowerCase().indexOf(key) != -1 ||
         candidate.last_name.toLowerCase().indexOf(key)  != -1)
      {
        results.push(candidate);
      }
    }

    this.candidates = results;

    if(!key)
      this.getCandidates();
  }



}
