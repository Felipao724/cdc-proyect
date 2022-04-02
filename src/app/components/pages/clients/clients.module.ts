import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientListComponent } from './client-list/client-list.component';



@NgModule({
  declarations: [
    ClientDetailsComponent,
    ClientListComponent,
  ],
  exports: [
    ClientDetailsComponent,
    ClientListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class ClientsModule { }
