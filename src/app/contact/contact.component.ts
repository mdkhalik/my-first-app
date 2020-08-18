import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';


export class Feedback{
  constructor(
    public name: string,
    public email: string,
    public feedback1: string
  ){}
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string= ''
  email: string = ''
  textArea1: string = ''
  constructor(public basicAuthService:BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  submitFeedback(){
    console.log('name='+this.name+' ,email='+this.email+' feedback='+this.textArea1)
     this.basicAuthService.submitFeedback(this.name,this.email,this.textArea1).subscribe(
      response => {
        console.log('email sent successfully');
      }
    );
  }

}
