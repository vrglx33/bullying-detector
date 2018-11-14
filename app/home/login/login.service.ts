import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
    private http : HttpClient;
    constructor(http: HttpClient){
        this.http = http;
    }
    getEmailType(email){
        return fetch("http://127.0.0.1:8080/users/verify/mail?email="+email);
    }
    login(user){
        return fetch("http://127.0.0.1:8080/login",{ 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(user),
          });
    }
}