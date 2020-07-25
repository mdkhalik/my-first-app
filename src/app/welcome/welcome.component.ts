import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  welcomeMessageFromService = '';
  errorMessageFromService = '';
  constructor(private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService, public http: HttpClient) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeData() {
    this.welcomeDataService.executeHelloWorldBeanService();
  }

  getWelcomeDataWithParam() {
    this.welcomeDataService.executeHelloWorldBeanServiceWithParam(this.name).subscribe(
      (response: any) => this.handleSuccessfulResponse(response),
      (error: any) => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: { message: string }) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: { message: string }) {
    this.errorMessageFromService = error.message;
  }
}
