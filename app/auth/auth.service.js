"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        return true;
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDO0lBQUE7SUFLQSxDQUFDO0lBSlEscUNBQWUsR0FBdEI7UUFDRSxJQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBSlUsV0FBVztRQUR2QixpQkFBVSxFQUFFO09BQ0EsV0FBVyxDQUt2QjtJQUFELGtCQUFDO0NBQUEsQUFMRCxJQUtDO0FBTFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0iXX0=