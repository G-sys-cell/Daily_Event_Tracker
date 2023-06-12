import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHome1Component } from './admin-home1/admin-home1.component';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { UserhomepageComponent } from './userhomepage/userhomepage.component';


const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  
{
  path:'signup',
  component:SignUpComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'adminhomepage',
  component:AdminHome1Component
},
{
  path:'userhomepage',
  component:UserhomepageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
