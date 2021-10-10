import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AUTHENTICATED_USER, BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-updateEmail',
  templateUrl: './updateEmail.component.html',
  styleUrls: ['./updateEmail.component.css']
})
export class UpdateEmailComponent implements OnInit {

  statusMessage: string = 'Email Updated successfully';
  email:string = sessionStorage.getItem(AUTHENTICATED_USER);
  newEmail:string;
  angForm1: FormGroup;
  validResponse : boolean = false;
  constructor(private basicAuthService: BasicAuthenticationService,
    private formBuilder: FormBuilder) {
      this.createForm();
     }

  ngOnInit(): void {
  }

  createForm() {
    this.angForm1 = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  updateEmail(){
        return this.basicAuthService.updateEmail(this.email, this.newEmail).subscribe(
           data => {
             this.validResponse = true;
            console.log('inside update email');
           }
        )
   }
}
