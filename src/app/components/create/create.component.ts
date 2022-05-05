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
  public status: string;


  constructor(
    private _projectsServices: ProjectsService
  ) {
    this.title = "Create project";
    this.project = new Project('', '', '', '', 2022, '', '' );
    this.status = 'none';
   }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this._projectsServices.saveProject(this.project).subscribe(
      response => {
        console.log(response);
        
        response.project ? this.status = 'success' : this.status = 'failed';
        console.log(this.status);

        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
