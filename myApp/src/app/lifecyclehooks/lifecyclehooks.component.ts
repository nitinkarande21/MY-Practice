import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent {
  name: any;
  @Input() surname: any;

   constructor(private dataServices:DataService){
    
    console.log("constructor calling"); 

    }
    ngOnInit(){

      this.name = this.dataServices.userName;

      console.log("ngOnInit calling");
      
    }
    ngDoCheck(){
      console.log(" ngDocheck calling");
}
  ngAfterContentInit(){
    console.log("ngaftercontentinit calling");
    }
    ngAfterContentCheck(){
      console.log("ngaftercontaintcheck callin");
      
    }
    ngAfterViewInit(){
      console.log("ngafterviewinit calling");
      
    }
    ngAfterViewChecked(){
      console.log("ngafterviewedchecked caiing");
      
    }
    ngOnDestroy(){
      console.log("ngondestroy calling");
      
    }
    
}
