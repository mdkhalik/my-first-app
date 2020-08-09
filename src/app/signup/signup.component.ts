import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { Router } from '@angular/router';

// export class NewUser{
//   constructor(
//     private username: string,
//     private password: string,
//     private email: string,
//     private mobile: number
//     )
// }
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title = 'Sign Up for Millat Mart';
  username: string = ''
  password: string = ''
  email: string = ''
  mobile: number;
  angForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private basicAuthService: BasicAuthenticationService,
    private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required]
    });
  }

  saveNewUserIntoDB() {
    console.log('username' + this.angForm.value + ' email=' + this.angForm.value)
    this.basicAuthService.saveNewUserIntoDB(
      this.username, this.password, this.email, this.mobile).subscribe(
        data => {
          console.log('data' + data)
          this.router.navigate(['../login'])
        },
        error => {
          console.log("error data before navigation" + error)
        }
      )
  }

  // this.basicAuthService.retrieveJWTAuthService(this.username, this.password).subscribe(
  //   data => {
  //     console.log('data' + data)
  //     //if (data['name'] != null) {
  //     console.log(`data before navigation${data}`)
  //     this.router.navigate(['../home', this.username])
  //     //working fine if authguard not availablethis.router.navigate(['../sample2'])
  //     //this.router.navigateByUrl(['/welcome', this.username])
  //     //this.router.navigate(["../product"])
  //     console.log(`data after navigation${data}`)
  //     this.inValidLogin = false;
  //     //}
  //   },
  //   error => {
  //     console.log("error data before navigation" + error)
  //     console.log(error);
  //     this.inValidLogin = true;
  //   }
  //)
}
