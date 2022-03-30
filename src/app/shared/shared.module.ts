import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [ HeaderComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
