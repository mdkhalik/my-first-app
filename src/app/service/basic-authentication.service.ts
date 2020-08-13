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

  authenticate(username: string, password: string) {
    if (username === 'Manzer' && password === 'Nishi') {
      sessionStorage.setItem('authenticatedUser', username)
      return true;
    }
    return false;
  }
  
  retrieveBasicAuthService(username: any, password: any) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    //return this.http.get<Product[]>('http://localhost:8088/products/products',{headers});
    return this.http.get<AuthenticationBean>(`http://localhost:8088/basicauth`, { headers })
      .pipe(
        map(
          data => {
            sessionStorage.setItem('authenticatedUser', username)
            sessionStorage.setItem('token', basicAuthHeaderString)
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

  retrieveJWTAuthService(username: any, password: any) {
    return this.http.post<any>(`http://localhost:8088/authenticate`, { username, password })
      .pipe(
        map(
          data => {
            sessionStorage.setItem('authenticatedUser', username)
            sessionStorage.setItem('token', `Bearer ${data.token}`)
            return data;
          }
        )
      );
  }

  saveNewUserIntoDB(username: string,password: string,email: string,mobile: number){
    console.log('usernamepasswordemial='+username+','+password+','+email+','+mobile)
    return this.http.post<any>(`http://localhost:8088/createNewUser`, { username, password, email, mobile })
    .pipe(
      map(
        data => {
          console.log("responser="+data)
          //sessionStorage.setItem('authenticatedUser', username)
          //sessionStorage.setItem('token', `Bearer ${data.token}`)
          return data;
        }
      )
    );
  }
}
