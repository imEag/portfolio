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

  constructor(
    private _projectsService: ProjectsService
  ) {
    this.projectsList = [];
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

}
