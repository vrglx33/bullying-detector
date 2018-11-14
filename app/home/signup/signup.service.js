"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var SignUpService = /** @class */ (function () {
    function SignUpService(http) {
        this.http = http;
    }
    SignUpService.prototype.registerUser = function (user) {
        return fetch("http://127.0.0.1:8080/users/sign-up", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWdudXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFPL0Q7SUFFSSx1QkFBWSxJQUFnQjtRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0Qsb0NBQVksR0FBWixVQUFhLElBQUk7UUFDYixNQUFNLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxFQUFFO1lBQ2xELE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGNBQWMsRUFBRSxrQkFBa0I7YUFDakM7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDM0IsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWRRLGFBQWE7UUFIekIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBR29CLGlCQUFVO09BRm5CLGFBQWEsQ0FlekI7SUFBRCxvQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB1c2VyIH0gZnJvbSAnLi4vbG9naW4vdXNlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tICcuLi9sb2dpbi91c2Vycy5tb2NrJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25VcFNlcnZpY2Uge1xuICAgIHByaXZhdGUgaHR0cCA6IEh0dHBDbGllbnQ7XG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCl7XG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gICAgfVxuICAgIHJlZ2lzdGVyVXNlcih1c2VyKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MC91c2Vycy9zaWduLXVwXCIsIHsgXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgIH0sIFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxuICAgICAgICB9KTtcbiAgICB9XG59ICJdfQ==