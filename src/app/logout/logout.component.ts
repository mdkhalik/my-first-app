import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationServiceService } from '../service/hard-coded-authentication-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public hardCodedAuthenticationService: HardCodedAuthenticationServiceService) { }

  ngOnInit(): void {
    this.hardCodedAuthenticationService.logout();
  }

}
