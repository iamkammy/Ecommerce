import { Component, OnInit } from '@angular/core';
import { TshirtService } from 'src/app/services/tshirt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private _tshirt: TshirtService) { }
 shirts:any;
 
  ngOnInit() {
   this._tshirt.getTshirts().subscribe((res)=>{
     this.shirts = res;
     console.log(this.shirts);
    })

   
    // let heads = new Headers({
    //    'Access-Control-Allow-Origin': '*',
    //    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    //    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    //    'Content-Type': 'application/json',
    //    });
    //   let options = new RequestOptions({ headers: heads });

  //  this._tshirt.getdeepak().subscribe((k)=>{
  //    console.log(k);
  //  })
   
  }

  arr = [3,4,6,7,4];

}
