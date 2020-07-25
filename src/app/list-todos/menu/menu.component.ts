import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationServiceService } from 'src/app/service/hard-coded-authentication-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn:boolean = false;
  constructor(public hardCodedAuthenticationService: HardCodedAuthenticationServiceService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.hardCodedAuthenticationService.isUserLoggedIn();
  }

}
