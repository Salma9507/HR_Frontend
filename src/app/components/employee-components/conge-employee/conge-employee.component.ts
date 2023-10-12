import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/app/models/conge';
import { Employe } from 'src/app/models/employe';
import { User } from 'src/app/models/user';
import { CongeService } from 'src/app/services/conge.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-conge-employee',
  templateUrl: './conge-employee.component.html',
  styleUrls: ['./conge-employee.component.css']
})
export class CongeEmployeeComponent implements OnInit {

  conge: Conge = new Conge();
  id:number;
  conges:Conge[];
  user1: User = new User();
  employe : Employe = new Employe();
  constructor(private congeService:CongeService,private userService:UserService,private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    const user = this.tokenStorageService.getUser();
    this.id = user.id;
    this.getCongesOfUser();
    this.getUser();
  }

  getCongesOfUser(){
    this.congeService.getCongesOfUser(this.id).subscribe(
      response => {
        this.conges = response; }
     );
  }

  getUser() {
   
    this.userService.getUser(this.id).subscribe(
      response => {
        this.user1= response ;
        this.employe = response;
      
     }
    );
 
  }

}
