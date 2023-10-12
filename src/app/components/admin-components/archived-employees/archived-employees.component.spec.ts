import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedEmployeesComponent } from './archived-employees.component';

describe('ArchivedEmployeesComponent', () => {
  let component: ArchivedEmployeesComponent;
  let fixture: ComponentFixture<ArchivedEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivedEmployeesComponent]
    });
    fixture = TestBed.createComponent(ArchivedEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
