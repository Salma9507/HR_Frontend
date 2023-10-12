import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NoteInterne } from 'src/app/models/noteInterne';
import { NoteinterneService } from 'src/app/services/noteinterne.service';
import { AjoutNoteComponent } from '../ajout-note/ajout-note.component';

@Component({
  selector: 'app-notes-internes',
  templateUrl: './notes-internes.component.html',
  styleUrls: ['./notes-internes.component.css']
})
export class NotesInternesComponent  implements OnInit{
 p : number; 
isPopupOpened = true;
  noteInterne : NoteInterne = new NoteInterne();
  notesInternes:NoteInterne[];
  constructor(private dialog: MatDialog, private noteInterneService:NoteinterneService,
    private router:Router) { }

  ngOnInit() {
    this.refreshData();
  }

 /* onAddNote(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true ; 
    dialogConfig.autoFocus = true ; 
    dialogConfig.width = "60%";
    dialogConfig.width = "800px";
    let dialogRef = this.dialog.open(AjoutNoteComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
      this.refreshData();
    });
  }*/



  /********************************** */
  onAddNote() {
    this.openNoteDialog(null)
   }
 
   openNoteDialog(data?: any){
     const dialogRef = this.dialog.open(AjoutNoteComponent, {
       disableClose: true,
       autoFocus : true ,
       width : "65%",
       data: data
     } );
 
     dialogRef.afterClosed().subscribe(result => {
       if(result && data == null){
         this.notesInternes.push(result);
        
       }
       
       // this.refreshData();
     });
   }
  

  refreshData(){
    this.noteInterneService.getAllNoteIntern()
    .subscribe(
      response => {
        this.notesInternes = response; }
     );
  }

  deleteNote(noteInterne:NoteInterne): void {
    this.noteInterneService.deleteNoteById(noteInterne.id)
      .subscribe( data => {
        this.notesInternes = this.notesInternes.filter(u => u !== noteInterne);
      })
    
  }

  updateNote(noteInterne: NoteInterne){  
    this.noteInterneService.setter(noteInterne);
    this.router.navigate(['/updateNote']);

  }

  


}
