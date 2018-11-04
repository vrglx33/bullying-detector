"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var router_1 = require("nativescript-angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, routerExtensions) {
        this.routerExtensions = routerExtensions;
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
    LoginComponent.prototype.submit = function () {
        this.routerExtensions.navigate(["/dashboard"]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "app-login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ['../home.component.css']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLGlEQUErQztBQUMvQyxzREFBK0Q7QUFTL0Q7SUFlSSx3QkFDUSxZQUEwQixFQUNsQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQWhCM0MsUUFBRyxHQUFTO1lBQ2YsVUFBVSxFQUFFLEVBQUU7WUFDZCxXQUFXLEVBQUMsRUFBRTtZQUNkLFFBQVEsRUFBQyxFQUFFO1lBQ1gsSUFBSSxFQUFDLEVBQUU7WUFDUCxlQUFlLEVBQUMsRUFBRTtZQUNsQixjQUFjLEVBQUMsRUFBRTtZQUNqQixTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDO1FBRUYsU0FBSSxHQUFXLE9BQU8sQ0FBQztRQU9uQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ25DLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUE3QlEsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FrQndCLDRCQUFZO1lBQ0EseUJBQWdCO09BakJ6QyxjQUFjLENBOEIxQjtJQUFELHFCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgdXNlciB9IGZyb20gXCIuL3VzZXIuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtbG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gICAgcHVibGljIHVzcjogdXNlciA9IHtcbiAgICAgICAgY2hpbGRFbWFpbDogXCJcIixcbiAgICAgICAgcGFyZW50RW1haWw6JycsXG4gICAgICAgIHBhc3N3b3JkOlwiXCIsXG4gICAgICAgIG5hbWU6XCJcIixcbiAgICAgICAgcGFyZW50Q2VsbHBob25lOlwiXCIsXG4gICAgICAgIGNoaWxkQ2VsbHBob25lOlwiXCIsXG4gICAgICAgIGNoaWxkTmFtZTogXCJcIixcbiAgICB9O1xuICAgIGVtYWlsOnN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmcgPSBcIkxvZ2luXCI7XG4gICAgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2U7XG4gICAgaXNQYXJlbnQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgICAgIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKXtcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UgPSBsb2dpblNlcnZpY2U7XG4gICAgfVxuXG4gICAgZW1haWxDaGFuZ2UoZXZlbnQpe1xuICAgICAgICB0aGlzLnVzci5wYXJlbnRFbWFpbCA9IGV2ZW50LnZhbHVlO1xuICAgICAgICBsZXQgZW1haWxUeXBlID0gdGhpcy5sb2dpblNlcnZpY2UuZ2V0RW1haWxUeXBlKGV2ZW50KTtcbiAgICAgICAgdGhpcy5pc1BhcmVudCA9IGVtYWlsVHlwZS5pc1BhcmVudDtcbiAgICB9XG5cbiAgICBzdWJtaXQoKXtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9kYXNoYm9hcmRcIl0pO1xuICAgIH1cbn1cbiJdfQ==