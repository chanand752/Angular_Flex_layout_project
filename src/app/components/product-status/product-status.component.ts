import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-product-status',
  templateUrl: './product-status.component.html',
  styleUrls: ['./product-status.component.css']
})
export class ProductStatusComponent implements OnInit {
  public counts = ["Order Submitted","Request Submitted","Request Approved",
  "Order Shipped"];
  

 orderStatus = "Order Submitted";
 
 OrderSubmitted :boolean =false;
 RequestSubmitted :boolean =false;
 RequestApproved :boolean =false;
 OrderShipped :boolean =true;
   
  constructor() {

   }

  ngOnInit(): void {
  }

 orderSubmitted() {
  this.OrderSubmitted = true;
  this.RequestSubmitted = false;
  this.RequestApproved = false;
  this.OrderShipped = false;
 }

requestSubmitted() {
  this.OrderSubmitted = false;
  this.RequestSubmitted = true;
  this.RequestApproved = false;
  this.OrderShipped = false;
}

requestApproved() {
  this.OrderSubmitted = false;
  this.RequestSubmitted = false;
  this.RequestApproved = true;
  this.OrderShipped = false;
}

orderShipped() {
  this.OrderSubmitted = false;
  this.RequestSubmitted = false;
  this.RequestApproved = false;
  this.OrderShipped = true;
}

}
