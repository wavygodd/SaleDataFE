import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sales } from '../app/models/sales.model';



@Injectable({
  providedIn: 'root'
})
export class SalesDataService {
  private apiUrl = 'https://localhost:7272/api/SalesReport/GetSalesReport'; 

  constructor(private http: HttpClient) { }

  getSalesReport(): Observable<Sales[]> {
    return this.http.get<Sales[]>(this.apiUrl);
  }
}
