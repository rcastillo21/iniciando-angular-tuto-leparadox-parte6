import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parte6Component } from './parte6.component';

describe('Parte6Component', () => {
  let component: Parte6Component;
  let fixture: ComponentFixture<Parte6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parte6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parte6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
