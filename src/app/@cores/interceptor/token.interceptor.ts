import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../services/data/data.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private dataService: DataService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.dataService.getToken();

    if(token) {
      request = request.clone({
        setHeaders: { Authorization: `Authorization ${token}` }
      })
    }

    return next.handle(request);
  }
}
