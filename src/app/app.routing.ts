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
import { EditComponent } from "./components/edit/edit.component";
import { CreditPageComponent } from "./components/credit-page/credit-page.component";


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'create', component: CreateComponent},
    {path: 'manage', component: ManageComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: 'credits', component: CreditPageComponent},
    {path: '**', component: Page404Component}
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);