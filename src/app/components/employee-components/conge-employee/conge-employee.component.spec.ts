import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeEmployeeComponent } from './conge-employee.component';

describe('CongeEmployeeComponent', () => {
  let component: CongeEmployeeComponent;
  let fixture: ComponentFixture<CongeEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CongeEmployeeComponent]
    });
    fixture = TestBed.createComponent(CongeEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
