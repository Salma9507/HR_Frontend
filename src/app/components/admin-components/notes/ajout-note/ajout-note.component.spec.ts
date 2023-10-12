import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutNoteComponent } from './ajout-note.component';

describe('AjoutNoteComponent', () => {
  let component: AjoutNoteComponent;
  let fixture: ComponentFixture<AjoutNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutNoteComponent]
    });
    fixture = TestBed.createComponent(AjoutNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
