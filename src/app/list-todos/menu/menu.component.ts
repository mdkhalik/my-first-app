import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationServiceService } from 'src/app/service/hard-coded-authentication-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn: boolean = false;
  username1 = '';
  constructor(public hardCodedAuthenticationService: HardCodedAuthenticationServiceService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.hardCodedAuthenticationService.isUserLoggedIn();
    this.username1 = sessionStorage.getItem('authenticatedUser')
  }

}
