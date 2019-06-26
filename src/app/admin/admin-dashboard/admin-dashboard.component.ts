import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router) { }
admin = "kamran";
  ngOnInit() {
  }

  addProduct(){
    this.router.navigate(['admin/dashboard/add-product'])
  }
}
