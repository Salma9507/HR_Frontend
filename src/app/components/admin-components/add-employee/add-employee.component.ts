import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/models/employe';
import { EmployeService } from 'src/app/services/employe.service';
import { UploadfileService } from 'src/app/services/uploadfile.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {



  user: Employe = new Employe();



  title = 'File-Upload-Save';
  
  

  public fileImage : File;
 


  constructor(private employeService:EmployeService,private uploadService: UploadfileService ) {}

  
 
  ngOnInit() {}

 

    selectFileImage(event : any){
      this.fileImage = event.target.files[0];
    }

    createEmploye():void {
      this.employeService.createEmploye(this.user,this.fileImage)
        .subscribe(  data => {
          alert("Employee added successfully");
        } );
      };

      
   
    

    


 }




