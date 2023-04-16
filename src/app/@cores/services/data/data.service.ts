import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser = new BehaviorSubject<User | null>(null);

  constructor() { }
}
