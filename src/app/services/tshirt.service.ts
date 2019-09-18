import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TshirtService {
  private baseUrl = "http://localhost:3000/";
  private tshirt_url:string =  this.baseUrl + "tshirt";
  private mobileUrl:string = this.baseUrl + "mobiles";

  // private deepak_url:string = "http://192.168.1.129/shipgiglive/restapi/register.php";
  constructor(private http: HttpClient) { }

getTshirts(){
 return this.http.get(this.tshirt_url);
}
getMobiles(){
  return this.http.get(this.mobileUrl);
}

// getdeepak(){
//   return this.http.get(this.deepak_url);
// }

}
