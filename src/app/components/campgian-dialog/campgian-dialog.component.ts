import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import {FormBuilder,FormGroup, FormArray, Validators} from '@angular/forms';


/// Mat chip code 

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';



@Component({
  selector: 'app-campgian-dialog',
  templateUrl: './campgian-dialog.component.html',
  styleUrls: ['./campgian-dialog.component.css']
})
export class CampgianDialogComponent implements OnInit {
  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  campiganForm: FormGroup;

  // Mat Chip Code

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['VXK616C',];
  allFruits: string[] = ['AAL24MI', 'LL25C6', 'LKGH89C', 'O5897HI', '0KLIGHK'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
 


  labelPosition: 'before' | 'after' = 'after';
  // this.heroForm = new FormGroup({
  //   name: new FormControl(this.hero.name, [
  //     Validators.required,
  //     Validators.minLength(4),
  //     forbiddenNameValidator(/bob/i)
  //   ]),


 


  constructor(private _formBuilder: FormBuilder, private fb: FormBuilder) { 
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }


  /// Mat Chip code

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }





  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

/// step-1 code
    this.campiganForm = new FormGroup({ 
      title : new FormControl('',Validators.required),
      campaignOwner : new FormControl('',Validators.required),
      sender :new FormControl('',Validators.required),
      reciever : new FormControl('',Validators.required),
      subject : new FormControl('',Validators.required),
    })


 // we will initialize our form here
 this.secondFormGroup = this.fb.group({
  times: this.fb.array([
    this.initTimes()
  ])
});
}

trackByFn(index: number, item: any) {
return item.trackingId;
}

initTimes() {
return this.fb.group({
  from: this.fb.control('', Validators.required),
  to: this.fb.control('', Validators.required),
  trackingId: this.generateUniqueId()
});
}

generateUniqueId() {
return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

addGroup() {
// add address to the list
const control = <FormArray>this.secondFormGroup.controls['times'];
control.push(this.initTimes());
}

removeGroup(i: number) {
// remove address from the list
const control = <FormArray>this.secondFormGroup.controls['times'];
control.removeAt(i);
}

onSubmit() {
console.log('value: ', this.secondFormGroup.value);
console.log('valid: ', this.secondFormGroup.valid);
}



  }

