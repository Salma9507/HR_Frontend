import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { User } from "../models/user";



@Injectable({
    providedIn: 'root'
  })

  export class UserService {


  
    constructor(private http: HttpClient, private _snackbar: MatSnackBar) { }
  
    public getUser(id: any) {
      console.log("this is id ="+ id)
      return this.http.get<any>("http://localhost:8080/user/"+ id);
    }
  
  
    public getUserAvatar(id: number){
      return this.http.get("http://localhost:8080/avatar/"+ id);
    }
  
    public getbudget(id: number){
      return this.http.get("http://localhost:8080/bu/"+ id);
    }
  
   
  
  
  
    /*public getUserAvatar(id: number){
      return this.http.get(`${environment.baseURL}/avatar/${id}`);
    }*/
  
    toastMessage(message: string){
      this._snackbar.open(message, 'Close', {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
       })
    }
    updatePassword( email: String, oldPass: String, newPass: String ) {
      const addBody = {
        'email': email,
        'oldPass': oldPass,
        'newPass': newPass
      } ;
  
      return  this.http.post<User>("http://localhost:8080/updatePassword", addBody);
    }
  
    updateUsername( email: String, username: String ) {
      const addInfo = {
        'email': email,
        'username': username
        
      } ;
  
      return  this.http.post<User>("http://localhost:8080/updateUsername", addInfo);
    }
  
  
    
  
  }