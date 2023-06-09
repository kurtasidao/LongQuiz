import { Employee } from '../product';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../product.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  product: Product;

  constructor(private route: ActivatedRoute,private router: Router,
    private productService: EmployeeService) { }

  ngOnInit() {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['products']);
  }
}