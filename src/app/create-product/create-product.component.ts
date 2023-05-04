import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../product';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @Output() employeeAdded = new EventEmitter<{id?: number,number?: string,firstName?: string, lastName?: string, birthday?: Date, Gender?: string, Picture?: string, Active?: boolean}>();
  employee: Employee = new Employee();
  ngOnInit() {
  }  
  onEmployeeAdded() {
    this.employee.Active = true;
    this.employeeAdded.emit({id: this.employee.id, number: this.employee.number ,firstName: this.employee.firstName, lastName: this.employee.lastName, birthday: this.employee.birthday, Gender: this.employee.Gender, Picture: this.employee.Picture, Active: this.employee.Active});
  }
}