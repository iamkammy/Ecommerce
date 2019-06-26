import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { TshirtService } from 'src/app/services/tshirt.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private _shirt:TshirtService, private router:Router) { }
  login = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required),
    // remember: new FormControl('', Validators.required)
  });
  data;

  ngOnInit() {
    this._shirt.getAdminCredentials().subscribe((res)=>{
      console.log(res);
      this.data = res;
    })
  }
  

  validate(){
    if( this.login.value.username == this.data.name && this.login.value.password == this.data.password){
      console.log("authorised");
      this.router.navigate(['admin/dashboard']);

    } else {
     alert("Unauthorised person....!!!!!!!");
    }
  }

}
