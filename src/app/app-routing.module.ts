import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  
   { path:'', component:HomeComponent}, 
  
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: "admin",
    loadChildren: "../app/admin/admin.module#AdminModule"
  } 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
