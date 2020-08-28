import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
//import { SignupComponent } from './signup/signup.component';
//import { SearchresultComponent } from './searchresult/searchresult.component';
import { SearchComponent } from './search/search.component';
import { SampletestComponent } from './sampletest/sampletest.component';
import { Sampletest2Component } from './sampletest2/sampletest2.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationSuccessfulComponent } from './registration-successful/registration-successful.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
  //  { path: 'signup', component: SignupComponent },
  { path: 'registration', component: RegistrationComponent },
    { path: 'sample', component: SampletestComponent, canActivate: [RouteGuardService] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'sample2', component: Sampletest2Component },
    { path: 'welcome/:name', component: WelcomeComponent },
    { path: 'home/:name', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'forgetPassword', component: ForgotPasswordComponent },
    // { path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService] },
    { path: 'logout', component: LogoutComponent },
    { path: 'successfulRegistration', component: RegistrationSuccessfulComponent },
    { path: 'product', component: ProductComponent, canActivate: [RouteGuardService] },
    { path: 'reset', component: ResetPasswordComponent },
    { path: 'contact', component: ContactComponent, canActivate: [RouteGuardService] },
    { path: 'aboutus', component: AboutComponent, canActivate: [RouteGuardService] },
    { path: 'searchBar', component: SearchbarComponent, canActivate: [RouteGuardService] },
   { path: 'searchComponent', component: SearchComponent, canActivate: [RouteGuardService] },
    { path: '**', component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
