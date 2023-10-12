import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conge } from 'src/app/models/conge';
import { CongeService } from 'src/app/services/conge.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css']
})
export class DemandeCongeComponent implements OnInit {

 conge: Conge = new Conge();
  id : number;

constructor (private tokenStorageService : TokenStorageService, private userService : UserService, private congeService : CongeService,private router:Router) {}

 ngOnInit() {
    const user = this.tokenStorageService.getUser();
    this.id = user.id;
  }

 createDemandeConge():void {
    this.congeService.createDemandeConge(this.conge,this.id)
    .subscribe( 
     { next:  (data) => 
     {this.userService.toastMessage("Demand created successfully"),
      this.router.navigate(['/congeEmployee']);},
    error:  (error) => {
      this.userService.toastMessage("failed action")
  } }
  );
}
}
