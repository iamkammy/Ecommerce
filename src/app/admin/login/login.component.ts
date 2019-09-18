import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private _admin:AdminService, private router:Router) { }
  login = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required),
    // remember: new FormControl('', Validators.required)
  });
  data;

  ngOnInit() {
   this._admin.getAdminCredentials().subscribe((res:any)=>{
     this.data = res;
     
   })
  }
  

  validate(){ 
    if( this.login.value.username == this.data.name && this.login.value.password == this.data.password){
      console.log("authorised");
      sessionStorage.setItem('adminAuth_token', 'valid');
      this.router.navigate(['admin/dashboard']);

    } else {
     alert("Unauthorised person....!!!!!!!");
    }
  }

}
