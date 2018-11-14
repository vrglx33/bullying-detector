"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.getEmailType = function (email) {
        return fetch("http://127.0.0.1:8080/users/verify/mail?email=" + email);
    };
    LoginService.prototype.login = function (user) {
        return fetch("http://127.0.0.1:8080/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        });
    };
    LoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWtEO0FBS2xEO0lBRUksc0JBQVksSUFBZ0I7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNELG1DQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsR0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsNEJBQUssR0FBTCxVQUFNLElBQUk7UUFDTixNQUFNLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFDO1lBQ3ZDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNMLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGNBQWMsRUFBRSxrQkFBa0I7YUFDckM7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDM0IsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQWpCUSxZQUFZO1FBSHhCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUdvQixpQkFBVTtPQUZuQixZQUFZLENBa0J4QjtJQUFELG1CQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgICBwcml2YXRlIGh0dHAgOiBIdHRwQ2xpZW50O1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQpe1xuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xuICAgIH1cbiAgICBnZXRFbWFpbFR5cGUoZW1haWwpe1xuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwODAvdXNlcnMvdmVyaWZ5L21haWw/ZW1haWw9XCIrZW1haWwpO1xuICAgIH1cbiAgICBsb2dpbih1c2VyKXtcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4MDgwL2xvZ2luXCIseyBcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKSxcbiAgICAgICAgICB9KTtcbiAgICB9XG59Il19