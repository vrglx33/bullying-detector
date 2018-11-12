"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var router_1 = require("nativescript-angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.text = "Login";
        this.loginService = loginService;
    }
    LoginComponent.prototype.submit = function () {
    };
    LoginComponent.prototype.verify = function () {
        var _this = this;
        if (this.email != '') {
            this.loginService.getEmailType(this.email).subscribe(function (response) {
                _this.isParent = response === 'parent';
                _this.isVerified = response === 'parent' || response === 'child';
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGlEQUErQztBQUMvQyxzREFBK0Q7QUFTL0Q7SUFRSSx3QkFDUSxZQUEwQixFQUNsQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVJsRCxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBU25CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFRCwrQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTtnQkFDMUQsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEtBQUssUUFBUSxDQUFDO2dCQUN0QyxLQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsS0FBSyxRQUFRLElBQUksUUFBUSxLQUFLLE9BQU8sQ0FBQztZQUNwRSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBekJRLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7eUNBV3dCLDRCQUFZO1lBQ0EseUJBQWdCO09BVnpDLGNBQWMsQ0EwQjFCO0lBQUQscUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtbG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gICAgZW1haWw6c3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZyA9IFwiTG9naW5cIjtcbiAgICBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZTtcbiAgICBpc1BhcmVudDogYm9vbGVhbjtcbiAgICBpc1ZlcmlmaWVkOiBib29sZWFuO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgICAgIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKXtcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UgPSBsb2dpblNlcnZpY2U7XG4gICAgfVxuXG4gICAgc3VibWl0KCl7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHZlcmlmeSgpe1xuICAgICAgICBpZih0aGlzLmVtYWlsICE9ICcnKXtcbiAgICAgICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmdldEVtYWlsVHlwZSh0aGlzLmVtYWlsKS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1BhcmVudCA9IHJlc3BvbnNlID09PSAncGFyZW50JztcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmVyaWZpZWQgPSByZXNwb25zZSA9PT0gJ3BhcmVudCcgfHwgcmVzcG9uc2UgPT09ICdjaGlsZCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==