import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  //comunicate between compontent and dom 
  //one way databinding : is simple way where html templete is changed 
  //when we made changes in the type script code
  //1) string interpolation{{}} 
  //String Interpolation is a one-way databinding 
  //technique which is used to output the data from a TypeScript code to HTML template (view) 
  
  //2)property binding[]
  //event binding()
  // ** Two way databinding[(ngModel)]

  data: any = "we are learing string interpolation";
  amount: number= 900000;
  ismatch=true;
  x=21;

  name="Nitin";
  clickEventData:any;
  city: any = "beed"


  test(){
    return 51;
    }
    clickEvent(){
      this.clickEventData=122555
    }
}
