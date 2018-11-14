"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var localStorage = require("nativescript-localstorage");
var nativescript_audio_1 = require("nativescript-audio");
var fs = require('file-system');
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.recorderOptions = {
            filename: "/record",
            maxDuration: 400000,
        };
        this.token = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : null;
        this.recorder = new nativescript_audio_1.TNSRecorder();
        this.router = router;
    }
    DashboardComponent.prototype.startRecording = function () {
        var audioPath = fs.knownFolders.currentApp().getFolder("audio");
        this.recorderOptions.filename = audioPath.path + '/recording.mp3';
        this.recorder.start(this.recorderOptions);
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
        __metadata("design:paramtypes", [router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLHdEQUEwRDtBQUMxRCx5REFBdUU7QUFDdkUsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFFLGFBQWEsQ0FBRSxDQUFDO0FBU3BDO0lBU0ksNEJBQVksTUFBYztRQVAxQixvQkFBZSxHQUF5QjtZQUNwQyxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDO1FBQ0YsVUFBSyxHQUFXLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzRixhQUFRLEdBQUcsSUFBSSxnQ0FBVyxFQUFFLENBQUM7UUFHekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVELDJDQUFjLEdBQWQ7UUFDUSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBRSxPQUFPLENBQUUsQ0FBQztRQUNsRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFBO1FBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsb0NBQU8sR0FBUDtRQUNJLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQXRCUSxrQkFBa0I7UUFQOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBV3NCLGVBQU07T0FUakIsa0JBQWtCLENBdUI5QjtJQUFELHlCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGxvY2FsU3RvcmFnZSBmcm9tICduYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlJztcbmltcG9ydCB7IFROU1JlY29yZGVyLCBBdWRpb1JlY29yZGVyT3B0aW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hdWRpbyc7XG5jb25zdCBmcyA9IHJlcXVpcmUoICdmaWxlLXN5c3RlbScgKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZGFzaGJvYXJkXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuLi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50e1xuICAgIHJvdXRlcjogUm91dGVyO1xuICAgIHJlY29yZGVyT3B0aW9uczogQXVkaW9SZWNvcmRlck9wdGlvbnMgPSB7XG4gICAgICAgIGZpbGVuYW1lOiBcIi9yZWNvcmRcIixcbiAgICAgICAgbWF4RHVyYXRpb246IDQwMDAwMCxcbiAgICB9O1xuICAgIHRva2VuOiBzdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0VG9rZW4nKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3RUb2tlbicpIDogbnVsbDtcbiAgICByZWNvcmRlciA9IG5ldyBUTlNSZWNvcmRlcigpO1xuXG4gICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIpe1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB9XG4gICAgXG4gICAgc3RhcnRSZWNvcmRpbmcoKXtcbiAgICAgICAgICAgIGxldCBhdWRpb1BhdGggPSBmcy5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLmdldEZvbGRlciggXCJhdWRpb1wiICk7XG4gICAgICAgICAgICB0aGlzLnJlY29yZGVyT3B0aW9ucy5maWxlbmFtZSA9IGF1ZGlvUGF0aC5wYXRoICsgJy9yZWNvcmRpbmcubXAzJ1xuICAgICAgICAgICAgdGhpcy5yZWNvcmRlci5zdGFydCh0aGlzLnJlY29yZGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZ29TdGFydCgpe1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XG4gICAgfVxufSJdfQ==