import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }


  createUser(userData: User) {
    return this.http.post<User>('http://localhost:3000/users', userData);
  }

  updateUser(userId: number, userData: User) {
    return this.http.put<User>(`http://localhost:3000/users/${userId}`, userData)
  }

  getUserById(userId: number) {
    return this.http.get<User>(`http://localhost:3000/users/${userId}`);
  }

  getUsers(): Observable<User> {
    return this.http.get<User>('http://localhost:3000/users')
  }

  deleteUser(userId: number): Observable<User> {
    return this.http.delete<User>(`http://localhost:3000/users/${userId}`)
  }
}
