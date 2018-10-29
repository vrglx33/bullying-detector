import { Component } from "@angular/core";
import { user } from "../login/user.interface";
import { SignUpService } from "./signup.service";

@Component({
    selector: "app-signup",
    moduleId: module.id,
    templateUrl: "./signup.component.html",
    styleUrls: ['../home.component.css']
})

export class SignUpComponent {
    public usr: user = {
        childEmail: "",
        parentEmail:'',
        password:"",
        name:"",
        parentCellphone:"",
        childCellphone:"",
        childName: "",
    };
    signUpService: SignUpService;

    constructor(signUpService: SignUpService){
        this.signUpService = signUpService;
    }
    submit() {
        console.log(this.usr);
    }
}
