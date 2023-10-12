import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Meeting } from 'src/app/models/meeting';
import { MeetingService } from 'src/app/services/meeting.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {


  meeting: Meeting = new Meeting();

  constructor(
    public dialogRef: MatDialogRef<MeetingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Meeting,
    private meetingService: MeetingService) { }

  ngOnInit() {
    if(this.data !== null){
      this.meeting = this.data;
    }
  }







  onSubmit() {
    this.onCreateMeeting();
  }

 onCreateMeeting(): void {
    this.meetingService.onCreateMeeting(this.meeting)
      .subscribe(() => {
        this.onClose(this.meeting)
      });
  }

  onClose(value: any) {
    this.dialogRef.close(value);
  }




}

