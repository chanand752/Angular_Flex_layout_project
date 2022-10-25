import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GetServiceService } from '../get-service.service';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  constructor(public service: GetServiceService, public router: Router, private fb: FormBuilder) { }
  details = this.fb.group({
    firstname: '',
    lastname: '',
    gender: '',
    departments: '',
    email: '',
    password: '',
    conformpassword: ''
  })

  ngOnInit(): void {
  }

  save() {
    var password = ""
    var conformpassword = password
    if (password == conformpassword) {
      this.save
    }
    console.log(this.details.value)
  }
  edit() {
    var b = this.details.value;
    this.service.behavior.next(b);
    this.router.navigateByUrl("direct");
  }

}
