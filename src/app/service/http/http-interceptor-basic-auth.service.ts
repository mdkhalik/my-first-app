import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   //let username = 'user';
   //let password = '98a6b4a3-0e34-4635-a95a-9b52d0ea0dac'
   let username = 'Manzer';
   let password = 'Nishi'
   let basicAuthHttpString = 'Basic '+window.btoa(username+":"+password)

   request = request.clone({
     setHeaders:{
       Authorization : basicAuthHttpString
     }
   })

   return next.handle(request);
  }
}
