import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Presence } from "../models/presence";
import { Evenement } from "../models/event";
import { Injectable } from "@angular/core";



@Injectable({
  providedIn: 'root'
})
export class PresenceService {

 presence:Presence = new Presence();
  evenement: Evenement = new Evenement();
    
    constructor(private httpClient:HttpClient) { }
   
  getPresences():Observable<any> {
    return this.httpClient.get<any> ("http://localhost:8080/presences");
  }
  
  public createPresence(presence: any)
  {
  
    console.log(presence);
    return this.httpClient.post<any>("http://localhost:8080/createPresence",presence);
  
  }
  
  public addEvent(evenement:Evenement){
    return this.httpClient.post("http://localhost:8080/event",evenement);
  }
  
 public updateEvent(evenement:Evenement){
    return this.httpClient.put("http://localhost:8080/event",evenement);
 }
  
  
  public addPresence(presence:Presence,id:number){
 
    console.log("add prescense in service")
    console.log(presence)
    return this.httpClient.post<any>("http://localhost:8080/createPresence?id="+id,presence);
  
  }
  
  public getPresence (id:number){
    return this.httpClient.get<any>("http://localhost:8080/getPresence?id="+id);
  }
  }