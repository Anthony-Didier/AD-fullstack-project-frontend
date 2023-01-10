import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public createUser(user: User): Observable<Object> {
    return this.http.post(`${this.usersUrl}`, user);
  }

  public findUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  public updateUser(id: number, user: User): Observable<Object> {
    return this.http.put(`${this.usersUrl}/${id}`, user);
  }

  public deleteUser(id: number): Observable<Object> {
    return this.http.delete(`${this.usersUrl}/${id}`);
  }
}
