import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent {

  data="Nitin"

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.dataService.data.next(this.data)
  }

}
