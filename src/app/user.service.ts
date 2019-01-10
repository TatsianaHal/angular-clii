import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// декоратор @Injectable говорит о том, что у класса
// будут свои подключенные зависимости:
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    {name: 'Dasha'},
    {name: 'Slava'},
    {name: 'Katya'}
  ];

  constructor(private _http: HttpClient) { }

  public getAll() {
    // return this._http.get('https://jsonplaceholder.typicode.com/users');
    return this.users;
  }

  public remove(name: string) {
    return this.users = this.users.filter(
      user => user.name !== name
      );
  }

  public add(name: string) {
    this.users.push({ name });
  }
}
