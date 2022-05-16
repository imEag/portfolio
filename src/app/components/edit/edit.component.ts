import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.css'],
  providers: [ProjectsService, UploadService]
})
export class EditComponent implements OnInit {
  
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<any>;
  public url: string;
  public saveProject: any;

  constructor(
    private _projectsServices: ProjectsService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = "Edit project";
    this.project = new Project('', '', '', '', 2022, '', '');
    this.status = 'none';
    this.filesToUpload = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.getProject(id);
    })
  }
  
  getProject(id: any) {
    this._projectsServices.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form: any) {
    this._projectsServices.updateProject(this.project).subscribe(
      response => {
        if(response.project) {

          // Upload image
          if (this.filesToUpload) {
            let uploadImageUrl = this.url+'uploadImage/'+response.project._id;

            this._uploadService.makeFileRequest(uploadImageUrl, [], this.filesToUpload, 'image')
            .then((result:any) => {
              this.status = 'success';
              this.saveProject = result.project;
              this.status = 'success';
            });
  
          } else {
            this.saveProject = response.project;
            this.status = 'success';
          }
        } else {
          this.status = 'failed';
        }
      },
      error => {
          console.log(<any>error);
      }
    )
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
