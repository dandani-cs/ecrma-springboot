import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campaign } from '../model/campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  apiURL: string;
  
  constructor(private http: HttpClient) {
    this.apiURL = "http://localhost:18080/CampaignsTester/";
  }

  public getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.apiURL + "getCampaigns");
  }

  public addCampaign(json: any): Observable<any> {
    return this.http.post(this.apiURL + "addCampaign", json);
  }

  public getPositionsOfElecPer(id: number): Observable<string[]> {
    return this.http.get<string[]>(this.apiURL + 'getPositionsOfElecper/' + id)
  }

  public getCampaignsPerId(id: number): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.apiURL + 'getCampaignsPerId/' + id);
  }

  public getPartiesOfElecPer(id: number): Observable<string[]> {
    return this.http.get<string[]>(this.apiURL + "getPartiesOfElecper/" + id);
  }

}
