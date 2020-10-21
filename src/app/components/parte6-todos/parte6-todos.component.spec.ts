import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parte6TodosComponent } from './parte6-todos.component';

describe('Parte6TodosComponent', () => {
  let component: Parte6TodosComponent;
  let fixture: ComponentFixture<Parte6TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parte6TodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parte6TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
