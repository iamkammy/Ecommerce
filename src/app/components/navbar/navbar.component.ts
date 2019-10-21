import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }
  private AppName = "Shopify";
  ngOnInit() {
  }
  adminlogin(){
    this.router.navigate(['admin']);
  }
  adminLogout(){
    if(sessionStorage.getItem('adminAuth_token')){
      sessionStorage.removeItem('adminAuth_token');
      this.router.navigate(['admin/login']);
    } else{
      alert('already logout');
    }
  }


}
