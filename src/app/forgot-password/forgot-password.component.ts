import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  title = 'Reset Your Password';
  email: string = ''
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
      email: ['', Validators.required]
    });
  }

  resetPassword(){
    
  }
}



