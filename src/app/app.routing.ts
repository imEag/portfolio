import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";

import { ProjectsComponent} from "./components/projects/projects.component";
import { AboutComponent} from "./components/about/about.component";
import { CreateComponent} from "./components/create/create.component";
import { ContactComponent} from "./components/contact/contact.component";
import { Page404Component } from "./components/page404/page404.component"

const appRoutes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'about', component: AboutComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'create', component: CreateComponent},
    {path: '**', component: Page404Component},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);