import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private admin:AdminService) { }
  product = new FormGroup({
    pname: new FormControl('', Validators.required),
    purl: new FormControl('', Validators.required),
    pcost: new FormControl('', Validators.required),
    poldcost: new FormControl('',Validators.required),
    prating:new FormControl('',Validators.required),
    pshortdesc: new FormControl('',Validators.required),
    pdescription: new FormControl('',Validators.required)
  });

private select_category="0";
  ngOnInit() {

  }

  // highlight(prod){
  //    console.log(prod);
  //    prod.focus();
  // }
   
  SubmitProduct(){
     
      // console.log(this.product.value);
    // how to check type of selected string
    if (this.select_category == 'tshirt'){
      this.admin.postproduct(this.select_category, this.product.value);
    }

    if(this.select_category == 'mobiles'){
      this.admin.postproduct(this.select_category, this.product.value);
    }
    
  }


}
