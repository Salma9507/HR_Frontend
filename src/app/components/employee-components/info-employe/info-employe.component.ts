import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Employe } from 'src/app/models/employe';
import { User } from 'src/app/models/user';
import { EmployeService } from 'src/app/services/employe.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-info-employe',
  templateUrl: './info-employe.component.html',
  styleUrls: ['./info-employe.component.css']
})
export class InfoEmployeComponent implements OnInit{


 id: any ;
  user: User = new User();
  employe : Employe = new Employe();
  constructor(private token: TokenStorageService,private userService:UserService,
    private route: ActivatedRoute,private employeService:EmployeService,private router:Router) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    this.getUser();
      
    });
  }

  getUser() {
   
    this.userService.getUser(this.id).subscribe(
      response => {
         console.log("hahahah")
         console.log(response);
        this.user = response ;
        this.employe = response;
       // this.employe.idUser = id;
     }
    );
  //  console.log(this.employe.nom+"eee");
  }


  updateUser(employe: Employe){  
    this.employeService.setter(employe);
    this.router.navigate(['/updateInfoEmploye']);
  }



}