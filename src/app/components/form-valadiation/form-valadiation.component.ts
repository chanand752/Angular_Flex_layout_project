import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-valadiation',
  templateUrl: './form-valadiation.component.html',
  styleUrls: ['./form-valadiation.component.css']
})
export class FormValadiationComponent implements OnInit {
  campagain = new FormControl('');
  name = new FormControl('');
  Address = new FormControl('');
  Apt_Suite = new FormControl('');
  city = new FormControl('');
  state = new FormControl('');
  zipcode = new FormControl('');
  country = new FormControl('');
  phoneNumber = new FormControl('');



  constructor() { }

  ngOnInit(): void {
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
  }
}
