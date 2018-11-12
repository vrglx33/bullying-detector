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
        name:"",
        parentCellphone:"",
        kidCellphone: "",
        kidName: "",
        kidEmail: "",
        parentEmail:'',
        password:"",
    };
    signUpService: SignUpService;

    constructor(signUpService: SignUpService){
        this.signUpService = signUpService;
    }
    submit() {
        this.signUpService.registerUser(this.usr).subscribe((response)=>console.log(response));
    }
}
