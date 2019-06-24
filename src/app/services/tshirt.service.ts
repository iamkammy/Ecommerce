import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TshirtService {
  private tshirt_url:string = "http://localhost:3000/tshirts";
  constructor(private http: HttpClient) { }

getTshirts(){
  return  this.http.get(this.tshirt_url);
}

}
