import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

   angForm: FormGroup;
   password:string;
   cpassword:string;
   passwordToken:string;
   message: string;
   code:number;
   constructor(private formBuilder: FormBuilder,
     public basicAuthService:BasicAuthenticationService){ 
    this.createForm();
  }

  ngOnInit(): void {
  }

   createForm() {
     this.angForm = this.formBuilder.group({
       password: ['', Validators.required],
       cpassword: ['', Validators.required],
       passwordToken: ['', Validators.required]
     });
   }
   resetPassword(){
     this.basicAuthService.resetPassword(this.passwordToken,this.password).subscribe(
       data => {
         //console.log('fName' + data.data.fName);
         console.log('data part of reset password');
       },
       error => {
         console.log(error.error.toString());
       
         this.handleError(error);
         //console.log('error message='+this.message+', error code='+this.code);
       }
     )
   }

  //  private handleError(res: HttpErrorResponse) {
  //   Observable.throw(new Error({...res}));
  // }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.body}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
