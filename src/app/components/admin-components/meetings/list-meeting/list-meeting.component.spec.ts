import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMeetingComponent } from './list-meeting.component';

describe('ListMeetingComponent', () => {
  let component: ListMeetingComponent;
  let fixture: ComponentFixture<ListMeetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMeetingComponent]
    });
    fixture = TestBed.createComponent(ListMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
