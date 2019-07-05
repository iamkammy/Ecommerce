import { Component, OnInit } from '@angular/core';
import { TshirtService } from 'src/app/services/tshirt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private _tshirt: TshirtService) { }
 shirts = [];
 
 
  ngOnInit() {
  //  this._tshirt.getTshirts().subscribe((res:any)=>{
  //    this.shirts = res.tshirts;
  //    console.log(this.shirts);
  
  //   })

    this._tshirt.getTshirts().subscribe((data:any)=>{
      console.log(data);
      console.log(typeof(data));
      this.shirts = data;
      console.log(typeof(this.shirts));
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

 

}
