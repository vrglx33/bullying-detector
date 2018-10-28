import { Component, Input } from "@angular/core";
import { user } from "./user.interface";
import { LoginService } from "./login.service";

@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})

export class LoginComponent {
    @Input()
    login;
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

    constructor(loginService: LoginService){
        this.loginService = loginService;
    }
    onLogin() { 
        this.login = !this.login;
        this.text = this.login === true ? 'Sign Up' : 'Login'
    }

    emailChange(event){
        this.usr.parentEmail = event.value;
        let emailType = this.loginService.getEmailType(event);
        this.isParent = emailType.isParent;
    }
}
