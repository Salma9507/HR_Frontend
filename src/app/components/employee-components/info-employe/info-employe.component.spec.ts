import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEmployeComponent } from './info-employe.component';

describe('InfoEmployeComponent', () => {
  let component: InfoEmployeComponent;
  let fixture: ComponentFixture<InfoEmployeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoEmployeComponent]
    });
    fixture = TestBed.createComponent(InfoEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
