import { Component, OnInit } from '@angular/core';
import { Elecper } from '../model/elecper';
import { Elecperservice } from '../service/elecperservice';

@Component({
  selector: 'app-show-elecpers',
  templateUrl: './show-elecpers.component.html',
  styleUrls: ['./show-elecpers.component.css']
})
export class ShowElecpersComponent implements OnInit {
  elections: Elecper[] = [];

  constructor(private elecperService: Elecperservice) { }

  ngOnInit(): void {
    this.elecperService.getElecpers().subscribe((data: Elecper[]) => (this.elections = data));
  }
  
  onClickDelete(id: number) {
    console.log("election name: " + id);
    this.elecperService.deleteElecper(id).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    window.location.reload();
  }

  onClickArchive(id: number) {
    console.log("election name: " + id);
    this.elecperService.updateElecperArchive(id).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}