import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MockTask } from '../mocks/mockTasks';


@Injectable({
  providedIn: 'root'
})
export class MocksharedService {
  getOrderStatus(){
    return of([
 {
 "name":"Pinpont Pen", "photo":"assets/img/products/pinpoint-ballpen.jpg", "quantity":2, "date":"02-02-2020", "price":100, "status":"packed"
 }, {
 "name":"Classmate Book", "photo":"assets/img/products/classmate-classmate-notebook-cmn018-original-imae6ajy4qhfxd3k.jpeg", "quantity":2, "date":"02-02-2020", "price":100, "status":"shipped" },
 {
 "name":"Classmate Book", "photo":"assets/img/products/classmate-classmate-notebook-cmn018-original-imae6ajy4qhfxd3k.jpeg", "quantity":2, "date":"02-02-2020", "price":100, "status":"processing" },
 {
 "name":"Classmate Book", "photo":"assets/img/products/classmate-classmate-notebook-cmn018-original-imae6ajy4qhfxd3k.jpeg", "quantity":2, "date":"02-02-2020", "price":100, "status":"delivered" }]);
   }
}