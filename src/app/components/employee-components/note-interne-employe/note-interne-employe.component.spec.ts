import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteInterneEmployeComponent } from './note-interne-employe.component';

describe('NoteInterneEmployeComponent', () => {
  let component: NoteInterneEmployeComponent;
  let fixture: ComponentFixture<NoteInterneEmployeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteInterneEmployeComponent]
    });
    fixture = TestBed.createComponent(NoteInterneEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
