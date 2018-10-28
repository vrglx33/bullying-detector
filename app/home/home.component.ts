import { Component } from "@angular/core";
import { user } from "./user.interface";
import { HomeService } from "./home.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    public login = false;
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
    homeService: HomeService;
    isParent: boolean;

    constructor(homeService: HomeService){
        this.homeService = homeService;
    }

    onLogin() { 
        this.login = !this.login;
        this.text = this.login === true ? 'Sign Up' : 'Login'
    }

    emailChange(event){
        this.usr.parentEmail = event.value;
        let emailType = this.homeService.getEmailType(event);
        this.isParent = emailType.isParent;
    }
}
