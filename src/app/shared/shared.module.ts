import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [ HeaderComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
