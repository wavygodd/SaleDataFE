import { Component, OnInit } from '@angular/core';
import { Sales } from '../models/sales.model';
import { SalesDataService } from '../sales-data.service';

@Component({
  selector: 'app-sales-data',
  templateUrl: './sales-data.component.html',
  styleUrls: ['./sales-data.component.css']
})
export class SalesDataComponent implements OnInit {
  salesData: Sales[] = [];
 
  constructor(private salesDataService: SalesDataService) { }

  ngOnInit(): void {
    this.getSalesReport();
  }

  getSalesReport(): void {
    this.salesDataService.getSalesReport()
      .subscribe(data => {
        this.salesData = data;
      });
  }
}

