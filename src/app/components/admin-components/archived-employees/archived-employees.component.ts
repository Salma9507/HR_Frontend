import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/models/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-archived-employees',
  templateUrl: './archived-employees.component.html',
  styleUrls: ['./archived-employees.component.css']
})
export class ArchivedEmployeesComponent implements OnInit {
 
filterTerm! : string; 
  public searchText: Employe['prenom'];
  p : number=1;
  employees:Employe[];
  constructor(private employeService:EmployeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.employeService.getArchivedEmployees().subscribe(
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

}
