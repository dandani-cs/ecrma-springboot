import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Elecperservice } from '../service/elecperservice';

@Component({
  selector: 'app-add-elecper',
  templateUrl: './add-elecper.component.html',
  styleUrls: ['./add-elecper.component.css']
})
export class AddElecperComponent implements OnInit {
  addElecperURL = "http://localhost:18080/ElecperTester/addElecper";

  constructor(private elecperService: Elecperservice, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(addElecper: NgForm) {
    console.log(addElecper.value);
    addElecper.value["archived"] = false;
    this.elecperService.addElecper(addElecper.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(['/elections/all']);
  }

}
