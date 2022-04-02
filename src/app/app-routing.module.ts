import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './components/pages/clients/client-details/client-details.component';
import { ClientListComponent } from './components/pages/clients/client-list/client-list.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'client-list', component: ClientListComponent},
  {path: 'client-details/:id', component: ClientDetailsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
