import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
//import { ListTodosComponent } from './list-todos/list-todos.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './list-todos/menu/menu.component';
import { FooterComponent } from './list-todos/footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
//import { SignupComponent } from './signup/signup.component';
//import { SearchresultComponent } from './searchresult/searchresult.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SampletestComponent } from './sampletest/sampletest.component';
import { Sampletest2Component } from './sampletest2/sampletest2.component';
import { HttpInterceptorBasicAuthService } from './service/http/http-interceptor-basic-auth.service';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { SearchOutputComponent } from './search-output/search-output.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DairyProductComponent } from './dairy-product/dairy-product.component';
import { BakeryProductComponent } from './bakery-product/bakery-product.component';
import { CerealProductComponent } from './cereal-product/cereal-product.component';
import { ImmunityProductComponent } from './immunity-product/immunity-product.component';
import { KitchenProductComponent } from './kitchen-product/kitchen-product.component';
import { SoapProductComponent } from './soap-product/soap-product.component';
import { DetergentProductComponent } from './detergent-product/detergent-product.component';
import { ToothPasteProductComponent } from './tooth-paste-product/tooth-paste-product.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { OnlineServicesComponent } from './online-services/online-services.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationSuccessfulComponent } from './registration-successful/registration-successful.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
   // ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
  //  SignupComponent,
  //  SearchresultComponent,
    HomeComponent,
    SearchComponent,
    SampletestComponent,
    Sampletest2Component,
    TodoComponent,
    HeaderComponent,
    SearchOutputComponent,
    SearchbarComponent,
    DairyProductComponent,
    BakeryProductComponent,
    CerealProductComponent,
    ImmunityProductComponent,
    KitchenProductComponent,
    SoapProductComponent,
    DetergentProductComponent,
    ToothPasteProductComponent,
    ProfileComponent,
    ServicesComponent,
    OnlineServicesComponent,
    RegistrationComponent,
    RegistrationSuccessfulComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule
  ],
  providers: [
      {provide: LocationStrategy, useClass: HashLocationStrategy},
     // comment it when using JWT Auth
      {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService,multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
