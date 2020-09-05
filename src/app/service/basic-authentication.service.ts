import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SelectorListContext } from '@angular/compiler';
import { API_URL } from '../app.constant';

export const TOKEN = 'token'
export const AUTHENTICATED_USER ='authenticatedUser'
export class AuthenticationBean {
  constructor(message: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  email: string = '';
  constructor(public http: HttpClient) { }

  //   createBasicAuthenticationHttpHeader(){
  //  }

  authenticate(username: string, password: string) {
    if (username === 'Manzer' && password === 'Ammi') {
      sessionStorage.setItem(AUTHENTICATED_USER, username)
      return true;
    }
    return false;
  }
  
  retrieveBasicAuthService(username: any, password: any) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    //return this.http.get<Product[]>('${API_URL}/products/products',{headers});
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, { headers })
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username)
            sessionStorage.setItem(TOKEN, basicAuthHeaderString)
            return data;
          }
        )
      );
  }
  checkEmail(email: string){
     console.log('email1='+email);
     return this.http.get<any>(`${API_URL}/forget-password/${email}`);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null);
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  retrieveJWTAuthService(username: any, password: any) {
    console.log('username='+username+', password='+password);
    return this.http.post<any>(`${API_URL}/authenticate`, { username, password })
      .pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username)
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
            return data;
          }
        )
      );
  }

  registration(firstName: string,lastName: string, password: string,email: string){
    console.log('usernamepasswordemial='+firstName+','+password+','+email+','+lastName)
    return this.http.post<any>(`${API_URL}/register`, { firstName,lastName, password, email })
    .pipe(
      map(
        data => {
          console.log("responser="+data)
          //sessionStorage.setItem(AUTHENTICATED_USER, username)
          //sessionStorage.setItem('token', `Bearer ${data.token}`)
          return data;
        }
      )
    );
  }
  submitFeedback(name: any,email: any,feedback: any){
    console.log('name in basicAuth='+name+' ,email='+email+' feedback='+feedback)
    return this.http.post<any>(`${API_URL}/feedback`,{name,email,feedback})
    .pipe(
      map(
        data => {
          console.log('response='+data)
          return data;
        }
      )
    )
  }
  resetPassword(passwordToken:string, password: string){
    console.log('new password='+password+' passowrdtoiken='+passwordToken);
    return this.http.post<any>(`${API_URL}/reset-password`,{password,passwordToken})
    .pipe(
      map(
        data => {
          console.log("response="+data)
          console.log("response message="+data.message);
          //sessionStorage.setItem('authenticatedUser', username)
          //sessionStorage.setItem('token', `Bearer ${data.token}`)
          return data;
        }
      )
    );
    }
    getProfile(){
      console.log('inside getProfile()');
      return this.http.get<any>(`${API_URL}/getProfile/${sessionStorage.getItem(AUTHENTICATED_USER)}`)
    }
}
