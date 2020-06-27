import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Peoples:Array<any> = [
    
    {Type:'Doctor',Name:'Nelson',Age:30},
    {Type:'Engenieer',Name :'Duvan',Age:33},
    {Type:'Veterinarian',Name :'Nelson',Age:40}

   ]

}
