import { Component } from "@angular/core";
import { Router } from "@angular/router";
import * as localStorage from 'nativescript-localstorage';
import { TNSRecorder, AudioRecorderOptions } from 'nativescript-audio';
const fs = require( 'file-system' );

@Component({
    selector: "dashboard",
    moduleId: module.id,
    templateUrl: "./dashboard.component.html",
    styleUrls: ['../home/home.component.css']
})

export class DashboardComponent{
    router: Router;
    recorderOptions: AudioRecorderOptions = {
        filename: "/record",
        maxDuration: 400000,
    };
    token: string = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : null;
    recorder = new TNSRecorder();

    constructor(router: Router){
        this.router = router;
    }
    
    startRecording(){
            let audioPath = fs.knownFolders.currentApp().getFolder( "audio" );
            this.recorderOptions.filename = audioPath.path + '/recording.mp3'
            this.recorder.start(this.recorderOptions);
    }

    goStart(){
        localStorage.clear();
        this.router.navigate(["/"]);
    }
}