import { Component, OnInit } from '@angular/core';
import { TodosDataServiceService } from '../service/data/todos-data-service.service';

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public deptname: string,
    public joiningDate: string
  ) { }
}

export class Student {
  constructor(
    public studentId: number,
    public name: string,
    public course: string
  ) { }
}
export class Product {
  constructor(
    public productid: number,
    public productname: string,
    public price: number,
    public category: string,
    public availability: string,
    public cod: string,
    public insertiondate: Date
  ) { }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  employee: Employee[];
  student: Student[];
  products: Product[];
  constructor(private todoDataService: TodosDataServiceService){
  } 

  ngOnInit(): void {
    this.todoDataService.retrieveAllEmployees().subscribe(
      (response: any) => {
        console.log('response body' + response.body);
        this.employee = response;
      }
    );
    this.todoDataService.retrieveAllStudents().subscribe(
      (response: any) => {
        console.log('response body' + response.body);
        this.student = response;
      }
    );
    this.todoDataService.retrieveAllProducts().subscribe(
      (response: any) => {
        console.log('token value while retrieving product='+sessionStorage.getItem('token'));
        console.log('response body' + response.body);
        this.products = response;
      }
    );
    //  this.todoDataService.retrieveAllTodos('in28minutes').subscribe(
    //   (response: any) =>
    //   { 
    //     this.employee = response;
    //   }
    //  );
  }
  deleteProduct(productid: number) {
    this.todoDataService.deleteProducts(productid).subscribe(
      response => {
        console.log('deleted');
      }
    );
  }

}
