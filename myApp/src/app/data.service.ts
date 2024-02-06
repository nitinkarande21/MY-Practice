import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userName: any;
  data = new Subject()
  constructor() { }

  //to declare globle properties we use --reusable fucntion logic

}
