import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../other/interfaces';

@Component({
  selector: 'app-parte6',
  templateUrl: './parte6.component.html',
  styleUrls: ['./parte6.component.scss']
})
export class Parte6Component implements OnInit {

  constructor(
    private _user: UserService
  ) {}

  ngOnInit() {
    this._user.getLista().subscribe(datos => this.datos = datos);

  }
  datos: User[] = [];

}
