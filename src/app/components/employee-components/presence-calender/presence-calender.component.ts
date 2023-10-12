
















import { Component, ElementRef, OnInit, ViewChild, forwardRef } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarOptions,EventInput } from '@fullcalendar/core';
import { PresenceService } from 'src/app/services/presence.service';
import { Evenement } from 'src/app/models/event';
import { Presence } from 'src/app/models/presence';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FullCalendarComponent } from '@fullcalendar/angular';


@Component({
  selector: 'app-presence-calender',
  templateUrl: './presence-calender.component.html',
  styleUrls: ['./presence-calender.component.css']
})
export class PresenceCalenderComponent implements OnInit {



  calendarOptions?: CalendarOptions;
  
  @ViewChild('fullcalendar') fullcalendar?: FullCalendarComponent;
 
  calendarEvents: EventInput[] = [];

  id: any ;
event: Evenement = new Evenement();
events: Evenement[] = [];
presence: Presence = new Presence();

 

  constructor(private route: ActivatedRoute,private presenceService: PresenceService) { }


  ngOnInit() {
   

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.getPresence(this.id);

   
    });

    this.calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      editable: true,
      
    };
  }


  dayRender(args: any) {

    console.log('dayRender event called');
    const cell: HTMLElement = args.el;
    cell.addEventListener('dblclick', (ev: MouseEvent) => {
      this.addEvent(args.date);
    });
  }

 

addEvent(date: any) {
  const title = prompt("Ajouter le nombre des heures de travail");

  if (title === null) {
  
    return;
  }

  if (title === '') {
    
    alert('Please enter a value for the number of hours.');
    return;
  }


  const numberOfHours = Number(title);

  if (isNaN(numberOfHours)) {

    alert('Please enter a valid number for the number of hours.');
    return;
  }

 
  const pres = new Presence();
  pres.nbrheures = numberOfHours;
  pres.day = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  
  this.addPresence(pres, this.id);

  this.calendarEvents = this.calendarEvents.concat({
    title: title,
    start: date,
  });
}
  addPresence(presence: Presence,id: number){
    this.presenceService.addPresence(presence,id).subscribe(
      response => {
        this.events = response; }
     );
  }

  getPresence(id: number){
    this.presenceService.getPresence(id).subscribe(
      response => {
        console.log(response);
     
        response.forEach((element:Presence) => {
        this.calendarEvents = this.calendarEvents.concat({
          title:""+element.nbrheures,
          start:element.day
        })  
        });
        
      }
     );
  }


}

