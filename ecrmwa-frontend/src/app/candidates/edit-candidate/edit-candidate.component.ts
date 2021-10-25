//@ts-nocheck

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Candidate } from '../model/candidate';
import { CandidateService } from '../service/candidate-service.service';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css']
})
export class EditCandidateComponent implements OnInit {
  candidate: Candidate = new Candidate();
  id: number = 0;
  
  constructor(private candidateService: CandidateService, private route: ActivatedRoute, private router: Router) { }
//////////////////////////BE CAREFUL OF //@ts-nocheck SA ITAAS, REMOVE MUNA IF IEEDIT ITO////////// 
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.id = params['id'];
        this.candidateService.getCandidate(this.id).subscribe((data: Candidate) => (this.candidate = data));
      } 
    });
  }

  onSubmit(editCandidate: NgForm) {
    if((<HTMLInputElement>document.getElementById('imgfile')).files.length == 0) {  //check image uploaded
      editCandidate.value['image_path'] = "USER BIG.png";  //default pic if not image uploaded
    } else { 
      editCandidate.value['image_path'] = (<HTMLInputElement>document.getElementById('imgfile')).files[0].name;
    }
    editCandidate.value['id'] = this.id;
    console.log(editCandidate.value);
    window.alert(editCandidate.value);
    this.candidateService.addCandidate(editCandidate.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );

    this.router.navigate(['/candidates/show-candidates']).
    then(() => {
      window.location.reload()
    });
  }

}