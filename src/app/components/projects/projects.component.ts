import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

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
    this.projectsList = _projectsService.getProjects();
  }

  ngOnInit(): void {
    console.log(this.projectsList)
  }

}
