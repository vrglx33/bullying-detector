"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var localStorage = require("nativescript-localstorage");
var nativescript_speech_recognition_1 = require("nativescript-speech-recognition");
var dashboard_service_1 = require("./dashboard.service");
var fs = require('file-system');
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, dashboardService) {
        this.speechRecognition = new nativescript_speech_recognition_1.SpeechRecognition();
        this.token = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : null;
        this.isRecording = false;
        this.textToReview = "";
        this.needReview = false;
        this.dashboardService = dashboardService;
        this.router = router;
    }
    DashboardComponent.prototype.checkAvailability = function () {
        var _this = this;
        this.speechRecognition.available().then(function (available) {
            console.log(available ? "YES!" : "NO");
            _this.speechRecognition.requestPermission().then(function (granted) {
                console.log("Granted? " + granted);
            });
        });
    };
    DashboardComponent.prototype.startRecording = function () {
        var _this = this;
        this.isRecording = true;
        this.speechRecognition.startListening({
            // optional, uses the device locale by default
            locale: "en-US",
            // set to true to get results back continuously
            returnPartialResults: true,
            // this callback will be invoked repeatedly during recognition
            onResult: function (transcription) {
                _this.transcription = transcription.text;
                console.log("User said: " + transcription.text);
                console.log("User finished?: " + transcription.finished);
                _this.isRecording = !transcription.finished;
                _this.dashboardService.moderateContent(transcription.text).then(function (response) {
                    if (response.Classification && response.Classification.ReviewRecommended) {
                        _this.textToReview = transcription.text;
                    }
                });
                if (transcription.finished) {
                    _this.isRecording = false;
                }
            },
            onError: function (error) {
                // because of the way iOS and Android differ, this is either:
                // - iOS: A 'string', describing the issue. 
                // - Android: A 'number', referencing an 'ERROR_*' constant from https://developer.android.com/reference/android/speech/SpeechRecognizer.
                //            If that code is either 6 or 7 you may want to restart listening.
            }
        }).then(function (started) { console.log("started listening"); }, function (errorMessage) { console.log("Error: " + errorMessage); }).catch(function (error) {
            console.log(error);
            // same as the 'onError' handler, but this may not return if the error occurs after listening has successfully started (because that resolves the promise,
            // hence the' onError' handler was created.
        });
    };
    DashboardComponent.prototype.stopRecording = function () {
        this.isRecording = false;
        this.speechRecognition.stopListening().then(function () { console.log("stopped listening"); }, function (errorMessage) { console.log("Stop error: " + errorMessage); });
    };
    DashboardComponent.prototype.goStart = function () {
        localStorage.clear();
        this.router.navigate(["/"]);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "dashboard",
            moduleId: module.id,
            templateUrl: "./dashboard.component.html",
            styleUrls: ['../home/home.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            dashboard_service_1.DashboardService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLHdEQUEwRDtBQUMxRCxtRkFBb0c7QUFDcEcseURBQXVEO0FBQ3ZELElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBRSxhQUFhLENBQUUsQ0FBQztBQVNwQztJQVVJLDRCQUNJLE1BQWMsRUFDZCxnQkFBa0M7UUFYOUIsc0JBQWlCLEdBQUksSUFBSSxtREFBaUIsRUFBRSxDQUFDO1FBR3JELFVBQUssR0FBVyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDM0YsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFFcEIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsZUFBVSxHQUFFLEtBQUssQ0FBQztRQU1kLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRU0sOENBQWlCLEdBQXhCO1FBQUEsaUJBUUc7UUFQQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsU0FBa0I7WUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBZ0I7Z0JBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFD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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgbG9jYWxTdG9yYWdlIGZyb20gJ25hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2UnO1xuaW1wb3J0IHsgU3BlZWNoUmVjb2duaXRpb25UcmFuc2NyaXB0aW9uLCBTcGVlY2hSZWNvZ25pdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc3BlZWNoLXJlY29nbml0aW9uXCI7XG5pbXBvcnQgeyBEYXNoYm9hcmRTZXJ2aWNlIH0gZnJvbSBcIi4vZGFzaGJvYXJkLnNlcnZpY2VcIjtcbmNvbnN0IGZzID0gcmVxdWlyZSggJ2ZpbGUtc3lzdGVtJyApO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJkYXNoYm9hcmRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4uL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnR7XG4gICAgcHJpdmF0ZSBzcGVlY2hSZWNvZ25pdGlvbsKgID0gbmV3IFNwZWVjaFJlY29nbml0aW9uKCk7XG4gICAgdHJhbnNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHJvdXRlcjogUm91dGVyO1xuICAgIHRva2VuOiBzdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0VG9rZW4nKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3RUb2tlbicpIDogbnVsbDtcbiAgICBpc1JlY29yZGluZyA9IGZhbHNlO1xuICAgIGRhc2hib2FyZFNlcnZpY2U6IERhc2hib2FyZFNlcnZpY2U7XG4gICAgdGV4dFRvUmV2aWV3OiBzdHJpbmcgPSBcIlwiO1xuICAgIG5lZWRSZXZpZXc9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBkYXNoYm9hcmRTZXJ2aWNlOiBEYXNoYm9hcmRTZXJ2aWNlXG4gICAgICAgICl7XG4gICAgICAgIHRoaXMuZGFzaGJvYXJkU2VydmljZSA9IGRhc2hib2FyZFNlcnZpY2U7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja0F2YWlsYWJpbGl0eSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zcGVlY2hSZWNvZ25pdGlvbi5hdmFpbGFibGUoKS50aGVuKChhdmFpbGFibGU6IGJvb2xlYW4pPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhdmFpbGFibGUgPyBcIllFUyFcIiA6IFwiTk9cIik7XG4gICAgICAgICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigoZ3JhbnRlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHcmFudGVkPyBcIiArIGdyYW50ZWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgIH1cblxuICAgIHN0YXJ0UmVjb3JkaW5nKCl7XG4gICAgICAgIHRoaXMuaXNSZWNvcmRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwZWVjaFJlY29nbml0aW9uLnN0YXJ0TGlzdGVuaW5nKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAvLyBvcHRpb25hbCwgdXNlcyB0aGUgZGV2aWNlIGxvY2FsZSBieSBkZWZhdWx0XG4gICAgICAgICAgICAgIGxvY2FsZTogXCJlbi1VU1wiLFxuICAgICAgICAgICAgICAvLyBzZXQgdG8gdHJ1ZSB0byBnZXQgcmVzdWx0cyBiYWNrIGNvbnRpbnVvdXNseVxuICAgICAgICAgICAgICByZXR1cm5QYXJ0aWFsUmVzdWx0czogdHJ1ZSxcbiAgICAgICAgICAgICAgLy8gdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgcmVwZWF0ZWRseSBkdXJpbmcgcmVjb2duaXRpb25cbiAgICAgICAgICAgICAgb25SZXN1bHQ6ICh0cmFuc2NyaXB0aW9uOiBTcGVlY2hSZWNvZ25pdGlvblRyYW5zY3JpcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zY3JpcHRpb24gPSB0cmFuc2NyaXB0aW9uLnRleHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVzZXIgc2FpZDogJHt0cmFuc2NyaXB0aW9uLnRleHR9YCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVzZXIgZmluaXNoZWQ/OiAke3RyYW5zY3JpcHRpb24uZmluaXNoZWR9YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlY29yZGluZyA9ICF0cmFuc2NyaXB0aW9uLmZpbmlzaGVkO1xuICAgICAgICAgICAgICAgIHRoaXMuZGFzaGJvYXJkU2VydmljZS5tb2RlcmF0ZUNvbnRlbnQodHJhbnNjcmlwdGlvbi50ZXh0KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5DbGFzc2lmaWNhdGlvbiAmJiByZXNwb25zZS5DbGFzc2lmaWNhdGlvbi5SZXZpZXdSZWNvbW1lbmRlZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRUb1JldmlldyA9IHRyYW5zY3JpcHRpb24udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmKHRyYW5zY3JpcHRpb24uZmluaXNoZWQpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVjb3JkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbkVycm9yOiAoZXJyb3I6IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2Ugb2YgdGhlIHdheSBpT1MgYW5kIEFuZHJvaWQgZGlmZmVyLCB0aGlzIGlzIGVpdGhlcjpcbiAgICAgICAgICAgICAgICAvLyAtIGlPUzogQSAnc3RyaW5nJywgZGVzY3JpYmluZyB0aGUgaXNzdWUuIFxuICAgICAgICAgICAgICAgIC8vIC0gQW5kcm9pZDogQSAnbnVtYmVyJywgcmVmZXJlbmNpbmcgYW4gJ0VSUk9SXyonIGNvbnN0YW50IGZyb20gaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vcmVmZXJlbmNlL2FuZHJvaWQvc3BlZWNoL1NwZWVjaFJlY29nbml6ZXIuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICBJZiB0aGF0IGNvZGUgaXMgZWl0aGVyIDYgb3IgNyB5b3UgbWF5IHdhbnQgdG8gcmVzdGFydCBsaXN0ZW5pbmcuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApLnRoZW4oXG4gICAgICAgICAgICAoc3RhcnRlZDogYm9vbGVhbikgPT4geyBjb25zb2xlLmxvZyhgc3RhcnRlZCBsaXN0ZW5pbmdgKSB9LFxuICAgICAgICAgICAgKGVycm9yTWVzc2FnZTogc3RyaW5nKSA9PiB7IGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJvck1lc3NhZ2V9YCk7IH1cbiAgICAgICAgICApLmNhdGNoKChlcnJvcjogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgdGhlICdvbkVycm9yJyBoYW5kbGVyLCBidXQgdGhpcyBtYXkgbm90IHJldHVybiBpZiB0aGUgZXJyb3Igb2NjdXJzIGFmdGVyIGxpc3RlbmluZyBoYXMgc3VjY2Vzc2Z1bGx5IHN0YXJ0ZWQgKGJlY2F1c2UgdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZSxcbiAgICAgICAgICAgIC8vIGhlbmNlIHRoZScgb25FcnJvcicgaGFuZGxlciB3YXMgY3JlYXRlZC5cbiAgICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RvcFJlY29yZGluZygpe1xuICAgICAgICB0aGlzLmlzUmVjb3JkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3BlZWNoUmVjb2duaXRpb24uc3RvcExpc3RlbmluZygpLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB7IGNvbnNvbGUubG9nKGBzdG9wcGVkIGxpc3RlbmluZ2ApIH0sXG4gICAgICAgICAgICAoZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IHsgY29uc29sZS5sb2coYFN0b3AgZXJyb3I6ICR7ZXJyb3JNZXNzYWdlfWApOyB9XG4gICAgICAgICAgKTtcbiAgICB9XG4gICAgZ29TdGFydCgpe1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XG4gICAgfVxufSJdfQ==