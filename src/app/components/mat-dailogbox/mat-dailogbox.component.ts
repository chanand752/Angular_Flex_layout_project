import { Component, OnInit, Inject } from '@angular/core';
import { FormControl} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataSharedService } from 'src/app/data-shared.service';


@Component({
  selector: 'app-mat-dailogbox',
  templateUrl: './mat-dailogbox.component.html',
  styleUrls: ['./mat-dailogbox.component.css']
})
export class MatDailogboxComponent implements OnInit {
 tab1=false
 tab2=true
 nameValue : any
 campagain = new FormControl('');
 name = new FormControl('');
 Address = new FormControl('');
 Apt_Suite = new FormControl('');
 city = new FormControl('');
 state = new FormControl('');
 zipcode = new FormControl('');
 country = new FormControl('');
 phoneNumber = new FormControl('');
  constructor(@Inject (MAT_DIALOG_DATA) public data:any, private dataService:DataSharedService) { }

  ngOnInit(): void {
    this.dataService.dataSharedSubject.subscribe(res => {
      this.nameValue = res.value
      console.log(res.value)
    })
  }

  Edit() {
    this.tab1=true
    this.tab2=false
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
