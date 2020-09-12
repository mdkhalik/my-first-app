import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Product } from '../product/product.component';
//import { Product } from '../list-todos/list-todos.component';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class SearchDataServiceService {

  private apiData = new BehaviorSubject<any>(null);
  public apiData$ = this.apiData.asObservable();
  constructor(public http: HttpClient) { }

  getProductFromSearchBox(productName: string) {
    console.log('productname=' + productName);
    return this.http.get<Product[]>(`${API_URL}/products/${productName}`)
      .pipe(
        map(
          (data) => {
            return data;
          }
        ));
  }

  // here we set/change value of the observable
  setData(data: any) {
    this.apiData.next(data)
  }

  addProductToCart(productid: any,productname: any,price: any) {
    console.log('productid='+productid+'  ,productname='+productname+' ,price='+price);
    return this.http.post<any>(`${API_URL}/addProductTocart`,{productid,productname,price})
    .pipe(
      map(
        data => {
          //this.data = data;
          console.log('response received'+data);
        }
      )
    )
  }
}
