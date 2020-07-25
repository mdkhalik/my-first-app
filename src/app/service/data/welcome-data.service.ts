import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(public http: HttpClient) { }

  executeHelloWorldBeanService() {
    //console.log(this.http.get('http://localhost:8085/hello-world-bean').subscribe());
    // console.log('execute hello world bean service');
   return this.http.get('http://localhost:8085/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithParam(name: string) {
   return this.http.get<HelloWorldBean>(`http://localhost:8085/hello-world-bean/${name}`);
  }
}

