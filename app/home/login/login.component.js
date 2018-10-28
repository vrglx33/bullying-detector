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
    LoginComponent.prototype.onLogin = function () {
        this.login = !this.login;
        this.text = this.login === true ? 'Sign Up' : 'Login';
    };
    LoginComponent.prototype.emailChange = function (event) {
        this.usr.parentEmail = event.value;
        var emailType = this.loginService.getEmailType(event);
        this.isParent = emailType.isParent;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "login", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBRWpELGlEQUErQztBQVMvQztJQWlCSSx3QkFBWSxZQUEwQjtRQWQvQixRQUFHLEdBQVM7WUFDZixVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBQyxFQUFFO1lBQ2QsUUFBUSxFQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUMsRUFBRTtZQUNQLGVBQWUsRUFBQyxFQUFFO1lBQ2xCLGNBQWMsRUFBQyxFQUFFO1lBQ2pCLFNBQVMsRUFBRSxFQUFFO1NBQ2hCLENBQUM7UUFFRixTQUFJLEdBQVcsT0FBTyxDQUFDO1FBS25CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxnQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUE7SUFDekQsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNuQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQTNCRDtRQURDLFlBQUssRUFBRTs7aURBQ0Y7SUFGRyxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQW1CNEIsNEJBQVk7T0FqQjdCLGNBQWMsQ0E4QjFCO0lBQUQscUJBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgdXNlciB9IGZyb20gXCIuL3VzZXIuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi9sb2dpbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKVxuICAgIGxvZ2luO1xuICAgIHB1YmxpYyB1c3I6IHVzZXIgPSB7XG4gICAgICAgIGNoaWxkRW1haWw6IFwiXCIsXG4gICAgICAgIHBhcmVudEVtYWlsOicnLFxuICAgICAgICBwYXNzd29yZDpcIlwiLFxuICAgICAgICBuYW1lOlwiXCIsXG4gICAgICAgIHBhcmVudENlbGxwaG9uZTpcIlwiLFxuICAgICAgICBjaGlsZENlbGxwaG9uZTpcIlwiLFxuICAgICAgICBjaGlsZE5hbWU6IFwiXCIsXG4gICAgfTtcbiAgICBlbWFpbDpzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nID0gXCJMb2dpblwiO1xuICAgIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlO1xuICAgIGlzUGFyZW50OiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IobG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2Upe1xuICAgICAgICB0aGlzLmxvZ2luU2VydmljZSA9IGxvZ2luU2VydmljZTtcbiAgICB9XG4gICAgb25Mb2dpbigpIHsgXG4gICAgICAgIHRoaXMubG9naW4gPSAhdGhpcy5sb2dpbjtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5sb2dpbiA9PT0gdHJ1ZSA/ICdTaWduIFVwJyA6ICdMb2dpbidcbiAgICB9XG5cbiAgICBlbWFpbENoYW5nZShldmVudCl7XG4gICAgICAgIHRoaXMudXNyLnBhcmVudEVtYWlsID0gZXZlbnQudmFsdWU7XG4gICAgICAgIGxldCBlbWFpbFR5cGUgPSB0aGlzLmxvZ2luU2VydmljZS5nZXRFbWFpbFR5cGUoZXZlbnQpO1xuICAgICAgICB0aGlzLmlzUGFyZW50ID0gZW1haWxUeXBlLmlzUGFyZW50O1xuICAgIH1cbn1cbiJdfQ==