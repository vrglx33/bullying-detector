import { Component } from "@angular/core";
import { LoginService } from "./login.service";
import * as localStorage from 'nativescript-localstorage';
import { Router } from "@angular/router";

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
    router: Router;

    constructor(
            loginService: LoginService,
            router: Router){
        this.router = router;
        this.loginService = loginService;
    }

    submit(){
        this.loginService.login({
            username: this.email,
            password: this.password
        }).then(response => {
            if(response.headers.get("authorization") && response.status === 200){
                localStorage.setItem('jwtToken', response.headers.get("authorization"));
                this.router.navigate(['/dashboard']);
            }
        });
    }

    verify(){
        if(this.email != ''){
            this.loginService
                .getEmailType(this.email)
                .then((response) => response.json())
                .then((json)=>{
                    this.isParent = json.status === 'parent';
                    this.isVerified = json.status === 'parent' || json.status === 'child';
                });
        }
    }
}
