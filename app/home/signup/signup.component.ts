import { Component } from "@angular/core";
import { user } from "../login/user.interface";
import { SignUpService } from "./signup.service";
import { LoginService } from "../login/login.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-signup",
    moduleId: module.id,
    templateUrl: "./signup.component.html",
    styleUrls: ['../home.component.css']
})

export class SignUpComponent {
    public usr: user = {
        name:"",
        parentCellphone:"",
        kidCellphone: "",
        kidName: "",
        kidEmail: "",
        parentEmail:'',
        password:"",
    };
    signUpService: SignUpService;
    loginService: LoginService;
    router: Router;


    constructor(signUpService: SignUpService,
                loginService: LoginService,
                router: Router){
        this.signUpService = signUpService;
        this.loginService = loginService;
        this.router = router;
    }
    submit() {
        this.signUpService
            .registerUser(this.usr)
            .then(response => response.json())
            .then(json => this.loginService.login(json))
            .then(response => {
                this.router.navigate(["/dashboard"]);
            });
    }
}
