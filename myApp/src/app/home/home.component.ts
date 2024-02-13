import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({      //component directive: meta data of component
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {   //component class: properties,constructor,lifecycle hooks, methods etc

  city: string = "pune"; //properties.
  surName: any = "1233"; // any data type addon in Angular
  name: string = "Nitin";
  name2!: string;
  name3: any;
  pipe:boolean =false;
  date="10/3/2024";

  constructor(private router: Router, private dataService :DataService) { }  //constructor section

      ngOnInit(){
      this.dataService.userName= this.name;
      }

  loginComp() {        //lifecycle hooks, methods

    this.name3 = "beed";
    console.log("login compo calling");
    this.test();
    this.router.navigateByUrl("login")
  }

  test() {
    console.log("test calling");

  }
  directives() {
    this.router.navigateByUrl("directives")
  }

  purePipe(){
    this.pipe = true;
  }

  adminSignup(){
    this.router.navigateByUrl('admin/adminSignUp')
  }
}
