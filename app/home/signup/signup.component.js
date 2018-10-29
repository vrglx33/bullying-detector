"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var signup_service_1 = require("./signup.service");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(signUpService) {
        this.usr = {
            name: "",
            parentCellphone: "",
            childCellphone: "",
            childName: "",
            childEmail: "",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsbURBQWlEO0FBU2pEO0lBWUkseUJBQVksYUFBNEI7UUFYakMsUUFBRyxHQUFTO1lBQ2YsSUFBSSxFQUFDLEVBQUU7WUFDUCxlQUFlLEVBQUMsRUFBRTtZQUNsQixjQUFjLEVBQUMsRUFBRTtZQUNqQixTQUFTLEVBQUUsRUFBRTtZQUNiLFVBQVUsRUFBRSxFQUFFO1lBQ2QsV0FBVyxFQUFDLEVBQUU7WUFDZCxRQUFRLEVBQUMsRUFBRTtTQUNkLENBQUM7UUFJRSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsZ0NBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFqQlEsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FjNkIsOEJBQWE7T0FaL0IsZUFBZSxDQWtCM0I7SUFBRCxzQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHVzZXIgfSBmcm9tIFwiLi4vbG9naW4vdXNlci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IFNpZ25VcFNlcnZpY2UgfSBmcm9tIFwiLi9zaWdudXAuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtc2lnbnVwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NpZ251cC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFNpZ25VcENvbXBvbmVudCB7XG4gICAgcHVibGljIHVzcjogdXNlciA9IHtcbiAgICAgICAgbmFtZTpcIlwiLFxuICAgICAgICBwYXJlbnRDZWxscGhvbmU6XCJcIixcbiAgICAgICAgY2hpbGRDZWxscGhvbmU6XCJcIixcbiAgICAgICAgY2hpbGROYW1lOiBcIlwiLFxuICAgICAgICBjaGlsZEVtYWlsOiBcIlwiLFxuICAgICAgICBwYXJlbnRFbWFpbDonJyxcbiAgICAgICAgcGFzc3dvcmQ6XCJcIixcbiAgICB9O1xuICAgIHNpZ25VcFNlcnZpY2U6IFNpZ25VcFNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihzaWduVXBTZXJ2aWNlOiBTaWduVXBTZXJ2aWNlKXtcbiAgICAgICAgdGhpcy5zaWduVXBTZXJ2aWNlID0gc2lnblVwU2VydmljZTtcbiAgICB9XG4gICAgc3VibWl0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzcik7XG4gICAgfVxufVxuIl19