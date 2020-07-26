import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationServiceService {

  constructor(public httpClient: HttpClientModule) { }

  authenticate(username: string, password: string) {
    // if (username === 'Manzer' && password === 'Nishi') {
    //   sessionStorage.setItem('authenticatedUser', username)
    //   return true;
    // }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
