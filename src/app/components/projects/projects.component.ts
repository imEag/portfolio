import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/models/project.model';
import { Global } from 'src/app/services/global.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { LanguageService } from 'src/app/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {

  public projectsList: any[];
  public url: string;

  // to store subscription and text from language service
  public subscription!: Subscription; 
  public text: any;

  constructor(
    private _projectsService: ProjectsService,
    private _LanguageService: LanguageService
  ) {
    this.projectsList = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
    //gets projects from backend
    this.getProjects()

    //gets default text 
    this.text = this._LanguageService.getTextDefault();

    //Loads any language change from language service.
    this.subscription = this._LanguageService.message_language.subscribe((text: any) => {
      this.text = text;
      console.log(this.text);
    });
  }

  ngOnDestroy(): void {
    //ubsubscribes when component is destroyed
    this.subscription.unsubscribe;
  }

  getProjects() {
    //gets all projects from backend
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
    //delete selected project from backend
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
