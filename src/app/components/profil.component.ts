import { Component } from '@angular/core';

@Component({
    selector : "app-profil",
    templateUrl : "../dom/profil.component.html",
    styleUrls : ["../css/profil.css", "../css/main.css"]
})


export class ProfilComponent{

    public rsTab:any = [
        this.setUrlIcon("twitter"),
        this.setUrlIcon("facebook"),
        this.setUrlIcon("linkedin"),
        this.setUrlIcon("github")
    ];

    constructor(){
        this.testLog();
    }

    testLog(){
        for(let a of this.rsTab)
        console.log(a);
    }

    setUrlIcon(arg1:string):string{
        let url:string = "../assets/icons/" + arg1 + ".png";
        return url;
    }


}