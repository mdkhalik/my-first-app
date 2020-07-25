import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationServiceService } from '../service/hard-coded-authentication-service.service';

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
    public hardCodedAuthenticationService: HardCodedAuthenticationServiceService) { }
  ngOnInit(): void {
  }

  handleLogin(): void {
    if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.inValidLogin = false;
    } else {
      this.inValidLogin = true;
    }
    console.log(this.username);
    console.log(this.password);
  }
}
