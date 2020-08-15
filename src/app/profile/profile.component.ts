import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string = '';
  password: string = '';
  email: string = '';
  mobile: string = '';
  constructor() { }

  ngOnInit(): void {
     this.username = sessionStorage.getItem('authenticatedUser');
     this.password = sessionStorage.getItem('password');
     this.email = sessionStorage.getItem('email');
     this.mobile = sessionStorage.getItem('mobile');
  }

}
