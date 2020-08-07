import { Component, OnInit } from '@angular/core';
//import { HardCodedAuthenticationServiceService } from 'src/app/service/hard-coded-authentication-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchDataServiceService } from 'src/app/service/search-data-service.service';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';

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
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
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
