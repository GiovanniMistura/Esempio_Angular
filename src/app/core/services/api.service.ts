import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.apiUrl; // prende l'url del db

  constructor(private http: HttpClient) { }


  // user api
  getUsers(){
    return this.http.get<any>(`${this.apiUrl}/users.json`);
  }

  getUser(id : string){
    return this.http.get<any>(`${this.apiUrl}/users/${id}.json`);
  }

  deleteUser(id : string){
    return this.http.delete<any>(`${this.apiUrl}/users/${id}.json`);
  }

  updateUser(params){
    if(params.id){
      return this.http.put<any>(`${this.apiUrl}/users/${params.id}.json`, params);
    } else {
      console.warn('Manca user ID')
    }
  }

  updatePartialUser(params){
    if(params.id){
      return this.http.patch<any>(`${this.apiUrl}/users/${params.id}.json`, params);
    } else {
      console.warn('Manca user ID')
    }
  }

  createUser(params){
    return this.http.post<any>(`${this.apiUrl}/users.json`, params);
  }

  //chat api
  getMessages() {
    return this.http.get(`${this.apiUrl}/messages.json`);
  }

  sendMessage(params) {
    return this.http.post<{name : string }>(`${this.apiUrl}/messages.json`, params);
  }

  // Alternativa
  // post(endpoint, params){
  //   return this.http.post(endpoint, params)
  // }
}
