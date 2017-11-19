import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {  FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { MenuComponent } from "./components/menu.component";
import { ExperienceComponent } from "./components/experience.component";
import { ProfilComponent } from "./components/profil.component";
import { routes } from "./route/route";
import { FormationComponent } from "./components/formation.component";
import { ContactComponent } from "./components/contact.component";
import { RealisationComponent } from "./components/realisation.component";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProfilComponent,
    ExperienceComponent,
    FormationComponent,
    ContactComponent,
    RealisationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
