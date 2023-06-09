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

  refund(amount: number, pin: string): Observable<any> {
    return this.http.post<Observable<any>>(`${this.apiUrl}/depositFund`, {
      amount,
      pin
    })
  }

  getAllMyTransactions(): Observable<any> {
    return this.http.get<Observable<any>>(`${this.apiUrl}/transaction/getMyTransaction`);
  }

  transferMoney(receiverName: string, accountNumber: string, amount: number, description: string, pin: string): Observable<any> {
    return this.http.post<Observable<any>>(`${this.apiUrl}/transfer`, {
      receiverName,
      accountNumber,
      amount,
      description,
      pin
    })
  }
}

