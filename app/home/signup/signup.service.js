"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var SignUpService = /** @class */ (function () {
    function SignUpService(http) {
        this.http = http;
    }
    SignUpService.prototype.registerUser = function (user) {
        return this.http.post("http://localhost:8080/sign-up", user);
    };
    SignUpService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SignUpService);
    return SignUpService;
}());
exports.SignUpService = SignUpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWdudXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBa0Q7QUFLbEQ7SUFFSSx1QkFBWSxJQUFnQjtRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0NBQVksR0FBWixVQUFhLElBQUk7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQVBRLGFBQWE7UUFIekIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBR29CLGlCQUFVO09BRm5CLGFBQWEsQ0FRekI7SUFBRCxvQkFBQztDQUFBLEFBUkQsSUFRQztBQVJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25VcFNlcnZpY2Uge1xuICAgIHByaXZhdGUgaHR0cCA6IEh0dHBDbGllbnQ7XG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCl7XG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gICAgfVxuICAgIHJlZ2lzdGVyVXNlcih1c2VyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9zaWduLXVwXCIsIHVzZXIpO1xuICAgIH1cbn0iXX0=