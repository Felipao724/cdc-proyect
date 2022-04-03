import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PatientDetailsComponent } from './components/pages/patients/patient-details/patient-details.component';
import { PatientListComponent } from './components/pages/patients/patient-list/patient-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'patient-list', component: PatientListComponent},
  {path: 'patient-details/:id', component: PatientDetailsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
