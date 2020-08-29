import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  // angForm: FormGroup;
  // password:string;
   constructor(//private formBuilder: FormBuilder,
  //   public basicAuthService:BasicAuthenticationService
  ) 
  { 
  //  this.createForm();
  }

  ngOnInit(): void {
  }

  // createForm() {
  //   this.angForm = this.formBuilder.group({
  //     password: ['', Validators.required],
  //     cpassword: ['', Validators.required]
  //   });
  // }
  // resetPassword(){
  //   this.basicAuthService.createNewPassword(this.password).subscribe(
  //     data => {
  //       //console.log('fName' + data.data.fName);
  //       console.log('data part of reset password');
  //     },
  //     error => {
  //       console.log("error part of reset password" + error)
  //     }
  //   )
  // }
}
