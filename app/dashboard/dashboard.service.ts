import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
    moderateContent(content){
        return fetch("https://brazilsouth.api.cognitive.microsoft.com/contentmoderator/moderate/v1.0/ProcessText/Screen?classify=True",{ 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'text/plain',
                "Ocp-Apim-Subscription-Key": "0a871e190c9c448796ec32eb5a691d64"
            }, 
            body: content,
          }).then(response => response.json());
    }
}