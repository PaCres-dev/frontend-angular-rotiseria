import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  	constructor(private _http: HttpClient) { }

  	sendMessage(body) {
    	return this._http.post('localhost:3000/api/contact', body);
  	}

}
