import { Candidate } from "src/app/candidates/model/candidate";
import { Elecper } from "src/app/elecper/model/elecper";

export class Campaign {
    id       : number = 0;
    party    : string = '';
    platform : string = '';
    position : string = '';
    candidate: Candidate = new Candidate;
    elecper  : Elecper = new Elecper;
}
