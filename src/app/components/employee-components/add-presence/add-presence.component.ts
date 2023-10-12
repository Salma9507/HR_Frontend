import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Presence } from 'src/app/models/presence';
import { PresenceService } from 'src/app/services/presence.service';

@Component({
  selector: 'app-add-presence',
  templateUrl: './add-presence.component.html',
  styleUrls: ['./add-presence.component.css']
})
export class AddPresenceComponent implements OnInit {

 // presence:Presence = new Presence();
 // constructor(public dialogRef: MatDialogRef<AddPresenceComponent>,private presenceService:PresenceService) { }

  ngOnInit() {
  }

  /*onSubmit(){
    this.onCreateNoteInterne();
    this.onClose();
  }

  onCreateNoteInterne():void {
    
    this.presenceService.createPresence(this.presence)
    .subscribe(  data => {
      alert("note created successfully");
    } );
  };

  onClose(){
    this.dialogRef.close();
  }
*/
}
