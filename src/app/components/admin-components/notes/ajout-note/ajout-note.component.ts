import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PostPayload } from 'src/app/models/post-payload';
import { NoteinterneService } from 'src/app/services/noteinterne.service';

@Component({
  selector: 'app-ajout-note',
  templateUrl: './ajout-note.component.html',
  styleUrls: ['./ajout-note.component.css']
})
export class AjoutNoteComponent implements OnInit {


   
  addPostForm:any;
  //FormGroup
  postPayload: PostPayload;
  title = new FormControl('');
  body = new FormControl('');

  constructor(public dialogRef:MatDialogRef<AjoutNoteComponent>,private addpostService: NoteinterneService, private router: Router) {
    this.addPostForm = new FormGroup({
      title: this.title,
      body: this.body
    });
    this.postPayload = {
      id: '',
      content: '',
      title: '',
      username: ''
    }
  }

  ngOnInit() {
  }

  onSubmit(){
    this.addPost();
    this.onClose();
  }

  addPost() {
    this.postPayload.content = this.addPostForm.get('body').value;
    this.postPayload.title = this.addPostForm.get('title').value;
    this.addpostService.addPost(this.postPayload).subscribe({
     next:  (data)  => 
    this.router.navigate(['/notesInternes'])
    , error : (error)=> 
      console.log('Failure Response'),
    });
  }


  onClose(){
    this.dialogRef.close();
  }
}
