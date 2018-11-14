import { Injectable } from '@angular/core';
import * as localStorage from 'nativescript-localstorage';

@Injectable()
export class AuthService {
  public isAuthenticated(): boolean {
    return localStorage.getItem("jwtToken") ? true : false;
  }
}