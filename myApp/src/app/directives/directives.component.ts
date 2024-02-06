import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
   tableHeading=["name","contact","city","age"];
   tableData=[
    {name:"nitin",contact:457755,city:"pune",age:"28"},
    {name:"pooja",contact:457755,city:"pune",age:"28"},
    {name:"dilip",contact:457755,city:"pune",age:"28"},
    {name:"shidu",contact:457755,city:"pune",age:"28"},
    {name:"shree",contact:457755,city:"pune",age:"28"},
    {name:"vilas",contact:457755,city:"pune",age:"28"},
    {name:"mahesh",contact:457755,city:"pune",age:"28"},
    {name:"nani",contact:457755,city:"pune",age:"28"},
    {name:"sai",contact:457755,city:"pune",age:"28"},
    {name:"piu",contact:457755,city:"pune",age:"28"},
    {name:"ruhi",contact:457755,city:"pune",age:"28"},
    {name:"priya",contact:457755,city:"pune",age:"28"},
    {name:"jay",contact:457755,city:"pune",age:"28"},
    {name:"ajay",contact:457755,city:"pune",age:"28"},
    {name:"shumbham",contact:457755,city:"pune",age:"28"},
    {name:"manoj",contact:457755,city:"pune",age:"28"}

  ]
  constructor(private dataService: DataService){}
  user: string = "Student";

  city="pune"
  IsShow= true;
  cars=["i10","i20", "swift","jagwar","indica"];

  getData(){
    this.user=this.dataService.userName;
    console.log("user name",this.user);
    
  }
 
  
 



}

 
  
