import { Component, OnInit } from '@angular/core';
import { Candidate } from '../model/candidate';
import { CandidateService } from '../service/candidate-service.service';

@Component({
  selector: 'app-show-candidates',
  templateUrl: './show-candidates.component.html',
  styleUrls: ['./show-candidates.component.css']
})
export class ShowCandidatesComponent implements OnInit {
  candidates: Candidate[] = [];


  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.candidateService.getCandidates().subscribe((data: Candidate[]) => (this.candidates = data));
  }

}
