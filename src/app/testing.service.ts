import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private _http: HttpClient) { }

  public getOne(userId: number): Observable<User> {
    return this._http.get<User>(`/users/${userId}`);
  }

  public getAll() {
    return this._http.get<User>(`/users`);
  }

  public sum(a: number, b: number) {
    return a + b;
  }
}
