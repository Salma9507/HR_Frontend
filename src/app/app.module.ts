import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
//import matcheckboxmodule from '@angular/material/checkbox'
import { MatDividerModule }from '@angular/material/divider'
import { FlatpickrModule } from 'angularx-flatpickr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEmployeeComponent } from './components/admin-components/add-employee/add-employee.component';
import { MatButtonModule } from '@angular/material/button' ; 
import { RouterModule } from '@angular/router';
import {AccumulationChartModule} from '@syncfusion/ej2-angular-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { Pie1Component } from './widgets/pie1/pie1.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Pie2Component } from './widgets/pie2/pie2.component';
import { HighchartsChartModule } from 'highcharts-angular';
//import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import {MatIconModule} from '@angular/material/icon';
import { LineComponent } from './widgets/line/line.component' ;
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { ArchivedEmployeesComponent } from './components/admin-components/archived-employees/archived-employees.component';
import { MeetingComponent } from './components/admin-components/meetings/meeting/meeting.component';



import { EmployeService } from './services/employe.service';
import { ListMeetingComponent } from './components/admin-components/meetings/list-meeting/list-meeting.component';
import { UpdateMeetingComponent } from './components/admin-components/meetings/update-meeting/update-meeting.component';
import { ListEmployeesComponent } from './components/admin-components/list-employees/list-employees.component';

import { CongeRequestComponent } from './components/admin-components/conges/conge-request/conge-request.component';
import { BilanCongesComponent } from './components/admin-components/conges/bilan-conges/bilan-conges.component';
import { ListCongesComponent } from './components/admin-components/conges/list-conges/list-conges.component';
import { AcceptComponent } from './components/admin-components/dialogs/accept/accept.component';
import { HolidayComponent } from './components/admin-components/holiday/holiday.component';
import { AjoutNoteComponent } from './components/admin-components/notes/ajout-note/ajout-note.component';
import { NotesInternesComponent } from './components/admin-components/notes/notes-internes/notes-internes.component';
import { UpdateNoteComponent } from './components/admin-components/notes/update-note/update-note.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FullCalendarModule } from '@fullcalendar/angular';
import {EditorModule} from '@tinymce/tinymce-angular';
import { InfoEmployeComponent } from './components/employee-components/info-employe/info-employe.component';
import { DemandeCongeComponent } from './components/employee-components/demande-conge/demande-conge.component';
import { NoteInterneEmployeComponent } from './components/employee-components/note-interne-employe/note-interne-employe.component';
import { CongeEmployeeComponent } from './components/employee-components/conge-employee/conge-employee.component';
import { ProfilEmployeComponent } from './components/admin-components/profil-employe/profil-employe.component';
import { UpdateProfilComponent } from './components/update-profil/update-profil.component';
import { PresenceCalenderComponent } from './components/employee-components/presence-calender/presence-calender.component';
import { TimetrackingComponent } from './components/employee-components/timetracking/timetracking.component';
import { AddPresenceComponent } from './components/employee-components/add-presence/add-presence.component';
import { PresenceAdminComponent } from './components/admin-components/presence-admin/presence-admin.component';
import { UpdateInfoEmployeeComponent } from './components/employee-components/update-info-employee/update-info-employee.component';
import { UpdateEmployeComponent } from './components/admin-components/update-employe/update-employe.component';
import { UpdatePhotoComponent } from './components/admin-components/update-photo/update-photo.component';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';






@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    LayoutComponent,
    AddEmployeeComponent,
    SidebarComponent,
   
    DashboardComponent,
    Pie1Component,
    Pie2Component,
    LineComponent,
    ArchivedEmployeesComponent,
    MeetingComponent,
    ListMeetingComponent,
    UpdateMeetingComponent,
    ListEmployeesComponent,
    BilanCongesComponent,
    CongeRequestComponent,
    ListCongesComponent,
    AcceptComponent,
    HolidayComponent,
    AjoutNoteComponent,
    NotesInternesComponent,
    UpdateNoteComponent,
    InfoEmployeComponent,
   
    DemandeCongeComponent,
    NoteInterneEmployeComponent,
    CongeEmployeeComponent,
    ProfilEmployeComponent,
    UpdateProfilComponent,
    PresenceCalenderComponent,
    TimetrackingComponent,
    AddPresenceComponent,
    PresenceAdminComponent,
    UpdateInfoEmployeeComponent,
    UpdateEmployeComponent,
    UpdatePhotoComponent,


  ],
  imports: [
    RouterModule,
    MatDialogModule,
    ScheduleModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    CommonModule,
    ModalModule,
    MatIconModule,
    NgbModalModule,
    NgbModule,
    FlatpickrModule.forRoot(),
   ModalModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    MatButtonModule,
    MatInputModule,
   
    MatToolbarModule,
   
    MatCheckboxModule,
   
    MatExpansionModule,

   FullCalendarModule,
   AccumulationChartModule,
    HighchartsChartModule,
   MatCardModule,
    MatDividerModule,
   FlexLayoutModule,
   EditorModule,
   MatSnackBarModule,
    NgxPaginationModule
  ],

  
   exports: [
    Pie1Component
  ],


  providers: [[EmployeService, { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],],
  bootstrap: [AppComponent,ListCongesComponent ]
  
  


})
export class AppModule { }
