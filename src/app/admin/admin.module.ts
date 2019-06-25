import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
const routes:Routes = [
{ path: "login", component:LoginComponent},
{ path: '' , redirectTo:'login', pathMatch: 'full'}
];
@NgModule({
  declarations: [

  LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
