import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
    private http : HttpClient;
    constructor(http: HttpClient){
        this.http = http;
    }
    registerUser(user) {
        return this.http.post("http://localhost:8080/sign-up", user);
    }
}