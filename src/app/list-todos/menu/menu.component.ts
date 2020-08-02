import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationServiceService } from 'src/app/service/hard-coded-authentication-service.service';
import { ActivatedRoute } from '@angular/router';
import { SearchDataServiceService } from 'src/app/service/search-data-service.service';

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
  constructor(public hardCodedAuthenticationService: HardCodedAuthenticationServiceService,
    public searchDataServiceService: SearchDataServiceService,
    public router: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoggedIn = this.hardCodedAuthenticationService.isUserLoggedIn();
    this.username1 = sessionStorage.getItem('authenticatedUser')
  }


  // handleLogin(): void {
  //   if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
  //     this.router.navigate(['welcome', this.username])
  //     this.inValidLogin = false;
  //   } else {
  //     this.inValidLogin = true;
  //   }
  //   console.log(this.username);
  //   console.log(this.password);
  // }


  handleSearch() {
    this.searchDataServiceService.getProductFromSearchBox('Co0py').subscribe(
      (response: any) => {
        console.log('response body' + response.body);
        this.product = response;
      }
    );
  }

}
