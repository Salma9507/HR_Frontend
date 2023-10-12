import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Presence } from 'src/app/models/presence';
import { PresenceService } from 'src/app/services/presence.service';

@Component({
  selector: 'app-timetracking',
  templateUrl: './timetracking.component.html',
  styleUrls: ['./timetracking.component.css']
})
export class TimetrackingComponent implements OnInit{

  //presence : Presence = new Presence();
 // presences:Presence[];
  //constructor(private dialog: MatDialog, private presenceService:PresenceService) { }

  ngOnInit() {
   // this.refreshData();
  }

 

 /* onAddPresence():void {
    this.presenceService.createPresence(this.presence)
    .subscribe( data => {
      alert("Presence noted");
    });
  }


  refreshData(){
    this.presenceService.getPresences()
    .subscribe(
      response => {
        this.presences = response; }
     );
  }

 */

}
