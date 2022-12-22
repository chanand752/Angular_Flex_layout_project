import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { MatDailogboxComponent } from '../mat-dailogbox/mat-dailogbox.component';
import { DataSharedService } from 'src/app/data-shared.service';
@Component({
  selector: 'app-form-valadiation',
  templateUrl: './form-valadiation.component.html',
  styleUrls: ['./form-valadiation.component.css']
})
export class FormValadiationComponent implements OnInit {
  show:any
  display:boolean=false;
  campagain = new FormControl('');
  name = new FormControl('');
  Address = new FormControl('');
  Apt_Suite = new FormControl('');
  city = new FormControl('');
  state = new FormControl('');
  zipcode = new FormControl('');
  country = new FormControl('');
  phoneNumber = new FormControl('');




  constructor(public dialog: MatDialog, private dataShared:DataSharedService) { }
  
 
  
  ngOnInit(): void {
    this.dataShared.dataSharedSubject.next(this.name)

  }
 
  submitForm(){
    console.log(this.campagain.value)
    console.log(this.name.value)
    console.log(this.Address.value)
    console.log(this.Apt_Suite.value)
    console.log(this.city.value)
    console.log(this.state.value)
    console.log(this.zipcode.value)
    console.log(this.country.value)
    console.log(this.phoneNumber.value)
    this.dialog.open(MatDailogboxComponent, {
      data:
      {campagain:this.campagain.value,name:this.name.value,
        Address:this.Address.value,Apt_Suite:this.Apt_Suite.value,city:this.city.value,
      state:this.state.value,zipcode:this.zipcode.value, country:this.country.value,phoneNumber:this.phoneNumber.value }})
  
  

  }

  openDialog() {
    // this.dialog.open(DialogElementsExampleDialog);
    // this.dialog.open(MatDailogboxComponent, {data:this.name})
  }
}
