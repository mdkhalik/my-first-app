import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

export class User{
  constructor(

  ){}
}
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  title = 'Reset Your Password';
  email: string = '';
  angForm: FormGroup;
  inValidEmail =  false;
  errorEmailMessage : string;
  statusMessage: string;
  //data: any;


  constructor(private formBuilder: FormBuilder,
    private basicAuthService: BasicAuthenticationService,
    private router: Router) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  forgetPassword(){
    this.basicAuthService.checkEmail(this.email).subscribe(
      data => {
        //console.log('fName' + data.data.fName);
        console.log('inside data loop of reset password'+data);
        //this.data = data;
        this.statusMessage = data.statusMessage;
        this.router.navigate(["/reset"]);
        //if (data['name'] != null) {
        //console.log(`data before navigation${data}`)
        //this.router.navigate(['../home', this.username])
        //working fine if authguard not availablethis.router.navigate(['../sample2'])
        //this.router.navigateByUrl(['/welcome', this.username])
        //this.router.navigate(["../product"])
        //console.log(`data after navigation${data}`)
        //this.inValidLogin = false;
        //}
      },
      error => {
        console.log("error data before navigation" + error)
        this.statusMessage = error.error.statusMessage;
        //console.log('fName' + data.data.fName);
        //console.log('inside error loop of reset password');
      }
    )
  }
}



