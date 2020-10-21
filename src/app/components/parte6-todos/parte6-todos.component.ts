import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parte6-todos',
  templateUrl: './parte6-todos.component.html',
  styleUrls: ['./parte6-todos.component.scss']
})
export class Parte6TodosComponent implements OnInit {

  constructor(
    private _http: HttpClient
  ) { }

    api_url = 'https://jsonplaceholder.typicode.com/todos';

  ngOnInit(): void {
    this._http.get(this.api_url).subscribe((todo: any[]) => this.todos = todo);
    //this._http.get('https://jsonplaceholder.typicode.com/todos').subscribe((datos: any[]) => this.todos = datos);
  }
  
  todos = [];

}
