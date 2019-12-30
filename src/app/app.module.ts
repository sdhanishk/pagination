import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';
import { DataService } from './data.service';
import { PaginatePipe } from './paginate.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PaginationBarComponent, PaginatePipe ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
