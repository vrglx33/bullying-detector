"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var signup_service_1 = require("./signup.service");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(signUpService) {
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
    }
    SignUpComponent.prototype.submit = function () {
        console.log(this.usr);
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: "app-signup",
            moduleId: module.id,
            templateUrl: "./signup.component.html",
            styleUrls: ['../home.component.css']
        }),
        __metadata("design:paramtypes", [signup_service_1.SignUpService])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsbURBQWlEO0FBU2pEO0lBWUkseUJBQVksYUFBNEI7UUFYakMsUUFBRyxHQUFTO1lBQ2YsSUFBSSxFQUFDLEVBQUU7WUFDUCxlQUFlLEVBQUMsRUFBRTtZQUNsQixZQUFZLEVBQUUsRUFBRTtZQUNoQixPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osV0FBVyxFQUFDLEVBQUU7WUFDZCxRQUFRLEVBQUMsRUFBRTtTQUNkLENBQUM7UUFJRSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsZ0NBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFqQlEsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FjNkIsOEJBQWE7T0FaL0IsZUFBZSxDQWtCM0I7SUFBRCxzQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHVzZXIgfSBmcm9tIFwiLi4vbG9naW4vdXNlci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IFNpZ25VcFNlcnZpY2UgfSBmcm9tIFwiLi9zaWdudXAuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtc2lnbnVwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NpZ251cC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFNpZ25VcENvbXBvbmVudCB7XG4gICAgcHVibGljIHVzcjogdXNlciA9IHtcbiAgICAgICAgbmFtZTpcIlwiLFxuICAgICAgICBwYXJlbnRDZWxscGhvbmU6XCJcIixcbiAgICAgICAga2lkQ2VsbHBob25lOiBcIlwiLFxuICAgICAgICBraWROYW1lOiBcIlwiLFxuICAgICAgICBraWRFbWFpbDogXCJcIixcbiAgICAgICAgcGFyZW50RW1haWw6JycsXG4gICAgICAgIHBhc3N3b3JkOlwiXCIsXG4gICAgfTtcbiAgICBzaWduVXBTZXJ2aWNlOiBTaWduVXBTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3Ioc2lnblVwU2VydmljZTogU2lnblVwU2VydmljZSl7XG4gICAgICAgIHRoaXMuc2lnblVwU2VydmljZSA9IHNpZ25VcFNlcnZpY2U7XG4gICAgfVxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c3IpO1xuICAgIH1cbn1cbiJdfQ==