"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var home_service_1 = require("./home.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeService) {
        this.login = false;
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
        this.homeService = homeService;
    }
    HomeComponent.prototype.onLogin = function () {
        this.login = !this.login;
        this.text = this.login === true ? 'Sign Up' : 'Login';
    };
    HomeComponent.prototype.emailChange = function (event) {
        this.usr.parentEmail = event.value;
        var emailType = this.homeService.getEmailType(event);
        this.isParent = emailType.isParent;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [home_service_1.HomeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQywrQ0FBNkM7QUFTN0M7SUFnQkksdUJBQVksV0FBd0I7UUFmN0IsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNkLFFBQUcsR0FBUztZQUNmLFVBQVUsRUFBRSxFQUFFO1lBQ2QsV0FBVyxFQUFDLEVBQUU7WUFDZCxRQUFRLEVBQUMsRUFBRTtZQUNYLElBQUksRUFBQyxFQUFFO1lBQ1AsZUFBZSxFQUFDLEVBQUU7WUFDbEIsY0FBYyxFQUFDLEVBQUU7WUFDakIsU0FBUyxFQUFFLEVBQUU7U0FDaEIsQ0FBQztRQUVGLFNBQUksR0FBVyxPQUFPLENBQUM7UUFLbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtJQUN6RCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ25DLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUN2QyxDQUFDO0lBN0JRLGFBQWE7UUFQekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7eUNBa0IyQiwwQkFBVztPQWhCM0IsYUFBYSxDQThCekI7SUFBRCxvQkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHVzZXIgfSBmcm9tIFwiLi91c2VyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSG9tZVNlcnZpY2UgfSBmcm9tIFwiLi9ob21lLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgbG9naW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgdXNyOiB1c2VyID0ge1xuICAgICAgICBjaGlsZEVtYWlsOiBcIlwiLFxuICAgICAgICBwYXJlbnRFbWFpbDonJyxcbiAgICAgICAgcGFzc3dvcmQ6XCJcIixcbiAgICAgICAgbmFtZTpcIlwiLFxuICAgICAgICBwYXJlbnRDZWxscGhvbmU6XCJcIixcbiAgICAgICAgY2hpbGRDZWxscGhvbmU6XCJcIixcbiAgICAgICAgY2hpbGROYW1lOiBcIlwiLFxuICAgIH07XG4gICAgZW1haWw6c3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZyA9IFwiTG9naW5cIjtcbiAgICBob21lU2VydmljZTogSG9tZVNlcnZpY2U7XG4gICAgaXNQYXJlbnQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihob21lU2VydmljZTogSG9tZVNlcnZpY2Upe1xuICAgICAgICB0aGlzLmhvbWVTZXJ2aWNlID0gaG9tZVNlcnZpY2U7XG4gICAgfVxuXG4gICAgb25Mb2dpbigpIHsgXG4gICAgICAgIHRoaXMubG9naW4gPSAhdGhpcy5sb2dpbjtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5sb2dpbiA9PT0gdHJ1ZSA/ICdTaWduIFVwJyA6ICdMb2dpbidcbiAgICB9XG5cbiAgICBlbWFpbENoYW5nZShldmVudCl7XG4gICAgICAgIHRoaXMudXNyLnBhcmVudEVtYWlsID0gZXZlbnQudmFsdWU7XG4gICAgICAgIGxldCBlbWFpbFR5cGUgPSB0aGlzLmhvbWVTZXJ2aWNlLmdldEVtYWlsVHlwZShldmVudCk7XG4gICAgICAgIHRoaXMuaXNQYXJlbnQgPSBlbWFpbFR5cGUuaXNQYXJlbnQ7XG4gICAgfVxufVxuIl19