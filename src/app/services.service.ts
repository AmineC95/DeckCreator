import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserId } from '../models/users';
import Cards from './cards';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserId>{
    return this.http.get<UserId>('/api/users');
  }
  postUsers(users: UserId[]): Observable<void>{
    return this.http.post<void>('/api/users',users)
  }

  getCards(): Observable<Cards[]> {
    return this.http.get<Cards[]>('/api/cards')
  }
}
