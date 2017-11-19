import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from "../components/profil.component";
import { ExperienceComponent } from "../components/experience.component";
import { ContactComponent } from "../components/contact.component";
import { FormationComponent } from "../components/formation.component";
import { RealisationComponent } from "../components/realisation.component";




export const router: Routes = [
    { 
        path: "",
        redirectTo: "profil",
        pathMatch: "full"
    },
    {
        path: "profil",
        component: ProfilComponent
    },
    {
        path: "experience",
        component: ExperienceComponent
    },
    {
        path: "contact",
        component : ContactComponent
    },    
    {
        path: "formation",
        component : FormationComponent
    },
    {
        path: "realisation",
        component : RealisationComponent
    },
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);