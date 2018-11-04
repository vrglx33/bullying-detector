import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AuthGuardService } from "./auth/auth-guard.service";

const routes: Routes = [
    {   
        path: "",
        redirectTo: "/home", 
        pathMatch: "full" 
    },
    { 
        path: "home", 
        loadChildren: "./home/home.module#HomeModule" 
    },
    { 
        path: "dashboard", 
        loadChildren: "./dashboard/dashboard.module#DashboardModule", 
        canActivate: [AuthGuardService]  
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
