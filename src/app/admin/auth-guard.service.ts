import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AdminService } from './admin.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private admin:AdminService,private router:Router) { }

  canActivate(): boolean {
    
    if(!this.admin.Authenticated()){
      this.router.navigate(['admin/login']);
      return false;
    }
    return true;
  }

}
