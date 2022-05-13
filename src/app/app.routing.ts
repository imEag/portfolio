import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ProjectsComponent} from "./components/projects/projects.component";
import { CreateComponent} from "./components/create/create.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ContactComponent} from "./components/contact/contact.component";
import { Page404Component } from "./components/page404/page404.component";
import { ManageComponent } from "./components/manage/manage.component";


// TODO <!-- When the user enters any route will be redirected to the home page and will be scrolled to that section -->
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'create', component: CreateComponent},
    {path: 'manage', component: ManageComponent},
    {path: '**', component: Page404Component}
];

/* 
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'create', component: CreateComponent},
    {path: '**', component: Page404Component},
]; 
*/

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);