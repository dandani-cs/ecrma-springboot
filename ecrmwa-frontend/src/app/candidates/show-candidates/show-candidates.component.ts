import { Component, OnInit } from '@angular/core';
import { Candidate } from '../model/candidate';
import { NgForm } from '@angular/forms';
import { CandidateService } from '../service/candidate-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-candidates',
  templateUrl: './show-candidates.component.html',
  styleUrls: ['./show-candidates.component.css']
})
export class ShowCandidatesComponent implements OnInit {
  candidates: Candidate[] = [];
  
  constructor(private candidateService: CandidateService, private router: Router) { }

  ngOnInit(): void {
    this.candidateService.getCandidates().subscribe((data: Candidate[]) => (this.candidates = data));
  }

  onClickDelete(id: number) {
    console.log("candidate id: " + id);
    this.candidateService.deleteCandidate(id).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    window.location.reload();
  }

  onClickEdit(id: number) {
    console.log("candidate id: " + id);
    this.router.navigate(['/candidates/edit/' + id]);
  }

  onClickInfo(id: number) {
    this.router.navigate(['/candidates/show/' + id]);
  }
}