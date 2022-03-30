import { Component } from '@angular/core';

export interface TabItem {
  label: string,
  route: string,
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  tabs: TabItem[] = [
    {
      label: 'home',
      route: '/home'
    },
    {
      label: 'client-list',
      route: '/client-list'
    },
  ];
}
