import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private urlApi:string="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.urlApi);
  }
}
