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
  results:    Candidate[] = [];

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.getCandidates();
  }

  private getCandidates(): void {
    this.candidateService.getCandidates().subscribe(
      (data: Candidate[]) => { 
        this.candidates = data
        this.results = data;
      }
    );
  }

  public searchCandidates(key: string): void {
    this.results = []
    // TODO: maybe add multiple search filters (name, party, position)
    for(const candidate of this.candidates) {
      const c_fname: string  = candidate.first_name.toLowerCase()
      const c_lname: string  = candidate.last_name.toLowerCase()

      const is_fname_match: boolean = c_fname.indexOf(key.toLowerCase()) != -1
      const is_lname_match: boolean = c_lname.indexOf(key.toLowerCase()) != -1
      const is_fulln_match: boolean = (c_fname + ' ' + c_lname).indexOf(key.toLowerCase()) != -1 || 
                                      (c_lname + ' ' + c_fname).indexOf(key.toLowerCase()) != -1;

      const is_match: boolean = is_fname_match || is_lname_match || is_fulln_match;
      if(is_match)
        this.results.push(candidate);
    }
    if(!key)
      this.results = this.candidates;
  }

}
