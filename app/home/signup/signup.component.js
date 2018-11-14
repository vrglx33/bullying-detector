"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var signup_service_1 = require("./signup.service");
var login_service_1 = require("../login/login.service");
var router_1 = require("@angular/router");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(signUpService, loginService, router) {
        this.usr = {
            name: "",
            parentCellphone: "",
            kidCellphone: "",
            kidName: "",
            kidEmail: "",
            parentEmail: '',
            password: "",
        };
        this.signUpService = signUpService;
        this.loginService = loginService;
        this.router = router;
    }
    SignUpComponent.prototype.submit = function () {
        var _this = this;
        this.signUpService
            .registerUser(this.usr)
            .then(function (response) { return response.json(); })
            .then(function (json) { return _this.loginService.login(json); })
            .then(function (response) {
            _this.router.navigate(["/dashboard"]);
        });
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: "app-signup",
            moduleId: module.id,
            templateUrl: "./signup.component.html",
            styleUrls: ['../home.component.css']
        }),
        __metadata("design:paramtypes", [signup_service_1.SignUpService,
            login_service_1.LoginService,
            router_1.Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsbURBQWlEO0FBQ2pELHdEQUFzRDtBQUN0RCwwQ0FBeUM7QUFTekM7SUFlSSx5QkFBWSxhQUE0QixFQUM1QixZQUEwQixFQUMxQixNQUFjO1FBaEJuQixRQUFHLEdBQVM7WUFDZixJQUFJLEVBQUMsRUFBRTtZQUNQLGVBQWUsRUFBQyxFQUFFO1lBQ2xCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsUUFBUSxFQUFFLEVBQUU7WUFDWixXQUFXLEVBQUMsRUFBRTtZQUNkLFFBQVEsRUFBQyxFQUFFO1NBQ2QsQ0FBQztRQVNFLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxnQ0FBTSxHQUFOO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsYUFBYTthQUNiLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ3RCLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDakMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQTdCLENBQTZCLENBQUM7YUFDM0MsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUNWLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUE5QlEsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FpQjZCLDhCQUFhO1lBQ2QsNEJBQVk7WUFDbEIsZUFBTTtPQWpCakIsZUFBZSxDQStCM0I7SUFBRCxzQkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHVzZXIgfSBmcm9tIFwiLi4vbG9naW4vdXNlci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IFNpZ25VcFNlcnZpY2UgfSBmcm9tIFwiLi9zaWdudXAuc2VydmljZVwiO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4uL2xvZ2luL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLXNpZ251cFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zaWdudXAuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQge1xuICAgIHB1YmxpYyB1c3I6IHVzZXIgPSB7XG4gICAgICAgIG5hbWU6XCJcIixcbiAgICAgICAgcGFyZW50Q2VsbHBob25lOlwiXCIsXG4gICAgICAgIGtpZENlbGxwaG9uZTogXCJcIixcbiAgICAgICAga2lkTmFtZTogXCJcIixcbiAgICAgICAga2lkRW1haWw6IFwiXCIsXG4gICAgICAgIHBhcmVudEVtYWlsOicnLFxuICAgICAgICBwYXNzd29yZDpcIlwiLFxuICAgIH07XG4gICAgc2lnblVwU2VydmljZTogU2lnblVwU2VydmljZTtcbiAgICBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZTtcbiAgICByb3V0ZXI6IFJvdXRlcjtcblxuXG4gICAgY29uc3RydWN0b3Ioc2lnblVwU2VydmljZTogU2lnblVwU2VydmljZSxcbiAgICAgICAgICAgICAgICBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICAgICAgICAgICAgICByb3V0ZXI6IFJvdXRlcil7XG4gICAgICAgIHRoaXMuc2lnblVwU2VydmljZSA9IHNpZ25VcFNlcnZpY2U7XG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlID0gbG9naW5TZXJ2aWNlO1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB9XG4gICAgc3VibWl0KCkge1xuICAgICAgICB0aGlzLnNpZ25VcFNlcnZpY2VcbiAgICAgICAgICAgIC5yZWdpc3RlclVzZXIodGhpcy51c3IpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKGpzb24pKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9kYXNoYm9hcmRcIl0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19