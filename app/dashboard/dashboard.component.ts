import { Component } from "@angular/core";
import { Router } from "@angular/router";
import * as localStorage from 'nativescript-localstorage';
import { SpeechRecognitionTranscription, SpeechRecognition } from "nativescript-speech-recognition";
import { DashboardService } from "./dashboard.service";
const fs = require( 'file-system' );

@Component({
    selector: "dashboard",
    moduleId: module.id,
    templateUrl: "./dashboard.component.html",
    styleUrls: ['../home/home.component.css']
})

export class DashboardComponent{
    private speechRecognition  = new SpeechRecognition();
    transcription: string;
    router: Router;
    token: string = localStorage.getItem('jwtToken') ? localStorage.getItem('jwtToken') : null;
    isRecording = false;
    dashboardService: DashboardService;
    textToReview: string = "";
    needReview= false;

    constructor(
        router: Router,
        dashboardService: DashboardService
        ){
        this.dashboardService = dashboardService;
        this.router = router;
    }

    public checkAvailability(): void {
        this.speechRecognition.available().then((available: boolean)=>{
            console.log(available ? "YES!" : "NO");
            this.speechRecognition.requestPermission().then((granted: boolean) => {
            console.log("Granted? " + granted);
            });
        });
        
      }

    startRecording(){
        this.isRecording = true;
        this.speechRecognition.startListening(
            {
              // optional, uses the device locale by default
              locale: "en-US",
              // set to true to get results back continuously
              returnPartialResults: true,
              // this callback will be invoked repeatedly during recognition
              onResult: (transcription: SpeechRecognitionTranscription) => {
                this.transcription = transcription.text;
                console.log(`User said: ${transcription.text}`);
                console.log(`User finished?: ${transcription.finished}`);
                this.isRecording = !transcription.finished;
                this.dashboardService.moderateContent(transcription.text).then((response) => {
                    if(response.Classification && response.Classification.ReviewRecommended){
                        this.textToReview = transcription.text;
                    }
                });
                if(transcription.finished){
                    this.isRecording = false;
                }
              },
              onError: (error: string | number) => {
                // because of the way iOS and Android differ, this is either:
                // - iOS: A 'string', describing the issue. 
                // - Android: A 'number', referencing an 'ERROR_*' constant from https://developer.android.com/reference/android/speech/SpeechRecognizer.
                //            If that code is either 6 or 7 you may want to restart listening.
              }
            }
          ).then(
            (started: boolean) => { console.log(`started listening`) },
            (errorMessage: string) => { console.log(`Error: ${errorMessage}`); }
          ).catch((error: string | number) => {
              console.log(error);
            // same as the 'onError' handler, but this may not return if the error occurs after listening has successfully started (because that resolves the promise,
            // hence the' onError' handler was created.
          });
    }
    stopRecording(){
        this.isRecording = false;
        this.speechRecognition.stopListening().then(
            () => { console.log(`stopped listening`) },
            (errorMessage: string) => { console.log(`Stop error: ${errorMessage}`); }
          );
    }
    goStart(){
        localStorage.clear();
        this.router.navigate(["/"]);
    }
}