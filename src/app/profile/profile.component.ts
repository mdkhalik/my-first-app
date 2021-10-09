import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AUTHENTICATED_USER, BasicAuthenticationService } from '../service/basic-authentication.service';
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
  user: User;
  newEmail : string;
  constructor(private basicAuthService: BasicAuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
     //this.email = sessionStorage.getItem('authenticatedUser');
     this.basicAuthService.getProfile().subscribe(
      (response: any) => {
        console.log('profile api response' + response);
        this.user = response;
        console.log('firstName='+this.user.firstName)
        console.log('lastName='+this.user.lastName)
        console.log('email='+this.user.email)
      }
    );
    //  this.fname = sessionStorage.getItem('password');
    //  this.email = sessionStorage.getItem('email');
    //  this.mobile = sessionStorage.getItem('mobile');
  } 

  changePassword(email:string){
       let mail = sessionStorage.getItem(AUTHENTICATED_USER);
       return this.basicAuthService.changePassword(email).subscribe(
         data => {
           console.log('inside change password');
         }
     )
  }
  // updateEmail(email:string , newEmail:string){
  //      let mail = sessionStorage.getItem(AUTHENTICATED_USER);
  //      return this.basicAuthService.updateEmail(email, newEmail).subscribe(
  //       data => {
  //         console.log('inside update email');
  //       }
  //     )
  // }

  doUpdateEmail(){
    this.router.navigate(["/updateEmail"]);
  }
}
