import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { type } from 'os';
import { isString } from 'util';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor() { }
  product = new FormGroup({
    pname: new FormControl('', Validators.required),
    purl: new FormControl('', Validators.required),
    pcost: new FormControl('', Validators.required)
  });

private select_category=0;
  ngOnInit() {
  }
   

  SubmitProduct(){
    // how to check type of selected string
    // pass tarray
  }


}
