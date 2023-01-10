import { Injectable } from '@angular/core';
import { UserType } from './user-type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTypeServiceService {

  private userTypesUrl: string;

  constructor(private http: HttpClient) {
    this.userTypesUrl = 'http://localhost:8080/usertypes';
  }

  public findAllUserTypes(): Observable<UserType[]> {
    return this.http.get<UserType[]>(this.userTypesUrl);
  }

  public createUserType(userType: UserType): Observable<Object> {
    return this.http.post(`${this.userTypesUrl}`, userType);
  }

  public findUserTypeById(id: number): Observable<UserType> {
    return this.http.get<UserType>(`${this.userTypesUrl}/${id}`);
  }

  public updateUserType(id: number, userType: UserType): Observable<Object> {
    return this.http.put(`${this.userTypesUrl}/${id}`, userType);
  }

  public deleteUserType(id: number): Observable<Object> {
    return this.http.delete(`${this.userTypesUrl}/${id}`);
  }
}
