import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Product } from '../product/product.component';
//import { Product } from '../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class SearchDataServiceService {

  constructor(public http: HttpClient) { }

  getProductFromSearchBox(productName: string){
    console.log('productname='+productName);
    return this.http.get<any>(`http://localhost:8088/products/${productName}`);
  }
}
