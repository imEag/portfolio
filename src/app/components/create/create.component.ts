import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectsService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;


  constructor(
    private _projectsServices: ProjectsService
  ) {
    this.title = "Create project";
    this.project = new Project('', '', '', '', 2022, '', '' );
   }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form);
  }

}
