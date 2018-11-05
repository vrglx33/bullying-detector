import { Component } from "@angular/core";
import { user } from "./user.interface";
import { LoginService } from "./login.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['../home.component.css']
})

export class LoginComponent {
    email:string;
    text: string = "Login";
    loginService: LoginService;
    isParent: boolean;
    isVerified: boolean;
    password: string;

    constructor(
            loginService: LoginService,
            private routerExtensions: RouterExtensions){
        this.loginService = loginService;
    }

    submit(){
        
    }

    verify(){
        if(this.email != ''){
            this.loginService.getEmailType(this.email).subscribe((response) => {
                this.isParent = response === 'parent';
                this.isVerified = response === 'parent' || response === 'child';
            });
        }
    }
}
