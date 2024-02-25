import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor( private http:  HttpClient ) { }


  createUser(userData:User){
   return this.http.post<User>('http://localhost:3000/users',userData);
  }

  updateUser(userId:number,userData:User){
  return  this.http.post<User>('localhost:3000/users',userData)
  }

  getUserById (userId:number){
    return this.http.get<User>(`http://localhost:3000/users/${userId}`);
  }

  getUsers() :Observable<User>{

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
    return this.http.get<User>('http://localhost:3000/users')
        // return this.http.get<User>('./assets/database.json')

  }

  deleteUser(userId:number){
// return this.http.delete<User>(`./assets/database.json/users/${userId}`)
  }
}
