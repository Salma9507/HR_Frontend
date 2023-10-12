import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceAdminComponent } from './presence-admin.component';

describe('PresenceAdminComponent', () => {
  let component: PresenceAdminComponent;
  let fixture: ComponentFixture<PresenceAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresenceAdminComponent]
    });
    fixture = TestBed.createComponent(PresenceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
