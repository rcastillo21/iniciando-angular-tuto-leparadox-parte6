import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../components/other/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  api_url: string = '';

  login(): Observable<LoginResponse>{
    
  }
}
