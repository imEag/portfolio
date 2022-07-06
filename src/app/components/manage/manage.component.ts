import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/models/project.model';
import { Global } from 'src/app/services/global.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
  providers: [ProjectsService]
})
export class ManageComponent implements OnInit {

  public projectsList: any[];
  public url: string;

  constructor(
    private _projectsService: ProjectsService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.projectsList = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
    /* console.log(this.projectsList) */
    this.getProjects()
  }

  getProjects() {
    this._projectsService.getProjects().subscribe(
      response => {
        this.projectsList = response.projects;
        /* console.log(response); */

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

  deleteProject(project: any): void {
    let id = project._id;

    // verifies if the projects has an image
    if (project.image !== null && project.image !== "" && project.image) {
      let image_url =  {
        // this key  is the parameter that will be read by the backend and the name must be the same.
        imageUrl: project.image
      }
      
      //Sends image url to delete the image in GCS
      this._projectsService.deleteImage(image_url).subscribe(
        response => {
          /* console.log('image succesfully deleted', response); */
        },
        error => {
          console.log(<any>error);
        }
      )

    } 

    //deletes project from mongo DB
    this._projectsService.deleteProjects(id).subscribe(
      response => {
        if (response.project) {
          this._router.navigate(['/']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }


}
