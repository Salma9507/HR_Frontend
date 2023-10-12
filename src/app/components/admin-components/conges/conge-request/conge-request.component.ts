import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Conge } from 'src/app/models/conge';
import { Employe } from 'src/app/models/employe';
import { CongeService } from 'src/app/services/conge.service';
import { EmployeService } from 'src/app/services/employe.service';
import { UserService } from 'src/app/services/user.service';




@Component({
  selector: 'app-conge-request',
  templateUrl: './conge-request.component.html',
  styleUrls: ['./conge-request.component.css']
})
export class CongeRequestComponent implements OnInit {
  showModal1 = false;
  showModal2 = false;

 id:any;
 conge : Conge = new Conge();
 employe : Employe = new Employe();
  constructor( private route: ActivatedRoute,private employeService:EmployeService,
    private congeService: CongeService, private userService: UserService,private modalService : NgbModal) { }
  
  
  
  

 ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getConge();
  }

 
  




  getConge(){
    console.log(this.id);
    this.congeService.getConge(this.id).subscribe(
      response => {
        this.conge = response ; }
    );
  }



onAcceptConge() {
    
  this.congeService.acceptConge(this.id)
  .subscribe({  
    next : (conge) => {
    this.userService.toastMessage("Holiday accepted")
  },error : (error) => {
    this.userService.toastMessage("failed action")
  }
}
  );
};


  onRefuseConge() {
    this.congeService.refuseConge(this.id)
    .subscribe({  
     next :  (conge) => this.userService.toastMessage("Holiday refused")
    ,error : (error) =>
      this.userService.toastMessage("failed action")
    }
    );
  };





  
}
