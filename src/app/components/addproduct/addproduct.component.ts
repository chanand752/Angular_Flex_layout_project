import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
   MatDailogue:boolean = false;
   AddProductForm:boolean =true;

   EditProductData:boolean=false;

  //  matArry = []
  matArry:any[]=[];

  profileForm = new FormGroup({ 
   supllierNumber : new FormControl(''),
    title : new FormControl(''),
    manfacturer : new FormControl(''),
    partNumber :new FormControl(''),
    spscCode : new FormControl(''),
    clasificationCode : new FormControl(''),
    unitPrice : new FormControl(''),
    LeadTime : new FormControl(''),
    profileDecription : new FormControl(''),
    catlogType: new FormControl(''),
    catlog : new FormControl (''),
  })


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  submitForm(){
    console.warn(this.profileForm.value)
    
    // console.log(this.supllierNumber.value)
    // console.log(this.name.value)
    // console.log(this.Address.value)
    // console.log(this.Apt_Suite.value)
    // console.log(this.city.value)
    // console.log(this.state.value)
    // console.log(this.zipcode.value)
    // console.log(this.country.value)
    // console.log(this.phoneNumber.value)

         this.MatDailogue=true;
         this.AddProductForm = false;
    //  this.profileForm.value.push(this.matArry)
    this.matArry.push(this.profileForm.value)
     console.log("mat array name",this.matArry)
     console.log(this.matArry)
      console.log(typeof this.matArry)  

  }
 addProduct() {
this.AddProductForm = false;
 }
 

editProductData() {
  this.MatDailogue = false;
  this.AddProductForm = true;

}

closeForm() {
  this.MatDailogue = false;
  this.AddProductForm = true;
  this.EditProductData = false
}


}




