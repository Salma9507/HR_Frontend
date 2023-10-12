import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Conge } from 'src/app/models/conge';
import { CongeService } from 'src/app/services/conge.service';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent  implements OnInit {



  conge: Conge = new Conge();

  constructor(public dialogRef: MatDialogRef<AcceptComponent>, private congeService:CongeService) { }

  ngOnInit() {
  }

  onSubmit(){
  
    this.onAcceptConge();
    this.onClose();
   
    }
  
    onAcceptConge():void {
      this.congeService.acceptConge(this.conge.idCong)
      .subscribe(  data => {
        alert("Holiday accepted");
      });
    };
  
    onClose(){
     this.dialogRef.close();
    }

}
