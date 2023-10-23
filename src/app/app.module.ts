import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/material.module';
import{HttpClientModule} from '@angular/common/http'
import{ToastrModule} from 'ngx-toastr';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { JobSearchComponent } from './job-seeker/job-search/job-search.component';
import { JobSeekerProfileComponent } from './job-seeker/job-seeker-profile/job-seeker-profile.component';
import { JobNotificationsComponent } from './job-seeker/job-notifications/job-notifications.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { MyProfileComponent } from './my-profile/my-profile.component';



@NgModule({
  declarations: [
    AppComponent,
   
    LoginComponent,
    HomeComponent,
    SignUPComponent,
    JobSearchComponent,
    JobSeekerProfileComponent,
    JobNotificationsComponent,
    DashbordComponent,
    MyProfileComponent
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
 BrowserAnimationsModule,
 ReactiveFormsModule,
 HttpClientModule,
 ToastrModule.forRoot(),
 

    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
