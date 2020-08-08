import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title = 'Sign Up for Millat Mart';
  angForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
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
}
