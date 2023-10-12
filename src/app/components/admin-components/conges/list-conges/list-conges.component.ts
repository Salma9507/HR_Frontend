import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Conge } from 'src/app/models/conge';
import { CongeService } from 'src/app/services/conge.service';

@Component({
  selector: 'app-list-conges',
  templateUrl: './list-conges.component.html',
  styleUrls: ['./list-conges.component.css']
})
export class ListCongesComponent  implements OnInit{



  isPopupOpened = false;
  conge : Conge = new Conge();
  conges : any;
  constructor(private congeService:CongeService,private dialog: MatDialog) { }

  ngOnInit() {
    this.getConges();
  }

  getConges(){
    this.congeService.getCongesList().subscribe(
      response => {
        this.conges = response
      console.log(response)}
     );
     
  }

  

  onAcceptConge(id : any) {
    console.log(id+"hell");
    this.congeService.acceptConge(id)
    .subscribe(  data => {
      alert("Holiday accepted");
    });
  };

  onRefuseConge(id : any) {
    this.congeService.refuseConge(id)
    .subscribe(  data => {
      alert("Holiday refused");
    });
  };

  onDeleteConge(id : any){
    this.congeService.deleteConge(id)
    .subscribe(  () => {
      alert("Holiday deleted successfully");
    });
  }



}
