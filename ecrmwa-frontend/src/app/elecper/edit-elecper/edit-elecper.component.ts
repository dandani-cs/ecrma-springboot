import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Elecper } from '../model/elecper';
import { Elecperservice } from '../service/elecperservice';
import { Params } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-elecper',
  templateUrl: './edit-elecper.component.html',
  styleUrls: ['./edit-elecper.component.css']
})

export class EditElecperComponent implements OnInit {
  election: Elecper = new Elecper();
  id: number = 0;

  constructor(private elecperService: Elecperservice, private route: ActivatedRoute, private router: Router ) {
    
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.id = params['id'];
        this.elecperService.getElecper(this.id).subscribe((data: Elecper) => (this.election = data));
      }
        
    });
  }

  onSubmit(editElecper: NgForm) {
    editElecper.value['elecper_id'] = this.id;
    editElecper.value['archived'] = this.election.archived;
    console.log(editElecper.value);
    this.elecperService.editElecper(this.id, editElecper.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(['/elections/all']).
    then(() => {
      window.location.reload()
    });
  }
}

