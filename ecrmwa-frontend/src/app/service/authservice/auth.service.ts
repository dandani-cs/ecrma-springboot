import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  backendUrl: string

  constructor(private http: HttpClient) { 
    this.backendUrl = 'http://localhost:18080/api'
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.backendUrl + '/users/show');
  }

  public authenticateUser(user: User): Observable<User> {
    return this.http.post<User>(this.backendUrl + '/users/login', user);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(this.backendUrl + '/users/add', user);
  }

  public findExisting(email: string): Observable<User> {
    let params = new HttpParams();
    params = params.append('email', email);
    return this.http.get<User>(this.backendUrl + '/users/search-email/', {params : params});
  }

  public logoutUser(uuid: string): Observable<User> {
    return this.http.post<User>(this.backendUrl + '/users/logout', uuid);
  }
}
