"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.getEmailType = function (email) {
        return this.http.get("http://localhost:8080/users/verify/mail?" + email);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsNkNBQWtEO0FBS2xEO0lBRUksc0JBQVksSUFBZ0I7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNELG1DQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxHQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFQUSxZQUFZO1FBSHhCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUdvQixpQkFBVTtPQUZuQixZQUFZLENBUXhCO0lBQUQsbUJBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSAnLi91c2Vycy5tb2NrJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuICAgIHByaXZhdGUgaHR0cCA6IEh0dHBDbGllbnQ7XG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCl7XG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gICAgfVxuICAgIGdldEVtYWlsVHlwZShlbWFpbCl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VzZXJzL3ZlcmlmeS9tYWlsP1wiK2VtYWlsKTtcbiAgICB9XG59Il19