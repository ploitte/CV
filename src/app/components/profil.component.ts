import { Component } from '@angular/core';

@Component({
    selector : "app-profil",
    templateUrl : "../dom/profil.component.html",
    styleUrls : ["../css/profil.css", "../css/main.css"]
})


export class ProfilComponent{

    public iconTab:any = [

        {
            name: "",
            url: ""
        }

    ]

    constructor(){}



}