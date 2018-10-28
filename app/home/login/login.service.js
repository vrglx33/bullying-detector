"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var users_mock_1 = require("./users.mock");
var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.getEmailType = function (email) {
        var users = users_mock_1.Users
            .filter(function (user) { return user.parentEmail.toLowerCase() === email.value.toLowerCase(); });
        if (users.length) {
            return {
                user: users[0],
                isParent: true
            };
        }
        users = users_mock_1.Users
            .filter(function (user) { return user.childEmail === email.value; });
        if (users.length) {
            return {
                user: users[0],
                isParent: false
            };
        }
        return {
            isParent: false
        };
    };
    LoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        })
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMkNBQXFDO0FBS3JDO0lBQUE7SUErQkEsQ0FBQztJQTdCRyxtQ0FBWSxHQUFaLFVBQWEsS0FBSztRQUNkLElBQUksS0FBSyxHQUFHLGtCQUFLO2FBQ1osTUFBTSxDQUNILFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUE1RCxDQUE0RCxDQUNuRSxDQUFDO1FBRVYsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDYixNQUFNLENBQUM7Z0JBQ0gsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsUUFBUSxFQUFFLElBQUk7YUFDakIsQ0FBQztRQUNOLENBQUM7UUFFRCxLQUFLLEdBQUcsa0JBQUs7YUFDUixNQUFNLENBQ0gsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssQ0FBQyxLQUFLLEVBQS9CLENBQStCLENBQ3RDLENBQUM7UUFFVixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztZQUNiLE1BQU0sQ0FBQztnQkFDSCxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDZCxRQUFRLEVBQUUsS0FBSzthQUNsQixDQUFDO1FBQ04sQ0FBQztRQUVELE1BQU0sQ0FBQztZQUNILFFBQVEsRUFBRSxLQUFLO1NBQ2xCLENBQUM7SUFDTixDQUFDO0lBOUJRLFlBQVk7UUFIeEIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxZQUFZLENBK0J4QjtJQUFELG1CQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gJy4vdXNlcnMubW9jayc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuXG4gICAgZ2V0RW1haWxUeXBlKGVtYWlsKXtcbiAgICAgICAgbGV0IHVzZXJzID0gVXNlcnNcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgdXNlciA9PiB1c2VyLnBhcmVudEVtYWlsLnRvTG93ZXJDYXNlKCkgPT09IGVtYWlsLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgaWYodXNlcnMubGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgICAgIHVzZXI6IHVzZXJzWzBdLCBcbiAgICAgICAgICAgICAgICBpc1BhcmVudDogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVzZXJzID0gVXNlcnNcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgdXNlciA9PiB1c2VyLmNoaWxkRW1haWwgPT09IGVtYWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICBpZih1c2Vycy5sZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICAgICAgdXNlcjogdXNlcnNbMF0sIFxuICAgICAgICAgICAgICAgIGlzUGFyZW50OiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgaXNQYXJlbnQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxufSJdfQ==