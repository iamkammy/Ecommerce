import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './admin-dashboard/add-product/add-product.component';
import { AuthGuardService } from './auth-guard.service';

const routes:Routes = [
{ path: "login",  component:LoginComponent},
{
  path: 'dashboard',
  component:AdminDashboardComponent,
  canActivate:[AuthGuardService],
 children : [
  {path: 'add-product', component: AddProductComponent},

 ] 
  },

 { path: '' , redirectTo:'login', pathMatch: 'full'},
];
@NgModule({
  declarations: [
  LoginComponent,
  AdminDashboardComponent,
  AddProductComponent
],

  imports: [
    CommonModule,
    FormsModule,
   
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers:[]
})
export class AdminModule { }
