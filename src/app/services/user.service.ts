import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor( private http:  HttpClient ) { }

  createUser(userData:User){
   return this.http.post<User>('localhost:3000/users',userData);

  }

  updateUser(userId:number,userData:User){
  return  this.http.post<User>('localhost:3000/users',userData)
  }

  getUserById(userId:number){
    return this.http.post<User>('localhost:3000/users',userId)
  }
  getUsers(){
    // return this.http.get<User>('localhost:3000/users')
        return this.http.get<User>('./assets/database.json')

  }
}
