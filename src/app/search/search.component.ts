import { Component, OnInit } from '@angular/core';
import { SearchDataServiceService } from '../service/search-data-service.service';
import { pid } from 'process';
import { pipe } from 'rxjs';

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
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  data: Product[];
  count :string;
  validResponse : boolean = false;
  successMessage: string ='Product Added to cart'
  constructor(public searchDataServiceService:SearchDataServiceService) { 
    searchDataServiceService.apiData$.subscribe(
      data => {
        this.data = data
      }
      )

  }

  ngOnInit(): void {
    console.log('data in serach='+this.data);
  }

  addProductToCart(productid: any,productname: any, price: any){
    console.log('productname='+productname);
    this.searchDataServiceService.addProductToCart(productid,productname, price).subscribe(
      data => {
        this.validResponse = true;
        console.log('response: '+data);
      }
      )
  }

}
