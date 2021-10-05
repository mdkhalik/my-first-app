import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
export class User {
  constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public email:  string,
      public password: string
  ) { }
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  user= User;
  constructor(private basicAuthService: BasicAuthenticationService) { }

  ngOnInit(): void {
     //this.email = sessionStorage.getItem('authenticatedUser');
     this.basicAuthService.getProfile().subscribe(
      (response: any) => {
        console.log('profile api response' + response);
        this.user = response;
        console.log('first='+this.user)
      }
    );
    //  this.fname = sessionStorage.getItem('password');
    //  this.email = sessionStorage.getItem('email');
    //  this.mobile = sessionStorage.getItem('mobile');
  } 

}
