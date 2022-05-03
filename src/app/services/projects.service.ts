import { Injectable } from "@angular/core";
import * as projects_json from 'src/app/text/projects.json';

@Injectable()
export class ProjectsService {
    public projects: any;

    constructor() {
        this.projects = projects_json;
        this.projects = this.projects.projects;

        // Splits langs string and turns it into an array
        this.projects = this.projects.map((project: any) => {
            let langsList = project.langs.split(", ");

            project.langs = langsList;

            return project
        });
    }

    getProjects(): any[]{
        return this.projects;
    }

}