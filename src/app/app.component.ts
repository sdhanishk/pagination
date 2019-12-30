import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  paginationOptions = {};
  
  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    console.log(this.dataService.banks);
  }

}
