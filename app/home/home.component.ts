import { Component, OnInit } from "@angular/core";
import { user } from "./user.interface";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    public login = false;
    public user: user;
    text: string = "Login";
    onLogin() { 
        this.login = !this.login;
        this.text = this.login === true ? 'Sign Up' : 'Login'
    }
}
