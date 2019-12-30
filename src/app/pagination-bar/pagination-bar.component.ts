import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.css']
})
export class PaginationBarComponent implements OnInit {

  banks;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.banks = this.dataService.banks;
  }

}