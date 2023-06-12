import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';



import { UserhomepageComponent } from './userhomepage/userhomepage.component';

import { HomepageComponent } from './homepage/homepage.component';

import { AddEventComponent } from './add-event/add-event.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';

import { AdminHome1Component } from './admin-home1/admin-home1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    
    SignUpComponent,
   
    
 
    UserhomepageComponent,
   
    HomepageComponent,
        
        AddEventComponent,
        ViewEventComponent,
        UpdateEventComponent,
        DeleteEventComponent,
       
        AdminHome1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
