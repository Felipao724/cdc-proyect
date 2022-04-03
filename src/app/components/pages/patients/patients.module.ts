import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientsService } from './services/patient.service';




@NgModule({
  declarations: [
  PatientDetailsComponent,
  PatientListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    PatientDetailsComponent,
    PatientListComponent,
  ],
  providers: [
    PatientsService,
  ]
})
export class PatientModule { }
