"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var localStorage = require("nativescript-localstorage");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.text = "Login";
        this.router = router;
        this.loginService = loginService;
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.loginService.login({
            username: this.email,
            password: this.password
        }).then(function (response) {
            if (response.headers.get("authorization") && response.status === 200) {
                localStorage.setItem('jwtToken', response.headers.get("authorization"));
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    LoginComponent.prototype.verify = function () {
        var _this = this;
        if (this.email != '') {
            this.loginService
                .getEmailType(this.email)
                .then(function (response) { return response.json(); })
                .then(function (json) {
                _this.isParent = json.status === 'parent';
                _this.isVerified = json.status === 'parent' || json.status === 'child';
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
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGlEQUErQztBQUMvQyx3REFBMEQ7QUFDMUQsMENBQXlDO0FBU3pDO0lBU0ksd0JBQ1EsWUFBMEIsRUFDMUIsTUFBYztRQVR0QixTQUFJLEdBQVcsT0FBTyxDQUFDO1FBVW5CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ1osRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQSxDQUFDO2dCQUNqRSxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFVQztRQVRHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNqQixJQUFJLENBQUMsWUFBWTtpQkFDWixZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDeEIsSUFBSSxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQkFDbkMsSUFBSSxDQUFDLFVBQUMsSUFBSTtnQkFDUCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDO2dCQUN6QyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDO1lBQzFFLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztJQUNMLENBQUM7SUF0Q1EsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FZd0IsNEJBQVk7WUFDbEIsZUFBTTtPQVhiLGNBQWMsQ0F1QzFCO0lBQUQscUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBsb2NhbFN0b3JhZ2UgZnJvbSAnbmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1sb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgICBlbWFpbDpzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nID0gXCJMb2dpblwiO1xuICAgIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlO1xuICAgIGlzUGFyZW50OiBib29sZWFuO1xuICAgIGlzVmVyaWZpZWQ6IGJvb2xlYW47XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICByb3V0ZXI6IFJvdXRlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgICAgICByb3V0ZXI6IFJvdXRlcil7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLmxvZ2luU2VydmljZSA9IGxvZ2luU2VydmljZTtcbiAgICB9XG5cbiAgICBzdWJtaXQoKXtcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW4oe1xuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiYXV0aG9yaXphdGlvblwiKSAmJiByZXNwb25zZS5zdGF0dXMgPT09IDIwMCl7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dFRva2VuJywgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJhdXRob3JpemF0aW9uXCIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9kYXNoYm9hcmQnXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZlcmlmeSgpe1xuICAgICAgICBpZih0aGlzLmVtYWlsICE9ICcnKXtcbiAgICAgICAgICAgIHRoaXMubG9naW5TZXJ2aWNlXG4gICAgICAgICAgICAgICAgLmdldEVtYWlsVHlwZSh0aGlzLmVtYWlsKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKChqc29uKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGFyZW50ID0ganNvbi5zdGF0dXMgPT09ICdwYXJlbnQnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVmVyaWZpZWQgPSBqc29uLnN0YXR1cyA9PT0gJ3BhcmVudCcgfHwganNvbi5zdGF0dXMgPT09ICdjaGlsZCc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=