import { Component, OnInit, Input } from '@angular/core';

import { Observable } from "rxjs";
import { EmployeeService } from "../product.service";
import { Employee } from "../product";
import { Router } from '@angular/router';

@Component({
  selector: '[app-product-list]',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() element: {id: number, ProductCode?: string, Description?: string, UnitOfMeasurement?: string, Price?: string, Picture?: boolean};
  
  constructor() {}
  ngOnInit() {}  
                                    
  deleteEmployee(id: number) {
    
  }

  employeeDetails(id: number){
    
  }
}