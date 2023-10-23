import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PostJobListComponent } from './post-job-list/post-job-list.component';
import { MangeJobApplicationComponent } from './mange-job-application/mange-job-application.component';

import { DashbordComponent } from '../dashbord/dashbord.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { HomeComponent } from '../home/home.component';



@NgModule({
  declarations: [
   
    PostJobListComponent,
    MangeJobApplicationComponent,
  CompanyProfileComponent,
    DashbordComponent,
    MyProfileComponent,
    HomeComponent,
    DashbordComponent,
    MyProfileComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class JobProviderModule { }
