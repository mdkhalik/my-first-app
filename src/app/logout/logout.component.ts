import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
//import { HardCodedAuthenticationServiceService } from '../service/hard-coded-authentication-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public basicAuthService: BasicAuthenticationService
    ) { }

  ngOnInit(): void {
    this.basicAuthService.logout();
  }

}
