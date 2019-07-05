import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  private base_URL = "http://localhost:3000/";
  
  private admin_url:string =  this.base_URL + "adminCredentials";
  
  private tshirtURL = this.base_URL+ 'tshirt';

  getAdminCredentials(){
    return  this.http.get(this.admin_url);
   }

  postproduct(category, product){
   let url = this.base_URL + category;
   console.log(url);
  //  console.log(product);
   this.http.post(url,product).subscribe((res)=>{
     console.log(res);
   })
  }

  Authenticated(){
    let token = sessionStorage.getItem('adminAuth_token');
    if(token){
      return true;
    } else{
      return false;
    }
  }
  
}
