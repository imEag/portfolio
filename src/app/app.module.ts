import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders} from "./app.routing";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { Page404Component } from './components/page404/page404.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BarComponent } from './components/bar/bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { ProjectPreviewComponent } from './components/project-preview/project-preview.component';
import { ManageComponent } from './components/manage/manage.component';

import { LanguageService } from './services/language.service';
import { ScrollService } from './services/scroll.service';
import { SkillsDescriptionComponent } from './components/skills-description/skills-description.component';
import { TopbarComponent } from './components/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    Page404Component,
    ProfileComponent,
    BarComponent,
    FooterComponent,
    SkillsComponent,
    HomeComponent,
    ProjectPreviewComponent,
    ManageComponent,
    EditComponent,
    SkillsDescriptionComponent,
    TopbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [ appRoutingProviders, LanguageService, ScrollService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
