import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../model/candidate';
import { map } from 'rxjs/operators'

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

  public getCandidate(id: number): Observable<Candidate> {
    return this.http.get<Candidate>(this.apiURL + "get-candidate/" + id);
}

  public addCandidate(json: any): Observable<any> {
    return this.http.post(this.apiURL + "add-candidate", json);
  }

  public deleteCandidate(id: number): Observable<any> {
    return this.http.delete(this.apiURL + "delete-candidate/" + id);
  }

  public editCandidate(id: number, json: any): Observable<any> {
    return this.http.put(this.apiURL + "edit-candidate/" + id, json);
  }

  public getCandidateJson(id: number) {
    return this.http.get(this.apiURL + "get-candidate/" + id);
  }
}
