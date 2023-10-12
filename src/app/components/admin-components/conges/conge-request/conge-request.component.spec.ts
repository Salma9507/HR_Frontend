import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeRequestComponent } from './conge-request.component';

describe('CongeRequestComponent', () => {
  let component: CongeRequestComponent;
  let fixture: ComponentFixture<CongeRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CongeRequestComponent]
    });
    fixture = TestBed.createComponent(CongeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
