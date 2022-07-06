import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectsService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<any>;
  public url: string;


  constructor(
    private _projectsServices: ProjectsService,
    private _uploadService: UploadService
  ) {
    this.title = "Create project";
    this.project = new Project('', '', '', '', 2022, '', '', '', '');
    this.status = 'none';
    this.filesToUpload = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this._projectsServices.saveProject(this.project).subscribe(
      response => {
        /* console.log(response); */
        if (response.project) {
          
          let uploadImageUrl = Global.url+'uploadImage/'+response.project._id;

          this._uploadService.makeFileRequest(uploadImageUrl, [], this.filesToUpload, 'image')
          .then((result:any) => {
            this.status = 'success';
            /* console.log(result); */
            form.reset();
          });

          this.status = 'succes';
          form.reset();

        } else if (!response.project) {
          this.status = 'failed';
        }
        
        /* console.log(this.status); */

      },
      error => {
        console.log(<any>error);
      }
    )
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    /* console.log(this.filesToUpload); */
  }

}
