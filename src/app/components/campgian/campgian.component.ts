import { Component, OnInit } from '@angular/core';
import { CampgianDialogComponent } from '../campgian-dialog/campgian-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-campgian',
  templateUrl: './campgian.component.html',
  styleUrls: ['./campgian.component.css']
})
export class CampgianComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  openDailog() {
    this.dialog.open(CampgianDialogComponent)
  }


}
