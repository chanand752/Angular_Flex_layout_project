import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-label',
  templateUrl: './progress-label.component.html',
  styleUrls: ['./progress-label.component.css']
})
export class ProgressLabelComponent implements OnInit {
  name = 'Progress Bar';

  //Demo purpose only, Data might come from Api calls/service
  public counts = ["Recieved","In Progress","Ready for Billing",
  "Billed","Order Closed"];
  
  public orderStatus = "Ready for Billing"


  constructor() { }

  ngOnInit(): void {
  }

}
