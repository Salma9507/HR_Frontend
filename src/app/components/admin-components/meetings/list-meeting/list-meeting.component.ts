import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Meeting } from 'src/app/models/meeting';
import { MeetingService } from 'src/app/services/meeting.service';
import { MeetingComponent } from '../meeting/meeting.component';

@Component({
  selector: 'app-list-meeting',
  templateUrl: './list-meeting.component.html',
  styleUrls: ['./list-meeting.component.css']
})
export class ListMeetingComponent implements OnInit{



  meeting : Meeting = new Meeting() ;
  meetings : Meeting[] ;
  
  constructor(private dialog:MatDialog, private meetingService:MeetingService
    ,private router:Router) { }

  ngOnInit() {
    this.getAllmeetings();
  }

  onAddNote() {
   this.openNoteDialog(null)
  }

  openNoteDialog(data?: any){
    const dialogRef = this.dialog.open(MeetingComponent, {
      disableClose: true,
      autoFocus : true ,
      width : "50%",
      data: data
    } );

    dialogRef.afterClosed().subscribe(result => {
      if(result && data == null){
        this.meetings.push(result);
      }
   
    });
  }


  getAllmeetings() {
    this.meetingService.getAllmeetings()
    .subscribe(
      response => {
        this.meetings = response; }
     );
  }

  updateMeeting(meeting: any) {  
    this.openNoteDialog(meeting);
     //this.meetingService.setter(meeting);
   // this.router.navigate(['/updateMeeting']);
  }

 deleteMeeting(meeting:Meeting): void {
    this.meetingService.deleteMeetingById(meeting.idMeeting)
      .subscribe( data => {
        this.meetings = this.meetings.filter(u => u !== meeting);
      })
    
  }

 








}
