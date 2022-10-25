import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsive-form',
  templateUrl: './responsive-form.component.html',
  styleUrls: ['./responsive-form.component.css']
})
export class ResponsiveFormComponent implements OnInit {
  hide = true;
  hide1 = true;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
