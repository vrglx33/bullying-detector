import { Injectable } from '@angular/core';
import { Users } from './users.mock';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

    getEmailType(email){
        let users = Users
            .filter(
                user => user.parentEmail.toLowerCase() === email.value.toLowerCase()
                );
        
        if(users.length){
            return { 
                user: users[0], 
                isParent: true
            };
        }

        users = Users
            .filter(
                user => user.childEmail === email.value
                );

        if(users.length){
            return { 
                user: users[0], 
                isParent: false
            };
        }

        return { 
            isParent: false
        };
    }
}