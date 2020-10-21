import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { Parte6Component } from './components/parte6/parte6.component';
import { Parte6TodosComponent } from './components/parte6-todos/parte6-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    Parte6Component,
    Parte6TodosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
