import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEmployeeComponent } from './components/admin-components/add-employee/add-employee.component';
import { ArchivedEmployeesComponent } from './components/admin-components/archived-employees/archived-employees.component';

import { ListMeetingComponent } from './components/admin-components/meetings/list-meeting/list-meeting.component';
import { UpdateMeetingComponent } from './components/admin-components/meetings/update-meeting/update-meeting.component';
import { ListEmployeesComponent } from './components/admin-components/list-employees/list-employees.component';
import { BilanCongesComponent } from './components/admin-components/conges/bilan-conges/bilan-conges.component';
import { CongeRequestComponent } from './components/admin-components/conges/conge-request/conge-request.component';
import { ListCongesComponent } from './components/admin-components/conges/list-conges/list-conges.component';
import { UpdateNoteComponent } from './components/admin-components/notes/update-note/update-note.component';
import { NotesInternesComponent } from './components/admin-components/notes/notes-internes/notes-internes.component';
import { InfoEmployeComponent } from './components/employee-components/info-employe/info-employe.component';

import { NoteInterneEmployeComponent } from './components/employee-components/note-interne-employe/note-interne-employe.component';
import { DemandeCongeComponent } from './components/employee-components/demande-conge/demande-conge.component';
import { CongeEmployeeComponent } from './components/employee-components/conge-employee/conge-employee.component';
import { ProfilEmployeComponent } from './components/admin-components/profil-employe/profil-employe.component';
import { UpdateProfilComponent } from './components/update-profil/update-profil.component';
import { UpdateEmployeComponent } from './components/admin-components/update-employe/update-employe.component';
import { UpdatePhotoComponent } from './components/admin-components/update-photo/update-photo.component';
import { UpdateInfoEmployeeComponent } from './components/employee-components/update-info-employee/update-info-employee.component';
import { HolidayComponent } from './components/admin-components/holiday/holiday.component';
import { PresenceAdminComponent } from './components/admin-components/presence-admin/presence-admin.component';
import { PresenceCalenderComponent } from './components/employee-components/presence-calender/presence-calender.component';
import { TimetrackingComponent } from './components/employee-components/timetracking/timetracking.component';
import { AddPresenceComponent } from './components/employee-components/add-presence/add-presence.component';
import { MeetingComponent } from './components/admin-components/meetings/meeting/meeting.component';

const routes: Routes = [

  {
   
    path: '', component : LayoutComponent, children: [
      
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',component: HomeComponent},

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

]
},


{ path: '', component: SidebarComponent,children:[

 
  {path:'', redirectTo:'dashboard' , pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'profil', component: UpdateProfilComponent},


  { path: 'profilEmploye/:id', component: ProfilEmployeComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'info-employe/:id', component: InfoEmployeComponent },
  { path: 'archivedEmployes', component: ArchivedEmployeesComponent },
  { path: 'listEmployes', component: ListEmployeesComponent },
  { path: 'updateInfoEmploye', component: UpdateInfoEmployeeComponent },
  { path: 'updateEmploye', component: UpdateEmployeComponent },
{ path: 'updateMeeting', component: UpdateMeetingComponent},
  { path: 'updateEmploye', component: UpdateEmployeComponent },
  { path: 'updatePhoto', component: UpdatePhotoComponent },
{ path: 'meetings', component: ListMeetingComponent },
{path:'profil', component: UpdateProfilComponent},
{ path: 'congeRequest/:id', component: CongeRequestComponent },
{ path: 'bilan-conges', component: BilanCongesComponent },
{ path: 'list-conges', component: ListCongesComponent },
{ path: 'archivedEmployees', component: ArchivedEmployeesComponent },
{ path: 'demandeConge', component: DemandeCongeComponent },
{ path: 'updateNote', component: UpdateNoteComponent },
{ path: 'notesInternes', component: NotesInternesComponent },
{ path: 'holiday-calendar', component: HolidayComponent },
{ path: 'presence-calendar/:id', component: PresenceCalenderComponent },
{ path: 'presence', component: PresenceAdminComponent },
{ path: 'employeNotesInterne', component: NoteInterneEmployeComponent },
{ path: 'demandeConge', component: DemandeCongeComponent },
{ path: 'congeEmployee', component: CongeEmployeeComponent },
{ path: 'timetracking', component: TimetrackingComponent },
{ path: 'add-presence', component: AddPresenceComponent },
{ path: 'updateeMeeting', component: MeetingComponent},

]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
