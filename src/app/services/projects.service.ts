import { Injectable } from "@angular/core";
import * as projects_json from 'src/app/text/projects.json';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from "../models/project.model";
import { Global } from "./global.service";

@Injectable()
export class ProjectsService {
    public projects: any;
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;

        this.projects = projects_json;
        this.projects = this.projects.projects;

        // Splits langs string and turns it into an array
        this.projects = this.projects.map((project: any) => {
            let langsList = project.langs.split(", ");

            project.langs = langsList;

            return project
        });
    }

    testService() {
       return "testing service"; 
    }

    getProjects(): any[]{
        return this.projects;
    }

    saveProject(project: Project): Observable<any> {
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save-project', params, {headers: headers});
    }

}