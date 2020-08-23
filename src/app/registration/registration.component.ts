import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = 'Sign Up for Millat Mart';
  firstName: string = ''
  password: string = ''
  email: string = ''
  lastName: string;
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
      firstName: ['', Validators.required],
      password: ['', Validators.required],
      // repassword: ['', Validators.required],
      email: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  saveNewUserIntoDB() {
    // console.log('username' + this.angForm.value + ' email=' + this.angForm.value)
    console.log('firstname' + this.firstName+ 'lastname' + this.lastName+ ' password=' + this.password+' email='+this.email)
    this.basicAuthService.saveNewUserIntoDB(
      this.firstName,this.lastName, this.password, this.email).subscribe(
        data => {
          console.log('data' + data)
          this.router.navigate(['../login'])
        },
        error => {
          console.log("error data before navigation" + error)
        }
      )
  }

}
