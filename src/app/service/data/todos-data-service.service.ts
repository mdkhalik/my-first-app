import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee, Student } from 'src/app/product/product.component';
import { Product } from 'src/app/list-todos/menu/menu.component';
import { API_URL } from 'src/app/app.constant';
//import { Employee, Student, Product } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodosDataServiceService {
  constructor(private http: HttpClient) { }

  // retrieveAllTodos(username: any){
  //   return this.http.get<Todo[]>(`http://localhost:8089/users/${username}/todos`);
  // }

  retrieveAllEmployees() {
    console.log('making rest get call');
    return this.http.get<Employee[]>('${API_URL}/emp/employees');
  }

  retrieveAllStudents() {
    console.log('making rest get call');
    return this.http.get<Student[]>('${API_URL}/students/students');
  }

  retrieveAllProducts() {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    console.log('token value in product='+sessionStorage.getItem('token'));
    //return this.http.get<Product[]>('http://localhost:8088/products/products',{headers});
    return this.http.get<Product[]>('${API_URL}/products/products');
  }

  deleteProducts(productid: number){
    console.log(`deleted ${productid}`);
    return this.http.delete(`${API_URL}/products/delete/${productid}`)
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = 'user';
  //   let password = '98a6b4a3-0e34-4635-a95a-9b52d0ea0dac';
  //   let basicAuthHeaderString = 'Basic '+window.btoa(username+":"+password);
  //   return basicAuthHeaderString;
  // }
}