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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  username1 = '';
  product = Product;
  constructor(//public hardCodedAuthenticationService: HardCodedAuthenticationServiceService,
    public basicAuthService: BasicAuthenticationService,
    public searchDataServiceService: SearchDataServiceService,
    public basicAuthenticationService: BasicAuthenticationService,
    public router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.basicAuthService.isUserLoggedIn();
    this.username1 = sessionStorage.getItem('authenticatedUser')
  }

  handleSearch(): void {
    if (this.searchDataServiceService.getProductFromSearchBox('Co0py') != null) {
      this.searchDataServiceService.getProductFromSearchBox('Co0py').subscribe(
        (response: any) => {
          console.log('response body' + response.body);
          this.product = response;
        }
      );
      this.router.navigate(['search'])
    }
  }


}
