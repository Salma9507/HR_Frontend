import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/models/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-bilan-conges',
  templateUrl: './bilan-conges.component.html',
  styleUrls: ['./bilan-conges.component.css']
})
export class BilanCongesComponent  implements OnInit {

  public searchText: Employe['prenom'];
  employe : Employe = new Employe();
  id : number; 
  employees: Employe[];
  p : number=1;
  constructor(private employeService:EmployeService,private router:Router) { }

  ngOnInit() {
    this.getEmployees();
    
  }

  getEmployees(){
    this.employeService.getEmployeesList().subscribe(
      response => {
        this.employees = response; }
     );
  }



}
