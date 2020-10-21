import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { All } from '../components/other/interfaces';

@Injectable({
  providedIn: 'root'
})

export class AllService {

  constructor(
    private _http: HttpClient
  ) { }

  api_url = 'https://jsonplaceholder.typicode.com/todos';

  /* getLista(): Observable<All[]>{
    return this._http.get<All[]>(this.api_url)
  }; */
}
