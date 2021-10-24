// @ts-nocheck

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from '.././service/candidate-service.service';


@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {
  addCandidateURL = "http://localhost:18080/api/add-candidate";
  tmp:string = "";
  
  constructor(private candidateService: CandidateService, private router: Router) { }

  ngOnInit(): void {
  }
//////////////////////////BE CAREFUL OF //@ts-nocheck SA ITAAS, REMOVE MUNA IF IEEDIT ITO////////// 
  onSubmit(addCandidate: NgForm) {
    if((<HTMLInputElement>document.getElementById('imgfile')).files.length == 0) {  //check image uploaded
      addCandidate.value['image_path'] = "USER BIG.png";  //default pic if not image uploaded
    } else { 
      addCandidate.value['image_path'] = (<HTMLInputElement>document.getElementById('imgfile')).files[0].name;
    }
    console.log(addCandidate.value);
    this.candidateService.addCandidate(addCandidate.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );

    this.router.navigate(['/candidates/all']).
    then(() => {

      window.location.reload()
    });
  }
}