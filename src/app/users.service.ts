import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<object> {
    return this.http.get('https://jsonplaceholder.cypress.io/users');
  }

  viewUser(id: number) {
    return this.http.get('https://jsonplaceholder.cypress.io/users/' + id);
  }
}
