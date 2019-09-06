import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {Page3Component} from './page3/page3.component';
import {MyCartComponent} from './my-cart/my-cart.component';
import {MyAccountComponent} from './my-account/my-account.component';
import {LandingComponent} from './landing/landing.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
  {path: 'page3', component: Page3Component},
  {path: 'my-cart', component: MyCartComponent},
  {path: 'my-account', component: MyAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }