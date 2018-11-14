"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DashboardService = /** @class */ (function () {
    function DashboardService() {
    }
    DashboardService.prototype.moderateContent = function (content) {
        return fetch("https://brazilsouth.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessText/Screen?classify=True", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'text/plain',
                "Ocp-Apim-Subscription-Key": "0a871e190c9c448796ec32eb5a691d64"
            },
            body: content,
        }).then(function (response) { return response.json(); });
    };
    DashboardService = __decorate([
        core_1.Injectable({
            providedIn: 'root',
        })
    ], DashboardService);
    return DashboardService;
}());
exports.DashboardService = DashboardService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoYm9hcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQU0zQztJQUFBO0lBWUEsQ0FBQztJQVhHLDBDQUFlLEdBQWYsVUFBZ0IsT0FBTztRQUNuQixNQUFNLENBQUMsS0FBSyxDQUFDLGlIQUFpSCxFQUFDO1lBQzNILE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNMLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGNBQWMsRUFBRSxZQUFZO2dCQUM1QiwyQkFBMkIsRUFBRSxrQ0FBa0M7YUFDbEU7WUFDRCxJQUFJLEVBQUUsT0FBTztTQUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQVhRLGdCQUFnQjtRQUg1QixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQVk1QjtJQUFELHVCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFNlcnZpY2Uge1xuICAgIG1vZGVyYXRlQ29udGVudChjb250ZW50KXtcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9icmF6aWxzb3V0aC5hcGkuY29nbml0aXZlLm1pY3Jvc29mdC5jb20vY29udGVudG1vZGVyYXRvci9tb2RlcmF0ZS92MS4wL1Byb2Nlc3NUZXh0L1NjcmVlbj9jbGFzc2lmeT1UcnVlXCIseyBcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJyxcbiAgICAgICAgICAgICAgICBcIk9jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXlcIjogXCIwYTg3MWUxOTBjOWM0NDg3OTZlYzMyZWI1YTY5MWQ2NFwiXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIGJvZHk6IGNvbnRlbnQsXG4gICAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICAgIH1cbn0iXX0=