import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ElecperModule } from "../elecper.module";
import { Elecper } from "../model/elecper";

@Injectable({providedIn: null})
export class Elecperservice {


    elecperServiceURL: string = "";

    constructor (private http: HttpClient) {
        this.elecperServiceURL = "http://localhost:18080/ElecperTester/";
    }

    public getElecper(id: number): Observable<Elecper> {
        return this.http.get<Elecper>(this.elecperServiceURL + "getElecper/" + id);
    }

    public getElecpers(): Observable<Elecper[]> {
        return this.http.get<Elecper[]>(this.elecperServiceURL + "getElecpers");
    }

    public addElecper(json: any): Observable<any> {
        return this.http.post(this.elecperServiceURL + "addElecper", json);
    }

    deleteElecper(id: number): Observable<any> {
        return this.http.delete(this.elecperServiceURL + "deleteElecper/" + id);
    }

    public editElecper(id: number, json: any): Observable<any> {
        return this.http.put(this.elecperServiceURL + "updateElecper/" + id, json);
    }


}