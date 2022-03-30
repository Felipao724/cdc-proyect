import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
    CommonModule
  ]
})
export class ClientsModule { }
