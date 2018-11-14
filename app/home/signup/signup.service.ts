import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../login/user.interface';
import { Users } from '../login/users.mock';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
    private http : HttpClient;
    constructor(http: HttpClient){
        this.http = http;
    }
    registerUser(user) {
        return fetch("http://127.0.0.1:8080/users/sign-up", { 
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          }, 
          body: JSON.stringify(user),
        });
    }
} 