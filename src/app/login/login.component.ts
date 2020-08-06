import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationServiceService } from '../service/hard-coded-authentication-service.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  inValidLogin = false;
  constructor(private router: Router,
    public hardCodedAuthenticationService: HardCodedAuthenticationServiceService,
    public basicAuthService: BasicAuthenticationService) { }
  ngOnInit(): void {
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
  handleBasicAuthLogin(): void {
    console.log('inside handlebasic auth()=' + this.username);
    console.log('inside handlle basic auth() password=' + this.password);
    this.basicAuthService.retrieveBasicAuthService(this.username, this.password).subscribe(
      data => {
        console.log('data' + data)
        if (data['name'] != null) {
          console.log(`data before navigation${data}`)
          this.router.navigate(['../welcome', this.username])
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
}
