import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from 'src/app/models/conge';
import { Employe } from 'src/app/models/employe';
import { EmployeService } from 'src/app/services/employe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil-employe',
  templateUrl: './profil-employe.component.html',
  styleUrls: ['./profil-employe.component.css']
})
export class ProfilEmployeComponent implements OnInit {

  id: number ;
  private sub: any ; 
  conge: Conge  = new Conge();
  employe: Employe = new Employe();
 
  constructor(private employeService:EmployeService,
    private userService:UserService, private route: ActivatedRoute,
    private router:Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getEmploye();
    console.log(this.id+"oooo");
  }

  getEmploye() {
    console.log(this.id);
    this.employeService.getEmploye(this.id).subscribe(
      response => {
        this.employe = response ; }
    );
  }

  /*generateReport(){
    this.employeService.generateReport(this.id).subscribe(
      (employe) => {
        this.userService.toastMessage("Informations are successfully exported")
        },(error) => {
          this.userService.toastMessage("Informations are successfully exported")
        }
    );
  }
*/
 

  updatePhoto(employe: Employe){  
    this.employeService.setter(employe);
    this.router.navigate(['/updatePhoto']);

  }


}
