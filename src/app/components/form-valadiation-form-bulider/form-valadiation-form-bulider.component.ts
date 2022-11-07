import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-form-valadiation-form-bulider',
  templateUrl: './form-valadiation-form-bulider.component.html',
  styleUrls: ['./form-valadiation-form-bulider.component.css']
})
export class FormValadiationFormBuliderComponent implements OnInit {
  profileForm = this.fb.group({ 
    campagain :  ['',Validators.required],
    name :  ['',Validators.required],
    Address :  ['',Validators.required],
    Apt_Suite : ['',Validators.required],
    city :  ['',Validators.required],
    state : ['',Validators.required],
    zipcode :  ['',Validators.required],
    country :  ['',Validators.required],
    phoneNumber : ['',Validators.required],
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }
  submitForm(){
    console.warn(this.profileForm.value)
   
  }

}
