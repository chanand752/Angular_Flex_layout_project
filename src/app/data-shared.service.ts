import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {
 public dataSharedSubject = new BehaviorSubject <any>("");
  constructor() { }
 
  sendDataShared(data:any) {
    this.dataSharedSubject.next(data)
  }
}
