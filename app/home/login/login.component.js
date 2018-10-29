"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService) {
        this.usr = {
            childEmail: "",
            parentEmail: '',
            password: "",
            name: "",
            parentCellphone: "",
            childCellphone: "",
            childName: "",
        };
        this.text = "Login";
        this.loginService = loginService;
    }
    LoginComponent.prototype.emailChange = function (event) {
        this.usr.parentEmail = event.value;
        var emailType = this.loginService.getEmailType(event);
        this.isParent = emailType.isParent;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "app-login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ['../home.component.css']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLGlEQUErQztBQVMvQztJQWVJLHdCQUFZLFlBQTBCO1FBZC9CLFFBQUcsR0FBUztZQUNmLFVBQVUsRUFBRSxFQUFFO1lBQ2QsV0FBVyxFQUFDLEVBQUU7WUFDZCxRQUFRLEVBQUMsRUFBRTtZQUNYLElBQUksRUFBQyxFQUFFO1lBQ1AsZUFBZSxFQUFDLEVBQUU7WUFDbEIsY0FBYyxFQUFDLEVBQUU7WUFDakIsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQztRQUVGLFNBQUksR0FBVyxPQUFPLENBQUM7UUFLbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNuQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQXZCUSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO3lDQWlCNEIsNEJBQVk7T0FmN0IsY0FBYyxDQXdCMUI7SUFBRCxxQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHVzZXIgfSBmcm9tIFwiLi91c2VyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4vbG9naW4uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtbG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gICAgcHVibGljIHVzcjogdXNlciA9IHtcbiAgICAgICAgY2hpbGRFbWFpbDogXCJcIixcbiAgICAgICAgcGFyZW50RW1haWw6JycsXG4gICAgICAgIHBhc3N3b3JkOlwiXCIsXG4gICAgICAgIG5hbWU6XCJcIixcbiAgICAgICAgcGFyZW50Q2VsbHBob25lOlwiXCIsXG4gICAgICAgIGNoaWxkQ2VsbHBob25lOlwiXCIsXG4gICAgICAgIGNoaWxkTmFtZTogXCJcIixcbiAgICB9O1xuICAgIGVtYWlsOnN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmcgPSBcIkxvZ2luXCI7XG4gICAgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2U7XG4gICAgaXNQYXJlbnQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSl7XG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlID0gbG9naW5TZXJ2aWNlO1xuICAgIH1cblxuICAgIGVtYWlsQ2hhbmdlKGV2ZW50KXtcbiAgICAgICAgdGhpcy51c3IucGFyZW50RW1haWwgPSBldmVudC52YWx1ZTtcbiAgICAgICAgbGV0IGVtYWlsVHlwZSA9IHRoaXMubG9naW5TZXJ2aWNlLmdldEVtYWlsVHlwZShldmVudCk7XG4gICAgICAgIHRoaXMuaXNQYXJlbnQgPSBlbWFpbFR5cGUuaXNQYXJlbnQ7XG4gICAgfVxufVxuIl19