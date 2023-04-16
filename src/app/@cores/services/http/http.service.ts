import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  register(name: string, username: string, pin: string): Observable<any> {
    return this.http.post<Observable<any>>(`${this.apiUrl}/register`, {
      name,
      username,
      pin
    });
  }

  login(username: string, pin: string): Observable<any> {
    return this.http.post<Observable<any>>(`${this.apiUrl}/login`, {
      username,
      pin
    });
  }
}
