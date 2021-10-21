import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../model/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  apiURL: string;
  
  constructor(private http: HttpClient) {
    this.apiURL = "http://localhost:18080/api/";
  }

  public getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.apiURL + "candidates");
  }
}
