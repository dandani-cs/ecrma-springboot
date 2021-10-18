import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Elecper } from "../model/elecper";

export class Elecperservice {
    elecperServiceURL: string = "";

    constructor (private http: HttpClient) {
        this.elecperServiceURL = "http://localhost:18080/ElecperTester/";
    }

    public getElecpers(): Observable<Elecper[]> {
        return this.http.get<Elecper[]>(this.elecperServiceURL + "getElecpers")
    }
}
