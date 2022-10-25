import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  public behavior=new BehaviorSubject<any>('');
  
  constructor() { }
}
