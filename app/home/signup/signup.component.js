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
        this.signUpService.registerUser(this.usr).subscribe(function (response) { return console.log(response); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsbURBQWlEO0FBU2pEO0lBWUkseUJBQVksYUFBNEI7UUFYakMsUUFBRyxHQUFTO1lBQ2YsSUFBSSxFQUFDLEVBQUU7WUFDUCxlQUFlLEVBQUMsRUFBRTtZQUNsQixZQUFZLEVBQUUsRUFBRTtZQUNoQixPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxFQUFFO1lBQ1osV0FBVyxFQUFDLEVBQUU7WUFDZCxRQUFRLEVBQUMsRUFBRTtTQUNkLENBQUM7UUFJRSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxRQUFRLElBQUcsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDM0YsQ0FBQztJQWpCUSxlQUFlO1FBUDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO3lDQWM2Qiw4QkFBYTtPQVovQixlQUFlLENBa0IzQjtJQUFELHNCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgdXNlciB9IGZyb20gXCIuLi9sb2dpbi91c2VyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgU2lnblVwU2VydmljZSB9IGZyb20gXCIuL3NpZ251cC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1zaWdudXBcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2lnbnVwLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4uL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU2lnblVwQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgdXNyOiB1c2VyID0ge1xuICAgICAgICBuYW1lOlwiXCIsXG4gICAgICAgIHBhcmVudENlbGxwaG9uZTpcIlwiLFxuICAgICAgICBraWRDZWxscGhvbmU6IFwiXCIsXG4gICAgICAgIGtpZE5hbWU6IFwiXCIsXG4gICAgICAgIGtpZEVtYWlsOiBcIlwiLFxuICAgICAgICBwYXJlbnRFbWFpbDonJyxcbiAgICAgICAgcGFzc3dvcmQ6XCJcIixcbiAgICB9O1xuICAgIHNpZ25VcFNlcnZpY2U6IFNpZ25VcFNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihzaWduVXBTZXJ2aWNlOiBTaWduVXBTZXJ2aWNlKXtcbiAgICAgICAgdGhpcy5zaWduVXBTZXJ2aWNlID0gc2lnblVwU2VydmljZTtcbiAgICB9XG4gICAgc3VibWl0KCkge1xuICAgICAgICB0aGlzLnNpZ25VcFNlcnZpY2UucmVnaXN0ZXJVc2VyKHRoaXMudXNyKS5zdWJzY3JpYmUoKHJlc3BvbnNlKT0+Y29uc29sZS5sb2cocmVzcG9uc2UpKTtcbiAgICB9XG59XG4iXX0=