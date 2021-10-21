import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../model/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateServiceService {
  apiURL: string;
  
  constructor(private http: HttpClient) {
    this.apiURL = "/api/";
  }

  public getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.apiURL + "candidates");
  }
}
