import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser = new BehaviorSubject<User | null>(null);
  isConnected = new BehaviorSubject<boolean>(false);

  constructor() { }


  getToken() {
    return localStorage.getItem('token')
  }
}
