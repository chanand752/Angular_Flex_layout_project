import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-form',
  templateUrl: './ng-model-form.component.html',
  styleUrls: ['./ng-model-form.component.css']
})
export class NgModelFormComponent implements OnInit {

  favoriteColor = 'Anand';

campagain = ('');
  name = ('');
  Address = ('');
  Apt_Suite = ('');
  city = ('');
  state = ('');
  zipcode = ('');
  country = ('');
  phoneNumber = ('');

  constructor() { }

  ngOnInit(): void {
  }
  submitForm(){
    console.log(this.campagain)
    console.log(this.name)
    console.log(this.Address)
    console.log(this.Apt_Suite)
    console.log(this.city)
    console.log(this.state)
    console.log(this.zipcode)
    console.log(this.country)
    console.log(this.phoneNumber)
  }
}
