import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceCalenderComponent } from './presence-calender.component';

describe('PresenceCalenderComponent', () => {
  let component: PresenceCalenderComponent;
  let fixture: ComponentFixture<PresenceCalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresenceCalenderComponent]
    });
    fixture = TestBed.createComponent(PresenceCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
