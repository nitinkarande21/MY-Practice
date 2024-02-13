import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ViewChild2Component } from '../view-child2/view-child2.component';

@Component({
  selector: 'app-view-child1',
  templateUrl: './view-child1.component.html',
  styleUrls: ['./view-child1.component.css']
})
export class ViewChild1Component {

  @ViewChild ('city') cityName!:ElementRef
  @ViewChild ('Viewchild2component') viewCompo!:ViewChild2Component
  @ViewChild ('confirmation') confirmation!: ElementRef
  constructor(private cdr: ChangeDetectorRef){}

  name1:any;
  edit = false


  ngAfterViewInit(){
    console.log(this.cityName.nativeElement.innerHTML);
    this.name1 = this.viewCompo.name; //get
    this.viewCompo.city= 'Nashik';  //set

    if (this.edit){
      this.confirmation.nativeElement.innerHTML= 'are you sure you wanted to update this records'
    }
      this.cdr.detectChanges();
  }
}



