import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProject } from "./project";
import { Observable } from "rxjs";

@Injectable()

export class ProjectService{
    private _url: string="/assets/data/project.json";

    constructor(private http: HttpClient){}

    getProjects():Observable<IProject[]>{
        return this.http.get<IProject[]>(this._url);
    }

}