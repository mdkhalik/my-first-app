import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from 'src/app/service/basic-authentication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public basicAuthenticationService: BasicAuthenticationService,) { }

  ngOnInit(): void {
  }

}
