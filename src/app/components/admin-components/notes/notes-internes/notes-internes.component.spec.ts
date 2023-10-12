import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesInternesComponent } from './notes-internes.component';

describe('NotesInternesComponent', () => {
  let component: NotesInternesComponent;
  let fixture: ComponentFixture<NotesInternesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesInternesComponent]
    });
    fixture = TestBed.createComponent(NotesInternesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
