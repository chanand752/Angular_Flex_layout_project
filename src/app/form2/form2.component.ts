import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GetServiceService } from '../get-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  details1: any;

  constructor(private fb: FormBuilder, private ser1: GetServiceService, private router: Router) { }



  ngOnInit(): void {
    this.details1 = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      gender: new FormControl(),
      departments: new FormControl(),
      email: new FormControl(),

    })

    this.ser1.behavior.subscribe((x) => {
      // this.details1=x;
      // console.log(x,"hi");
      this.details1.controls.firstname.patchValue(x.firstname)
      this.details1.controls.lastname.patchValue(x.lastname)
      this.details1.controls.gender.patchValue(x.gender)
      this.details1.controls.departments.patchValue(x.departments)
      this.details1.controls.email.patchValue(x.email)
    })


  }
  update() {
    console.log(this.details1);
  }
  back() {
    this.router.navigateByUrl("form1");
  }


}
