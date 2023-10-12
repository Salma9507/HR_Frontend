import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfoEmployeeComponent } from './update-info-employee.component';

describe('UpdateInfoEmployeeComponent', () => {
  let component: UpdateInfoEmployeeComponent;
  let fixture: ComponentFixture<UpdateInfoEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInfoEmployeeComponent]
    });
    fixture = TestBed.createComponent(UpdateInfoEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
