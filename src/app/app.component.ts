import { Component, Output } from '@angular/core';
import { Product } from '../app/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product = [
    new Product(1,'123','ITEWT', 'SHEEEEESH', '2','3000', true),
    new Product(2, '321','KSAS', 'HAYS', '2', '2000', true),
    new Product(3, '421',"ASAS", "ASDASDASDASD", '3', '1000', false)
  ];
  title = 'angular8-springboot-client';
  toggleList= 0;
  setToggle(toggle: number) {
    this.toggleList = toggle;
  }
  onEmployeeCreated(employee: {id?: number,number?: string,ProductCode?: string, Description?: string, UnitOfMeasurement?: string, Price?: boolean}) {
    var newemployee = new Product(Product.id, Product.ProductCode, Product.Description, Product.UnitOfMeasurement, Product.Price,);
    this.product.push(Product);
    this.setToggle(0);
  }
}