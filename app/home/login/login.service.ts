import { Injectable } from '@angular/core';
import { Users } from './users.mock';
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
        return this.http.get("http://localhost:8080/users/verify/mail?"+email);
    }
}