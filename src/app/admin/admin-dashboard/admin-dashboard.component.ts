import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router) { }
admin = "Admin";
  ngOnInit() {
  }

  addProduct(){
    this.router.navigate(['admin/dashboard/add-product'])
  }
  logout(){
    sessionStorage.removeItem('adminAuth_token');
    this.router.navigate(['admin/login']);
  }
}
