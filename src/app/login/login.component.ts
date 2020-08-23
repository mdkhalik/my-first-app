import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { HardCodedAuthenticationServiceService } from '../service/hard-coded-authentication-service.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  inValidLogin = false;
  constructor(private router: Router,
    //public hardCodedAuthenticationService: HardCodedAuthenticationServiceService,
    public basicAuthService: BasicAuthenticationService) { }
  ngOnInit(): void {
  }

   handleLogin(): void {
     if (this.basicAuthService.authenticate(this.email, this.password)) {
       this.router.navigate(['home', this.email])
       this.inValidLogin = false;
     } else {
       this.inValidLogin = true;
     }
   }
  handleBasicAuthLogin(): void {
    console.log('inside handlebasic auth()=' + this.email);
    console.log('inside handlle basic auth() password=' + this.password);
    this.basicAuthService.retrieveBasicAuthService(this.email, this.password).subscribe(
      data => {
        console.log('data' + data)
        if (data['name'] != null) {
          console.log(`data before navigation${data}`)
          this.router.navigate(['../home', this.email])
          //working fine if authguard not availablethis.router.navigate(['../sample2'])
          //this.router.navigateByUrl(['/welcome', this.username])
          //this.router.navigate(["../product"])
          console.log(`data after navigation${data}`)
          this.inValidLogin = false;
        }
      },
      error => {
        console.log("error data before navigation" + error)
        console.log(error);
        this.inValidLogin = true;
      }
    )
  }
  //retrieveJWTAuthService
  handleJWTAuthLogin(): void {
    this.basicAuthService.retrieveJWTAuthService(this.email, this.password).subscribe(
      data => {
        console.log('token' + sessionStorage.getItem('token'))
        //if (data['name'] != null) {
        console.log(`data before navigation${data}`)
        this.router.navigate(['../home', this.email])
        //working fine if authguard not availablethis.router.navigate(['../sample2'])
        //this.router.navigateByUrl(['/welcome', this.username])
        //this.router.navigate(["../product"])
        console.log(`data after navigation${data}`)
        this.inValidLogin = false;
        //}
      },
      error => {
        console.log("error data before navigation" + error)
        console.log(error);
        this.inValidLogin = true;
      }
    )
  }
}
