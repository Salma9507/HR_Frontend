import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/models/employe';
import { EmployeService } from 'src/app/services/employe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent  implements OnInit{
  public searchText: Employe['prenom'];
  employe : Employe = new Employe();
  id : number; 
  employees: Employe[];
  p : number=1;
  constructor(private employeService:EmployeService,private router:Router, 
    private userService: UserService) { }

  ngOnInit() {
    this.getEmployees();
    
  }

  getEmployees(){
    this.employeService.getActiveEmployees().subscribe(
      response => {
        this.employees = response; }
     );
  }

  deleteEmploye(employe:Employe): void {
    this.employeService.deleteEmployeById(employe.idUser)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== employe);

      })
    
  }

  /*archiveEmploye(employe:Employe) {
   
    this.employeService.archiveEmploye(employe.idUser)
    .subscribe( (employe) => {
      this.userService.toastMessage("Employee successfully archived")
      },(error) => {
        this.userService.toastMessage("Failed action")
      }
  ); 
    
  };*/

  archiveEmploye(employe:Employe) {
   
    this.employeService.archiveEmploye(employe.idUser)
    .subscribe({ next : (employe) => 
      this.userService.toastMessage("Employee successfully archived"),
      error : (error) => 
        this.userService.toastMessage("Failed action")
      }
  ); 
    
  };

 
  updateUser(employe: Employe){  
    this.employeService.setter(employe);
    this.router.navigate(['/updateEmploye']);

  }
  

  

}