import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../components/other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient
  ) { }

  api_url: string = 'https://jsonplaceholder.typicode.com/users';

  getLista(): Observable<User[]>{
    return this._http.get<User[]>(this.api_url)
  };
}
