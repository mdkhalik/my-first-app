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

  addProductToCart(data1: any){
    console.log('data1='+data1);
    this.searchDataServiceService.addProductToCart(data1).subscribe(
      data => {
        //this.data = data;
        console.log('response');
      }
      )
  }

}
