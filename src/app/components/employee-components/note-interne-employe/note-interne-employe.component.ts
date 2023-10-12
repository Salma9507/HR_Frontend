import { Component, OnInit } from '@angular/core';
import { NoteInterne } from 'src/app/models/noteInterne';
import { NoteinterneService } from 'src/app/services/noteinterne.service';

@Component({
  selector: 'app-note-interne-employe',
  templateUrl: './note-interne-employe.component.html',
  styleUrls: ['./note-interne-employe.component.css']
})
export class NoteInterneEmployeComponent implements OnInit{


p :number; 
 noteInterne : NoteInterne = new NoteInterne();
  notesInternes:NoteInterne[];

  constructor(private noteInterneService:NoteinterneService) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData(){
    this.noteInterneService.getAllNoteIntern()
    .subscribe(
      response => {
        this.notesInternes = response; }
     );
  }

}