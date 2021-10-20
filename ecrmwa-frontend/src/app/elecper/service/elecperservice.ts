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

    public getElecpers(): Observable<Elecper[]> {
        return this.http.get<Elecper[]>(this.elecperServiceURL + "getElecpers")
    }
}