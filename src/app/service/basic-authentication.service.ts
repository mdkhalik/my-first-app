import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class AuthenticationBean {
  constructor(message: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(public http: HttpClient) { }

  //   createBasicAuthenticationHttpHeader(){
  //  }

  retrieveBasicAuthService(username: any, password: any) {
    console.log('inside retrieveBasicAuthService()=' + username);
    console.log('inside retrieveBasicAuthService() password=' + password);

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    console.log('basicauthheaderstring' + basicAuthHeaderString)
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    console.log('making rest get call');
    //return this.http.get<Product[]>('http://localhost:8088/products/products',{headers});
    return this.http.get<AuthenticationBean>(`http://localhost:8088/basicauth`, { headers })
      .pipe(
        map(
          data => {
            sessionStorage.setItem('authenticatedUser', username)
            sessionStorage.setItem('token', basicAuthHeaderString)
            console.log('sessionstorage=' + sessionStorage.getItem('AuthenticatedUser'))
            console.log(data)
            return data;
          }
        )
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null);
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser')
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem('token')
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
