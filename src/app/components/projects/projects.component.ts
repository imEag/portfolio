import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/models/project.model';
import { Global } from 'src/app/services/global.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {

  public projectsList: any[];
  public url: string;

  constructor(
    private _projectsService: ProjectsService
  ) {
    this.projectsList = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
    console.log(this.projectsList)
    this.getProjects()
  }

  getProjects() {
    this._projectsService.getProjects().subscribe(
      response => {
        this.projectsList = response.projects;
        console.log(response);

        // Splits langs string and turns it into an array
        this.projectsList = this.projectsList.map((project: any) => {
          let langsList = project.langs.split(", ");

          project.langs = langsList;

          return project
      });
      }, error => {
        console.log(error);
      }
    );
  }

  deleteProject(id: any): void {
    this._projectsService.deleteProjects(id).subscribe(
      response => {
        if(response.project) {
          console.log(response.project);
        }
      },
      error => {
        console.log(<any>error);
      } 
    );
  }

}
