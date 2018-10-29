"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var signup_service_1 = require("./signup.service");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(signUpService) {
        this.usr = {
            childEmail: "",
            parentEmail: '',
            password: "",
            name: "",
            parentCellphone: "",
            childCellphone: "",
            childName: "",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsbURBQWlEO0FBU2pEO0lBWUkseUJBQVksYUFBNEI7UUFYakMsUUFBRyxHQUFTO1lBQ2YsVUFBVSxFQUFFLEVBQUU7WUFDZCxXQUFXLEVBQUMsRUFBRTtZQUNkLFFBQVEsRUFBQyxFQUFFO1lBQ1gsSUFBSSxFQUFDLEVBQUU7WUFDUCxlQUFlLEVBQUMsRUFBRTtZQUNsQixjQUFjLEVBQUMsRUFBRTtZQUNqQixTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFDO1FBSUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUNELGdDQUFNLEdBQU47UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBakJRLGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7eUNBYzZCLDhCQUFhO09BWi9CLGVBQWUsQ0FrQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyB1c2VyIH0gZnJvbSBcIi4uL2xvZ2luL3VzZXIuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBTaWduVXBTZXJ2aWNlIH0gZnJvbSBcIi4vc2lnbnVwLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLXNpZ251cFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zaWdudXAuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQge1xuICAgIHB1YmxpYyB1c3I6IHVzZXIgPSB7XG4gICAgICAgIGNoaWxkRW1haWw6IFwiXCIsXG4gICAgICAgIHBhcmVudEVtYWlsOicnLFxuICAgICAgICBwYXNzd29yZDpcIlwiLFxuICAgICAgICBuYW1lOlwiXCIsXG4gICAgICAgIHBhcmVudENlbGxwaG9uZTpcIlwiLFxuICAgICAgICBjaGlsZENlbGxwaG9uZTpcIlwiLFxuICAgICAgICBjaGlsZE5hbWU6IFwiXCIsXG4gICAgfTtcbiAgICBzaWduVXBTZXJ2aWNlOiBTaWduVXBTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3Ioc2lnblVwU2VydmljZTogU2lnblVwU2VydmljZSl7XG4gICAgICAgIHRoaXMuc2lnblVwU2VydmljZSA9IHNpZ25VcFNlcnZpY2U7XG4gICAgfVxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c3IpO1xuICAgIH1cbn1cbiJdfQ==