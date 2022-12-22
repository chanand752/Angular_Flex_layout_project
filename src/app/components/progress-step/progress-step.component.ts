import { Component, Input, OnInit } from '@angular/core';
import { MocksharedService } from 'src/app/services/mockshared.service';

@Component({
  selector: 'app-progress-step',
  templateUrl: './progress-step.component.html',
  styleUrls: ['./progress-step.component.css']
})
export class ProgressStepComponent implements OnInit {
  public status:any;
  constructor(private service:MocksharedService) { 
    this.loadData();
  }

  ngOnInit(): void {
  }


  loadData(){
    this.service.getOrderStatus().subscribe((data)=>{
      console.log(data)
      this.status=data
      console.log(this.status)
    })
  }
}
