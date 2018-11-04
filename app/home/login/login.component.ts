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
    public usr: user = {
        childEmail: "",
        parentEmail:'',
        password:"",
        name:"",
        parentCellphone:"",
        childCellphone:"",
        childName: "",
    };
    email:string;
    text: string = "Login";
    loginService: LoginService;
    isParent: boolean;

    constructor(
            loginService: LoginService,
            private routerExtensions: RouterExtensions){
        this.loginService = loginService;
    }

    emailChange(event){
        this.usr.parentEmail = event.value;
        let emailType = this.loginService.getEmailType(event);
        this.isParent = emailType.isParent;
    }

    submit(){
        this.routerExtensions.navigate(["/dashboard"]);
    }
}
