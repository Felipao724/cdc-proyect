import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from '../models/patient';
import { PatientsService } from '../services/patient.service';



@Component({
  selector: 'app-client-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements AfterViewInit {

  get patients() {
    return this.patientsService.patients;
  }
  
  displayedColumns: string[] = ['nombre', 'estado', 'detalles'];
  dataSource = new MatTableDataSource<Patient>(this.patients);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor( private patientsService: PatientsService) {
    console.log(this.dataSource.data);
    console.log(this.patients);
  }
}
