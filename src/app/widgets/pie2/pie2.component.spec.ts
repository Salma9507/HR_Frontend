import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pie2Component } from './pie2.component';

describe('Pie2Component', () => {
  let component: Pie2Component;
  let fixture: ComponentFixture<Pie2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pie2Component]
    });
    fixture = TestBed.createComponent(Pie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
