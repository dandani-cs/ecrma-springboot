import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Elecperservice } from '../service/elecperservice';

@Component({
  selector: 'app-add-elecper',
  templateUrl: './add-elecper.component.html',
  styleUrls: ['./add-elecper.component.css']
})
export class AddElecperComponent implements OnInit {
  addElecperURL = "http://localhost:18080/ElecperTester/addElecper";

  constructor(private elecperService: Elecperservice) { }

  ngOnInit(): void {
    
  }

  onSubmit(addElecper: NgForm) {
    addElecper.value["archived"] = false;
    this.elecperService.addElecper(addElecper.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    
  }

}
