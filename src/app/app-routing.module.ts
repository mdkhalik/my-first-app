import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService] },
    { path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService] },
    { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
    { path: 'product', component: ProductComponent, canActivate: [RouteGuardService] },
    { path: 'contact', component: ContactComponent, canActivate: [RouteGuardService] },
    { path: 'aboutus', component: AboutComponent, canActivate: [RouteGuardService] },
    { path: '**', component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
