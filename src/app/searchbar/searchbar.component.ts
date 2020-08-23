import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { SearchDataServiceService } from '../service/search-data-service.service';
import { Router } from '@angular/router';

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
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  isLoggedIn: boolean = false;
  username1 = '';
  product = Product;
  searchItem = ''
  constructor(
    public basicAuthService: BasicAuthenticationService,
    public searchDataServiceService: SearchDataServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.basicAuthService.isUserLoggedIn();
    this.username1 = sessionStorage.getItem('authenticatedUser')
  }

  handleSearch(): void {
    // if (this.searchDataServiceService.getProductFromSearchBox(this.searchItem) != null) {
       this.searchDataServiceService.getProductFromSearchBox(this.searchItem).subscribe(
         (response: any) => {
           console.log('response body' + response);
           //this.product = response;
           this.router.navigate(['searchComponent'])
         }
       );
       
     //}
   }
}
