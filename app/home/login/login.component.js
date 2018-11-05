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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLGlEQUErQztBQUMvQyxzREFBK0Q7QUFTL0Q7SUFRSSx3QkFDUSxZQUEwQixFQUNsQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVJsRCxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBU25CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFRCwrQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsUUFBUTtnQkFDMUQsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEtBQUssUUFBUSxDQUFDO2dCQUN0QyxLQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsS0FBSyxRQUFRLElBQUksUUFBUSxLQUFLLE9BQU8sQ0FBQztZQUNwRSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBekJRLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7eUNBV3dCLDRCQUFZO1lBQ0EseUJBQWdCO09BVnpDLGNBQWMsQ0EwQjFCO0lBQUQscUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyB1c2VyIH0gZnJvbSBcIi4vdXNlci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1sb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgICBlbWFpbDpzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nID0gXCJMb2dpblwiO1xuICAgIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlO1xuICAgIGlzUGFyZW50OiBib29sZWFuO1xuICAgIGlzVmVyaWZpZWQ6IGJvb2xlYW47XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpe1xuICAgICAgICB0aGlzLmxvZ2luU2VydmljZSA9IGxvZ2luU2VydmljZTtcbiAgICB9XG5cbiAgICBzdWJtaXQoKXtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdmVyaWZ5KCl7XG4gICAgICAgIGlmKHRoaXMuZW1haWwgIT0gJycpe1xuICAgICAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UuZ2V0RW1haWxUeXBlKHRoaXMuZW1haWwpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGFyZW50ID0gcmVzcG9uc2UgPT09ICdwYXJlbnQnO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWZXJpZmllZCA9IHJlc3BvbnNlID09PSAncGFyZW50JyB8fCByZXNwb25zZSA9PT0gJ2NoaWxkJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19